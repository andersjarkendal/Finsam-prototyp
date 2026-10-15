const demoLines = [
  { time: "00:04", speaker: "Förhörsledare", kind: "speaker", text: "Kan du berätta med egna ord vad som hände den morgonen?" },
  { time: "00:09", speaker: "Person A", kind: "person", text: "Jag kom till kontoret strax före åtta. Jag tror klockan var ungefär tio i." },
  { time: "00:16", speaker: "Förhörsledare", kind: "speaker", text: "Vad gjorde du när du kom dit?" },
  { time: "00:21", speaker: "Person A", kind: "person", text: "Jag gick in genom huvudentrén och satte mig vid min plats. Det var ganska lugnt då." },
  { time: "00:29", speaker: "Person A", kind: "person", text: "Senare på förmiddagen fick jag ett samtal från en kollega." },
  { time: "00:36", speaker: "Förhörsledare", kind: "speaker", text: "Minns du ungefär vilken tid samtalet kom?" },
  { time: "00:41", speaker: "Person A", kind: "person", text: "Runt halv tio, skulle jag säga. Jag tittade inte på klockan just då." },
  { time: "00:48", speaker: "Person A", kind: "person", text: "Vi pratade bara en kort stund om mötet som skulle vara efter lunch." }
];

const $ = (id) => document.getElementById(id);
const state = { recording: false, hasStarted: false, transcriptionEnabled: true, elapsed: 0, lines: [], summaries: [], timerId: null, feedId: null, nextLine: 0, lastSummarized: 0, finalCreated: false, pairConnected: false };
const transcriptList = $("transcriptList");
const transcriptPlaceholder = $("transcriptPlaceholder");
const toast = $("toast");

