const demoDialogue = [
  { speaker: "Förhörsledare", kind: "speaker", topic: "Ankomst", text: "Vi börjar med måndagsmorgonen. Berätta i lugn och ro när du kom till kontoret och vad du minns." },
  { speaker: "Person A", kind: "person", topic: "Ankomst", text: "Jag kom strax före åtta, kanske tio i. Jag är inte helt säker på minuterna eftersom jag inte tittade på klockan." , summary: "Person A uppskattar att ankomsten till kontoret skedde strax före klockan åtta, men kan inte ange en exakt tid." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Ankomst", text: "Hur tog du dig in i byggnaden, och gick du direkt till din arbetsplats?" },
  { speaker: "Person A", kind: "person", topic: "Ankomst", text: "Jag använde huvudentrén med mitt passerkort. Sedan hängde jag av mig och gick till min plats." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Ankomst", text: "Var det någon annan på kontoret när du kom dit?" },
  { speaker: "Person A", kind: "person", topic: "Ankomst", text: "Jag såg en person längre bort i korridoren, men jag vet inte vem det var. Det var ganska lugnt." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Ankomst", text: "Vad gjorde du under den första stunden efter att du kommit fram?" },
  { speaker: "Person A", kind: "person", topic: "Ankomst", text: "Jag startade datorn, hämtade kaffe och gick igenom mejlen. Jag började med de vanliga arbetsuppgifterna." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Arbetsdagen", text: "När såg du kuvertet med kvittona senast före den här måndagen?" },
  { speaker: "Person A", kind: "person", topic: "Arbetsdagen", text: "På fredagen lade jag det på skrivbordet efter att ha sorterat några underlag. Jag minns inte om det låg till höger eller vänster." , summary: "Person A uppger att kuvertet senast sågs på skrivbordet på fredagen efter sortering av underlag. Placeringen på skrivbordet är osäker." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Arbetsdagen", text: "Var kuvertet öppet eller förslutet när du såg det på fredagen?" },
  { speaker: "Person A", kind: "person", topic: "Arbetsdagen", text: "Det var stängt, men jag hade inte tejpat igen det. Kvittona låg samlade där inne." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Arbetsdagen", text: "Hade du själv lagt alla kvitton i kuvertet?" },
  { speaker: "Person A", kind: "person", topic: "Arbetsdagen", text: "De flesta, tror jag. Ett par hade kommit från en kollega och jag kan inte säga säkert vem som lade in dem." , summary: "Person A tror att de flesta kvitton lades i kuvertet av hen själv, men uppger att några kom från en kollega och är osäker på vem som lade in dem." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Arbetsdagen", text: "Vad hände med kuvertet när du lämnade kontoret på fredagen?" },
  { speaker: "Person A", kind: "person", topic: "Arbetsdagen", text: "Jag tror att jag tog med det till arkivskåpet. Jag ville lägga det där över helgen, men minns inte om jag låste skåpet efteråt." , summary: "Person A tror att kuvertet flyttades till arkivskåpet inför helgen. Det är oklart om skåpet låstes." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Förvaring", text: "Var i skåpet brukar du lägga den typen av underlag?" },
  { speaker: "Person A", kind: "person", topic: "Förvaring", text: "På den mellersta hyllan, i en grå plastbricka. Där brukar vi förvara papper som ska stämmas av." , summary: "Enligt Person A brukar sådana underlag förvaras i en grå plastbricka på arkivskåpets mellersta hylla." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Förvaring", text: "Kontrollerade du på måndagen om kuvertet låg kvar på den platsen?" },
  { speaker: "Person A", kind: "person", topic: "Förvaring", text: "Ja, någon gång efter nio. Brickan var där, men jag såg inte kuvertet. Jag kan ha tittat ganska snabbt." , summary: "Person A uppger att brickan kontrollerades efter klockan nio på måndagen och att kuvertet då inte syntes. Kontrollen kan ha varit hastig." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Förvaring", text: "Flyttade du något annat i skåpet vid samma tillfälle?" },
  { speaker: "Person A", kind: "person", topic: "Förvaring", text: "Jag flyttade en pärm för att komma åt en mapp bakom den. Jag minns inte om jag tog ut hela brickan." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Förvaring", text: "Vem mer hade möjlighet att öppna arkivskåpet?" },
  { speaker: "Person A", kind: "person", topic: "Förvaring", text: "Flera i gruppen hade tillgång till nyckel. Jag känner till tre personer, men vet inte om listan är komplett." , summary: "Flera personer i gruppen hade enligt Person A tillgång till nyckel till arkivskåpet. Hen känner till tre, men vet inte om fler hade åtkomst." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Förvaring", text: "Hade du nyckeln med dig hela tiden under måndagen?" },
  { speaker: "Person A", kind: "person", topic: "Förvaring", text: "Jag hade den på min nyckelring. Jag lånade inte ut den, såvitt jag minns, men jag lade nyckelringen på skrivbordet ibland." , summary: "Person A uppger att nyckeln satt på den egna nyckelringen och inte lånades ut, men att nyckelringen ibland låg på skrivbordet." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Kontakter", text: "Du nämnde ett samtal från en kollega. När tror du att det kom?" },
  { speaker: "Person A", kind: "person", topic: "Kontakter", text: "Någon gång runt halv tio. Vi pratade om ett möte efter lunch och om vilka underlag som saknades." , summary: "Person A placerar ett samtal från en kollega runt halv tio. Samtalet gällde ett möte efter lunch och underlag som saknades." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Kontakter", text: "Minns du vem som ringde och om ni pratade om kuvertet?" },
  { speaker: "Person A", kind: "person", topic: "Kontakter", text: "Det var kollegan som samlade in kvitton. Jag tror inte att vi sa ordet kuvert, men vi pratade om att något underlag behövde kompletteras." , summary: "Samtalet var enligt Person A med kollegan som samlade in kvitton. Hen tror inte att kuvertet nämndes, men minns ett samtal om kompletterande underlag." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Kontakter", text: "Fick du något mejl eller meddelande efter det samtalet?" },
  { speaker: "Person A", kind: "person", topic: "Kontakter", text: "Jag fick ett mejl senare på förmiddagen. Där stod att kvitton saknades för två inköp, men jag öppnade det inte direkt." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Kontakter", text: "Vet du ungefär när du öppnade mejlet och vad du gjorde då?" },
  { speaker: "Person A", kind: "person", topic: "Kontakter", text: "Kanske vid elva. Jag sökte i en mapp på datorn och tänkte att kopior kunde finnas där." , summary: "Ett mejl om saknade kvitton kom senare på förmiddagen. Person A tror att det öppnades runt elva och att hen då sökte efter kopior i en digital mapp." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Kontakter", text: "Hittade du några kopior i den digitala mappen?" },
  { speaker: "Person A", kind: "person", topic: "Kontakter", text: "Jag hittade en skannad sida, men den saknade baksidan. Jag vet inte om det var ett av de kvitton som efterfrågades." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Avstämning", text: "När upptäckte du att själva kuvertet inte gick att hitta?" },
  { speaker: "Person A", kind: "person", topic: "Avstämning", text: "Efter lunch frågade kollegan efter underlagen. Då gick jag tillbaka till skåpet och tittade mer noggrant." , summary: "Efter lunch frågade kollegan efter underlagen. Person A uppger att hen då återvände till arkivskåpet och letade mer noggrant." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Avstämning", text: "Vad såg du när du kontrollerade skåpet igen?" },
  { speaker: "Person A", kind: "person", topic: "Avstämning", text: "Brickan stod kvar, men kuvertet låg inte där. Jag tittade även bakom pärmen och på hyllan under." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Avstämning", text: "Kontrollerade du skrivbordet eller frågade någon annan om kuvertet?" },
  { speaker: "Person A", kind: "person", topic: "Avstämning", text: "Jag tittade på mitt skrivbord och i pappershögen. Jag frågade sedan kollegan om hen hade flyttat något, men fick inget tydligt svar." , summary: "Person A letade på skrivbordet och frågade kollegan om något hade flyttats. Enligt Person A blev svaret inte tydligt." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Avstämning", text: "Sa kollegan att hen hade haft tillgång till arkivskåpet?" },
  { speaker: "Person A", kind: "person", topic: "Avstämning", text: "Kollegan sa att hen varit i arkivdelen tidigare under dagen, men jag vet inte om det var före eller efter min första kontroll." , summary: "Kollegan ska enligt Person A ha varit i arkivdelen samma dag. Tidpunkten i förhållande till Person A:s första kontroll är oklar." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Avstämning", text: "Har du själv flyttat, öppnat eller tagit med dig kuvertet efter fredagen?" },
  { speaker: "Person A", kind: "person", topic: "Avstämning", text: "Jag har inte medvetet tagit med mig kuvertet från kontoret. Jag kan inte utesluta att jag flyttade det när jag letade efter andra papper." , summary: "Person A förnekar att medvetet ha tagit kuvertet från kontoret, men utesluter inte att det kan ha flyttats i samband med sökandet efter andra papper." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Rutiner", text: "Hur brukar du göra när originalkvitton ska lämnas vidare för avstämning?" },
  { speaker: "Person A", kind: "person", topic: "Rutiner", text: "Jag brukar lägga dem i ett kuvert, skriva datum på framsidan och lämna det i brickan. Ibland skannar jag först." , summary: "Person A beskriver rutinen som att samla originalkvitton i ett daterat kuvert och lägga det i brickan, ibland efter skanning." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Rutiner", text: "Minns du om kuvertet var märkt med datum den här gången?" },
  { speaker: "Person A", kind: "person", topic: "Rutiner", text: "Jag tror att jag skrev fredagens datum, men det kan ha varit datumet från veckan innan. Jag kan inte vara säker." , summary: "Person A tror att kuvertet märktes med ett datum, men är osäker på om det var rätt fredag eller veckan innan." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Rutiner", text: "Finns det någon rutin för att notera när ett kuvert flyttas till arkivskåpet?" },
  { speaker: "Person A", kind: "person", topic: "Rutiner", text: "Inte vad jag känner till. Vi brukar meddela varandra, men jag gjorde ingen särskild anteckning om det." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Avslutning", text: "Är det något mer om måndagen eller hanteringen av kvittona som du tycker att vi bör känna till?" },
  { speaker: "Person A", kind: "person", topic: "Avslutning", text: "Jag minns att det var flera personer som kom och gick före lunch. Jag kan inte säga vilka som var vid skåpet." , summary: "Person A minns att flera personer rörde sig i lokalen före lunch, men kan inte ange vilka som besökte arkivskåpet." , uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Avslutning", text: "Finns det någon dokumentation som kan hjälpa till att kontrollera tider eller åtkomst?" },
  { speaker: "Person A", kind: "person", topic: "Avslutning", text: "Passerkortssystemet kan visa när man går in i byggnaden. Mejlet och kalendern kanske också hjälper med tiderna." , summary: "Person A pekar på passerkortsloggar, mejl och kalender som möjliga underlag för att kontrollera delar av tidslinjen." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Avslutning", text: "Är dina uppgifter i dag så fullständiga som du kan göra dem, eller vill du lägga till något?" },
  { speaker: "Person A", kind: "person", topic: "Avslutning", text: "Det är vad jag kommer ihåg just nu. Framför allt tiderna är ungefärliga, och jag vill inte gissa mer än så." , summary: "Person A uppger att detta är vad hen minns för närvarande och betonar att flera tidsangivelser är ungefärliga." , uncertain: true }
].map((line, index) => ({ ...line, time: clock(index * 5 + 3) }));

const $ = (id) => document.getElementById(id);
const state = { recording: false, hasStarted: false, transcriptionEnabled: true, elapsed: 0, lines: [], summaries: [], timerId: null, feedId: null, typingJob: null, typingTimeout: null, nextLine: 0, lastSummarized: 0, finalCreated: false, pairConnected: false };
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
function pauseTyping() {
  clearTimeout(state.typingTimeout);
  state.typingTimeout = null;
}
function advanceTyping() {
  const job = state.typingJob;
  if (!job || state.typingTimeout || !state.recording || !state.transcriptionEnabled) return;
  const typeNext = () => {
    state.typingTimeout = null;
    if (!state.recording || !state.transcriptionEnabled) return;
    job.index += 1;
    job.element.textContent = job.text.slice(0, job.index);
    $("transcriptScroll").scrollTop = $("transcriptScroll").scrollHeight;
    if (job.index >= job.text.length) {
      job.element.classList.remove("is-typing");
      state.typingJob = null;
      job.onComplete();
      return;
    }
    state.typingTimeout = setTimeout(typeNext, 22);
  };
  typeNext();
}
function typeTranscriptText(element, text, onComplete) {
  element.classList.add("is-typing");
  state.typingJob = { element, text, index: 0, onComplete };
  advanceTyping();
}
function addTranscriptLine(line) {
  transcriptPlaceholder.classList.add("hidden");
  const row = document.createElement("div");
  row.className = "transcript-line new-line";
  const time = document.createElement("span");
  time.className = "transcript-time";
  time.textContent = line.time;
  const speaker = document.createElement("span");
  speaker.className = `speaker ${line.kind === "person" ? "person" : ""}`;
  speaker.textContent = line.speaker;
  const text = document.createElement("span");
  text.className = "transcript-text";
  row.append(time, speaker, text);
  transcriptList.appendChild(row);
  setTimeout(() => row.classList.remove("new-line"), 1400);
  $("transcriptScroll").scrollTop = $("transcriptScroll").scrollHeight;
  typeTranscriptText(text, line.text, () => {
    state.lines.push(line);
    updateSummaryButton();
  });
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
  if (recording && transcriptionEnabled) {
    badgeLabel.textContent = "TRANSKRIBERING PÅ";
  } else if (recording) {
    badgeLabel.textContent = "LJUD PÅ · TRANSKRIBERING AV";
  } else if (state.hasStarted && transcriptionEnabled) {
    badgeLabel.textContent = "LJUD PAUSAT · TRANSKRIBERING VÄNTAR";
  } else if (state.hasStarted) {
    badgeLabel.textContent = "LJUD PAUSAT · TRANSKRIBERING AV";
  } else if (transcriptionEnabled) {
    badgeLabel.textContent = "TRANSKRIBERING PÅSLAGEN";
  } else {
    badgeLabel.textContent = "TRANSKRIBERING AV";
  }
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
  if (active) advanceTyping();
  else pauseTyping();
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
  if (!personLines.length) return "I den här delen ställdes frågor om händelseförloppet. Inga uppgifter från Person A finns med i den här delsammanfattningen ännu.";
  const points = [...new Set(personLines.map(line => line.summary).filter(Boolean))];
  const topics = [...new Set(lines.map(line => line.topic))];
  const questions = lines.filter(line => line.kind === "speaker").length;
  const uncertain = personLines.some(line => line.uncertain);
  const details = points.length ? points.map(point => `• ${point}`).join("\n") : `• Person A lämnade ${personLines.length} yttranden i den här delen. Uppgifterna behöver läsas tillsammans med de fullständiga transkriberade svaren.`;
  const review = uncertain
    ? "Flera uppgifter, särskilt tider och minnesbilder, angavs som ungefärliga eller osäkra. De bör kontrolleras mot möjliga stöd som mejl, kalender och passerkortsloggar."
    : "Sammanfattningen återger Person A:s uppgifter. Kontrollera dem mot den fullständiga transkriberingen och eventuella stödhandlingar.";
  return `PERSON A:S UPPGIFTER\n${details}\n\nFÖRHÖRSLEDARENS FÖLJDFRÅGOR\n${questions} frågor berörde ${topics.join(", ").toLowerCase()}. Sammanfattningen bygger på ${personLines.length} transkriberade svar i den här delen.\n\nATT KONTROLLERA\n${review}`;
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
  if (state.transcriptionEnabled) advanceTyping();
  else pauseTyping();
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