function pad(n) { return String(n).padStart(2, "0"); }
function clock(seconds) { return `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`; }
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2600);
}
function addTranscriptLine(line) {
  state.lines.push(line);
  transcriptPlaceholder.classList.add("hidden");
  const row = document.createElement("div");
  row.className = "transcript-line new-line";
  row.innerHTML = `<span class="transcript-time">${line.time}</span><span class="speaker ${line.kind === "person" ? "person" : ""}">${line.speaker}</span><span class="transcript-text">${line.text}</span>`;
  transcriptList.appendChild(row);
  setTimeout(() => row.classList.remove("new-line"), 1400);
  $("transcriptScroll").scrollTop = $("transcriptScroll").scrollHeight;
  updateSummaryButton();
}
function updateTimers() {
  const time = clock(state.elapsed);
  $("timer").textContent = time;
  $("phoneTimer").textContent = time;
}
function updateTranscriptionUI() {
  const { recording, transcriptionEnabled } = state;
  const badge = $("transcriptStateBadge");
  const badgeLabel = $("transcriptStateLabel");
  const notice = $("transcriptionPausedNotice");
  let status;
  if (recording && transcriptionEnabled) {
    status = "Ljud spelas in och transkriberas löpande.";
    badgeLabel.textContent = "TRANSKRIBERING PÅ";
  } else if (recording) {
    status = "Ljudinspelningen fortsätter. Transkriberingen är avstängd.";
    badgeLabel.textContent = "LJUD PÅ · TRANSKRIBERING AV";
  } else if (state.hasStarted && transcriptionEnabled) {
    status = "Ljudinspelningen är pausad. Transkriberingen väntar tills ljudet återupptas.";
    badgeLabel.textContent = "LJUD PAUSAT · TRANSKRIBERING VÄNTAR";
  } else if (state.hasStarted) {
    status = "Ljudinspelningen är pausad. Transkriberingen är avstängd.";
    badgeLabel.textContent = "LJUD PAUSAT · TRANSKRIBERING AV";
  } else if (transcriptionEnabled) {
    status = "Ljud och transkribering är redo.";
    badgeLabel.textContent = "TRANSKRIBERING PÅSLAGEN";
  } else {
    status = "Transkribering är avstängd. Starta ljudinspelningen om du vill spela in utan text.";
    badgeLabel.textContent = "TRANSKRIBERING AV";
  }
  $("transcriptionState").textContent = status;
  const transcriptionStatus = recording
    ? transcriptionEnabled ? "PÅGÅR" : "AV"
    : state.hasStarted
      ? transcriptionEnabled ? "VÄNTAR · LJUD PAUSAT" : "AV"
      : transcriptionEnabled ? "PÅSLAGEN · VÄNTAR PÅ LJUD" : "AV";
  $("transcriptionStatusValue").textContent = transcriptionStatus;
  $("phoneTranscriptionState").textContent = recording
    ? transcriptionEnabled ? "TRANSKRIBERING PÅGÅR" : "TRANSKRIBERING AV"
    : state.hasStarted
      ? transcriptionEnabled ? "TRANSKRIBERING VÄNTAR" : "TRANSKRIBERING AV"
      : transcriptionEnabled ? "TRANSKRIBERING PÅ" : "TRANSKRIBERING AV";
  $("phoneRecordCard").classList.toggle("transcription-off", !transcriptionEnabled);
  $("phoneRecordCard").classList.toggle("transcription-waiting", state.hasStarted && !recording && transcriptionEnabled);
  $("transcriptionStatusCard").classList.toggle("is-off", !transcriptionEnabled);
  $("transcriptionStatusCard").classList.toggle("is-waiting", state.hasStarted && !recording && transcriptionEnabled);
  $("transcriptionStatusCard").classList.toggle("is-active", recording && transcriptionEnabled);
  badge.classList.toggle("transcript-off", !transcriptionEnabled);
  badge.classList.toggle("transcript-live", recording && transcriptionEnabled);
  notice.classList.toggle("hidden", transcriptionEnabled && !(state.hasStarted && !recording));
  if (!transcriptionEnabled) {
    notice.textContent = recording
      ? "LJUDINSPELNINGEN FORTSÄTTER · TRANSKRIBERINGEN ÄR AV. Slå på transkribering när du vill att nya yttranden ska visas som text."
      : "TRANSKRIBERINGEN ÄR AV. Ljudet spelas bara in när du startar ljudinspelningen.";
  } else if (state.hasStarted && !recording) {
    notice.textContent = "LJUDINSPELNINGEN ÄR PAUSAD. Transkriberingen fortsätter när du återupptar ljudinspelningen.";
  }
  if (state.lines.length === 0) {
    const title = $("transcriptPlaceholderTitle");
    const copy = $("transcriptPlaceholderText");
    if (recording && !transcriptionEnabled) {
      title.textContent = "Ljudinspelning pågår · text är av";
      copy.textContent = "Ljudet fortsätter att spelas in. Inga nya ord visas förrän du slår på transkriberingen.";
    } else if (recording) {
      title.textContent = "Ljudinspelning pågår";
      copy.textContent = "Transkribering är på. Nya ord visas här löpande.";
    } else if (state.hasStarted && !recording) {
      title.textContent = "Ljudinspelningen är pausad";
      copy.textContent = transcriptionEnabled ? "Återuppta ljudet när förhöret fortsätter. Transkriberingen väntar." : "Återuppta ljudet när förhöret fortsätter. Transkriberingen är avstängd.";
    } else if (!transcriptionEnabled) {
      title.textContent = "Transkribering är av";
      copy.textContent = "Du kan ändå spela in hela förhöret. Ljudet påverkas inte av den här inställningen.";
    } else {
      title.textContent = "Redo när du är";
      copy.textContent = "Starta ljudinspelningen på mobilen. Transkriberingen visas här om den är påslagen.";
    }
  }
}
function setRecording(active) {
  state.recording = active;
  document.body.classList.toggle("is-recording", active);
  if (active) state.hasStarted = true;
  $("phoneRecord").disabled = active;
  $("phoneRecordText").textContent = active ? "Ljud spelas in" : state.hasStarted ? "Fortsätt ljudinspelning" : "Starta ljudinspelning";
  $("phonePause").disabled = !active;
  $("phoneRecordState").textContent = active ? "LJUDINSPELNING PÅGÅR" : state.hasStarted ? "LJUD PAUSAT" : "MOBIL REDO ATT SPELA IN LJUD";
  $("waveLiveLabel").textContent = active ? "SPELAR IN · DEMO" : state.hasStarted ? "PAUSAD" : "VÄNTAR";
  $("phoneRecordCard").classList.toggle("recording", active);
  updateAudioStatus();
  updateTranscriptionUI();
  if (active) {
    if (!state.timerId) state.timerId = setInterval(() => { state.elapsed += 1; updateTimers(); }, 1000);
    if (!state.feedId) state.feedId = setInterval(() => {
      if (!state.recording || state.nextLine >= demoLines.length) return;
      if (!state.transcriptionEnabled) { state.nextLine += 1; return; }
      addTranscriptLine(demoLines[state.nextLine++]);
    }, 5200);
    if (state.lines.length === 0 && state.nextLine < demoLines.length) {
      if (state.transcriptionEnabled) addTranscriptLine(demoLines[state.nextLine++]);
      else state.nextLine += 1;
    }
  } else {
    clearInterval(state.timerId); state.timerId = null;
    clearInterval(state.feedId); state.feedId = null;
  }
}
function updateAudioStatus() {
  const card = $("audioStatusCard");
  $("audioStatusValue").textContent = state.recording
    ? "INSPELNING PÅGÅR"
    : state.hasStarted ? "PAUSAD" : "REDO ATT SPELA IN";
  card.classList.toggle("is-active", state.recording);
  card.classList.toggle("is-paused", state.hasStarted && !state.recording);
}
function startRecording() {
  if (!state.pairConnected) { showToast("Anslut mobilen genom att skanna QR-koden i datorvyn först."); return; }
  if (!state.recording) setRecording(true);
}
function makeSummaryText(lines) {
  const personLines = lines.filter(line => line.kind === "person");
  if (!personLines.length) return "I den här delen ställdes frågor om händelseförloppet. Inga uppgifter från den hörande har lagts till i demotexten ännu.";
  const timeMention = personLines.find(line => /klockan|halv|runt|före|tio i/i.test(line.text));
  return `Person A uppger att hen kom till kontoret strax före klockan åtta och gick in via huvudentrén. Senare fick hen ett kort samtal från en kollega, uppskattningsvis runt halv tio. Tidsangivelsen är enligt Person A en uppskattning. (${personLines.length} yttranden i denna del.)${timeMention ? "" : ""}`;
}
function createSummary() {
  if (state.lines.length === state.lastSummarized) {
    showToast("Det finns ingen ny transkriberad text att sammanfatta ännu.");
    return;
  }
  const chunk = state.lines.slice(state.lastSummarized);
  state.lastSummarized = state.lines.length;
  state.summaries.push({ title: `Del ${state.summaries.length + 1}`, time: clock(state.elapsed), text: makeSummaryText(chunk) });
  renderSummaries();
  showToast("Delsammanfattning skapad från exempeltexten.");
}
function renderSummaries() {
  const list = $("summaryList");
  $("summaryCount").textContent = state.summaries.length;
  $("finalCount").textContent = `${state.summaries.length} ${state.summaries.length === 1 ? "del" : "delar"}`;
  $("makeFinal").disabled = state.summaries.length === 0;
  if (!state.summaries.length) {
    list.innerHTML = `<div class="empty-summary"><span>▤</span><b>Inga delsammanfattningar ännu</b><small>Skapa en när en del av samtalet är klar.</small><button class="button button-small" id="firstSummary">＋ Skapa delsammanfattning</button></div>`;
    $("firstSummary").addEventListener("click", createSummary);
    return;
  }
  list.innerHTML = state.summaries.map((summary, index) => `<article class="summary-card"><div class="summary-card-head"><b>${summary.title}</b><span>${summary.time} · <button class="text-button edit-summary" data-index="${index}">Redigera</button></span></div><p class="summary-card-text">${summary.text}</p></article>`).join("");
  list.querySelectorAll(".edit-summary").forEach(button => button.addEventListener("click", () => {
    const card = button.closest(".summary-card");
    const idx = Number(button.dataset.index);
    const area = card.querySelector("textarea");
    if (area) {
      state.summaries[idx].text = area.value.trim() || state.summaries[idx].text;
      renderSummaries(); showToast("Ändringen sparad i demot."); return;
    }
    const p = card.querySelector(".summary-card-text");
    const editor = document.createElement("textarea"); editor.value = state.summaries[idx].text;
    p.replaceWith(editor); button.textContent = "Spara";
  }));
}
function createFinal() {
  if (!state.summaries.length) return;
  const text = state.summaries.map((s, i) => `${i + 1}. ${s.text}`).join("\n\n");
  $("finalText").textContent = `ÖVERSIKT\n${state.summaries.length} delsammanfattningar har sammanställts. Innehållet nedan bygger enbart på exempeltext och behöver i en riktig lösning granskas mot transkriberingen.\n\n${text}\n\nATT FÖLJA UPP\nKontrollera tidsangivelser och eventuella oklarheter mot den fullständiga inspelningen.`;
  $("finalResult").classList.remove("hidden");
  $("finalSummaryBar").classList.add("hidden");
  state.finalCreated = true;
  showToast("Slutsammanfattning skapad från delsammanfattningarna.");
}
function updateSummaryButton() {
  const changed = state.lines.length > state.lastSummarized;
  $("addSummary").title = changed ? "Skapa delsammanfattning" : "Vänta tills ny text har transkriberats";
}
function openPairing() { $("pairingModal").classList.remove("hidden"); }
function closePairing() { $("pairingModal").classList.add("hidden"); }
function updatePairingUI() {
  $("phonePairScreen").classList.toggle("hidden", state.pairConnected);
  $("phoneConnectedView").classList.toggle("hidden", !state.pairConnected);
  $("phoneScreen").classList.toggle("pairing-required", !state.pairConnected);
  $("phonePairScreen").setAttribute("aria-hidden", String(state.pairConnected));
  $("phoneConnectedView").setAttribute("aria-hidden", String(!state.pairConnected));
  $("phoneStatus").innerHTML = state.pairConnected
    ? '<span class="connected-icon">✓</span> Mobil ansluten <small>· simulerad</small>'
    : '<span class="connected-icon disconnected-icon">!</span> Mobil ej ansluten <small>· skanna QR-kod</small>';
}
function simulatePairing() {
  state.pairConnected = true;
  updatePairingUI();
  closePairing(); showToast("Demomobilen är nu simulerat ansluten.");
}
$("openPairing").addEventListener("click", openPairing);
$("closePairing").addEventListener("click", closePairing);
$("pairingModal").addEventListener("click", event => { if (event.target === $("pairingModal")) closePairing(); });
$("simulatePair").addEventListener("click", simulatePairing);
$("phoneRecord").addEventListener("click", startRecording);
$("phonePause").addEventListener("click", () => setRecording(false));
$("transcriptionToggle").addEventListener("change", event => {
  state.transcriptionEnabled = event.target.checked;
  updateTranscriptionUI();
  if (state.recording && !state.transcriptionEnabled) showToast("Ljudet spelas in vidare. Transkriberingen är avstängd.");
  else if (state.recording) showToast("Transkribering på. Nya yttranden visas löpande.");
});
$("phoneMark").addEventListener("click", () => {
  if (state.recording && !state.transcriptionEnabled) { showToast("Ljudet spelas in, men transkriberingen är av. Slå på den för att skapa en delsammanfattning."); return; }
  showToast("Ny del markerad i demon."); if (state.recording) createSummary();
});
$("addSummary").addEventListener("click", createSummary);
$("firstSummary").addEventListener("click", createSummary);
$("makeFinal").addEventListener("click", createFinal);
$("editFinal").addEventListener("click", () => {
  const editor = $("finalResult").querySelector("textarea");
  if (editor) {
    const p = document.createElement("div"); p.className = "final-result-body"; p.id = "finalText"; p.textContent = editor.value; editor.replaceWith(p);
    $("editFinal").textContent = "Redigera"; showToast("Ändringen sparad i demot."); return;
  }
  const el = $("finalText"); const area = document.createElement("textarea"); area.className = "final-result-body"; area.value = el.textContent; area.style.width = "100%"; area.style.minHeight = "180px"; area.style.border = "1px solid #dce8e6"; area.style.borderRadius = "6px"; area.style.padding = "10px"; area.style.font = "10px/1.7 'DM Sans',sans-serif"; el.replaceWith(area);
  $("editFinal").textContent = "Spara";
});
$("finishSession").addEventListener("click", () => { setRecording(false); showToast("Förhöret avslutades i demot."); });
$("addNote").addEventListener("click", () => showToast("Anteckningsfält ingår inte i den här första demon."));
$("scrollLatest").addEventListener("click", () => { $("transcriptScroll").scrollTop = $("transcriptScroll").scrollHeight; });
for (let i = 0; i < 120; i++) { const bar = document.createElement("i"); $("phoneWave").appendChild(bar); }
renderSummaries();
updatePairingUI();
updateAudioStatus();
updateTranscriptionUI();
