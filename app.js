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

// Keep each status panel movable within its parent, while preserving their left-to-right order.
const recordingStatuses = $("recordingStatuses");
const statusPositionStorageKey = "finsam-status-card-positions-v1";
const statusCards = Array.from(recordingStatuses.querySelectorAll("[data-status-card]"));
const audioStatusCard = $("audioStatusCard");
const transcriptionStatusCard = $("transcriptionStatusCard");
const statusGap = 12;
const statusHeadingHeight = 36;
let statusPositions = null;
let activeStatusDrag = null;

function statusCardSize(card) {
  const rect = card.getBoundingClientRect();
  return { width: rect.width, height: rect.height };
}
function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
function defaultStatusPositions() {
  const width = recordingStatuses.clientWidth;
  const height = recordingStatuses.clientHeight;
  const audio = statusCardSize(audioStatusCard);
  const transcription = statusCardSize(transcriptionStatusCard);
  const gap = Math.min(statusGap, Math.max(0, width - audio.width - transcription.width));
  const pairWidth = audio.width + gap + transcription.width;
  const left = Math.max(0, (width - pairWidth) / 2);
  const maxTop = Math.max(0, height - Math.max(audio.height, transcription.height));
  const top = clamp(Math.max(statusHeadingHeight, maxTop / 2), Math.min(statusHeadingHeight, maxTop), maxTop);
  return {
    audioStatusCard: { x: left, y: top },
    transcriptionStatusCard: { x: left + audio.width + gap, y: top }
  };
}
function constrainStatusPositions(next, movingId = null) {
  const width = recordingStatuses.clientWidth;
  const height = recordingStatuses.clientHeight;
  const audioSize = statusCardSize(audioStatusCard);
  const transcriptionSize = statusCardSize(transcriptionStatusCard);
  const gap = Math.min(statusGap, Math.max(0, width - audioSize.width - transcriptionSize.width));
  const maxAudioX = Math.max(0, width - audioSize.width);
  const maxTranscriptionX = Math.max(0, width - transcriptionSize.width);
  const maxAudioY = Math.max(0, height - audioSize.height);
  const maxTranscriptionY = Math.max(0, height - transcriptionSize.height);
  const minAudioY = Math.min(statusHeadingHeight, maxAudioY);
  const minTranscriptionY = Math.min(statusHeadingHeight, maxTranscriptionY);
  const positions = {
    audioStatusCard: {
      x: clamp(Number(next.audioStatusCard.x) || 0, 0, maxAudioX),
      y: clamp(Number(next.audioStatusCard.y) || minAudioY, minAudioY, maxAudioY)
    },
    transcriptionStatusCard: {
      x: clamp(Number(next.transcriptionStatusCard.x) || 0, 0, maxTranscriptionX),
      y: clamp(Number(next.transcriptionStatusCard.y) || minTranscriptionY, minTranscriptionY, maxTranscriptionY)
    }
  };

  // Keep audio to the left, while moving the second card along when needed.
  // This lets either card use the full area instead of locking them together.
  if (movingId === "audioStatusCard") {
    const desiredAudioX = positions.audioStatusCard.x;
    positions.transcriptionStatusCard.x = Math.max(
      positions.transcriptionStatusCard.x,
      desiredAudioX + audioSize.width + gap
    );
    if (positions.transcriptionStatusCard.x > maxTranscriptionX) {
      positions.transcriptionStatusCard.x = maxTranscriptionX;
      positions.audioStatusCard.x = Math.min(
        desiredAudioX,
        maxTranscriptionX - audioSize.width - gap
      );
    }
  } else if (movingId === "transcriptionStatusCard") {
    const desiredTranscriptionX = positions.transcriptionStatusCard.x;
    positions.audioStatusCard.x = Math.min(
      positions.audioStatusCard.x,
      desiredTranscriptionX - audioSize.width - gap
    );
    if (positions.audioStatusCard.x < 0) {
      positions.audioStatusCard.x = 0;
      positions.transcriptionStatusCard.x = Math.max(
        desiredTranscriptionX,
        audioSize.width + gap
      );
    }
  } else if (positions.transcriptionStatusCard.x < positions.audioStatusCard.x + audioSize.width + gap) {
    const pairWidth = audioSize.width + gap + transcriptionSize.width;
    const left = Math.max(0, (width - pairWidth) / 2);
    positions.audioStatusCard.x = left;
    positions.transcriptionStatusCard.x = Math.min(maxTranscriptionX, left + audioSize.width + gap);
  }
  return positions;
}
function renderStatusPositions(next, movingId = null) {
  statusPositions = constrainStatusPositions(next, movingId);
  for (const card of statusCards) {
    const position = statusPositions[card.id];
    card.style.height = "96px";
    card.style.minHeight = "96px";
    card.style.maxHeight = "96px";
    card.style.overflow = "hidden";
    card.style.left = `${position.x}px`;
    card.style.top = `${position.y}px`;
  }
}
function saveStatusPositions() {
  try {
    localStorage.setItem(statusPositionStorageKey, JSON.stringify(statusPositions));
  } catch (_) { /* Storage can be unavailable; positioning still works until reload. */ }
}
function initializeStatusPositions() {
  const defaults = defaultStatusPositions();
  try {
    const saved = JSON.parse(localStorage.getItem(statusPositionStorageKey) || "null");
    if (saved?.audioStatusCard && saved?.transcriptionStatusCard) {
      renderStatusPositions({
        audioStatusCard: { x: saved.audioStatusCard.x, y: defaults.audioStatusCard.y },
        transcriptionStatusCard: { x: saved.transcriptionStatusCard.x, y: defaults.transcriptionStatusCard.y }
      });
      return;
    }
  } catch (_) { /* Use the default positions when saved settings cannot be read. */ }
  renderStatusPositions(defaults);
}
initializeStatusPositions();
for (const card of statusCards) {
  card.addEventListener("pointerdown", event => {
    if (event.button !== undefined && event.button !== 0) return;
    activeStatusDrag = {
      card,
      pointerId: event.pointerId,
      startX: event.clientX,
      origin: { ...statusPositions[card.id] }
    };
    try { card.setPointerCapture(event.pointerId); } catch (_) { /* Window listeners remain as fallback. */ }
    card.classList.add("is-dragging");
    event.preventDefault();
  });
  card.addEventListener("keydown", event => {
    const current = { ...statusPositions[card.id] };
    const step = event.shiftKey ? 64 : 20;
    if (event.key === "ArrowLeft") current.x -= step;
    else if (event.key === "ArrowRight") current.x += step;
    else if (event.key === "Home") current.x = 0;
    else if (event.key === "End") current.x = recordingStatuses.clientWidth - statusCardSize(card).width;
    else return;
    event.preventDefault();
    renderStatusPositions({ ...statusPositions, [card.id]: current }, card.id);
    saveStatusPositions();
  });
}
window.addEventListener("pointermove", event => {
  const drag = activeStatusDrag;
  if (!drag || drag.pointerId !== event.pointerId) return;
  renderStatusPositions({
    ...statusPositions,
    [drag.card.id]: {
      x: drag.origin.x + event.clientX - drag.startX,
      y: drag.origin.y
    }
  }, drag.card.id);
});
function finishStatusDrag(event) {
  if (!activeStatusDrag || (event && activeStatusDrag.pointerId !== event.pointerId)) return;
  activeStatusDrag.card.classList.remove("is-dragging");
  activeStatusDrag = null;
  saveStatusPositions();
}
window.addEventListener("pointerup", finishStatusDrag);
window.addEventListener("pointercancel", finishStatusDrag);
window.addEventListener("resize", () => {
  const centered = defaultStatusPositions();
  renderStatusPositions({
    audioStatusCard: { ...statusPositions.audioStatusCard, y: centered.audioStatusCard.y },
    transcriptionStatusCard: { ...statusPositions.transcriptionStatusCard, y: centered.transcriptionStatusCard.y }
  });
});

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
    handleTranscriptContentGrowth();
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
  handleTranscriptContentGrowth();
  typeTranscriptText(text, line.text, () => {
    state.lines.push(line);
    updateSummaryButton();
  });
}
const transcriptMarkStatus = $("transcriptMarkStatus");
const transcriptMarkButtons = Array.from($("transcriptMarkingToolbar").querySelectorAll("[data-transcript-mark]"));
const transcriptMarkLabels = { cite: "citerad", exclude: "utesluten", other: "annan markering" };

function getTranscriptSelectionRange() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) return null;
  const range = selection.getRangeAt(0);
  const startNode = range.startContainer.nodeType === Node.ELEMENT_NODE ? range.startContainer : range.startContainer.parentElement;
  const endNode = range.endContainer.nodeType === Node.ELEMENT_NODE ? range.endContainer : range.endContainer.parentElement;
  const startLine = startNode?.closest(".transcript-text");
  const endLine = endNode?.closest(".transcript-text");
  if (!startLine || !endLine || !transcriptList.contains(startLine) || !transcriptList.contains(endLine)) return null;
  if (Array.from(transcriptList.querySelectorAll(".transcript-text.is-typing")).some(line => range.intersectsNode(line))) return null;
  return range;
}

function updateTranscriptMarkControls() {
  const canMark = Boolean(getTranscriptSelectionRange());
  transcriptMarkButtons.forEach(button => { button.disabled = !canMark; });
  if (!canMark && !transcriptMarkStatus.dataset.result) {
    transcriptMarkStatus.textContent = "Markera text i transkriberingen för att välja en markering.";
  } else if (canMark) {
    delete transcriptMarkStatus.dataset.result;
    transcriptMarkStatus.textContent = "Välj hur den markerade texten ska märkas.";
  }
}

function applyTranscriptMark(type) {
  const range = getTranscriptSelectionRange();
  if (!range || !range.toString().trim()) {
    transcriptMarkStatus.textContent = "Markera färdigtranskriberad text först.";
    return;
  }
  const textRanges = [];
  for (const line of transcriptList.querySelectorAll(".transcript-text")) {
    const walker = document.createTreeWalker(line, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.textContent) continue;
      const nodeRange = document.createRange();
      nodeRange.selectNodeContents(node);
      const startComparison = range.compareBoundaryPoints(Range.START_TO_START, nodeRange);
      const endComparison = range.compareBoundaryPoints(Range.END_TO_END, nodeRange);
      const startOffset = startComparison <= 0 ? 0 : range.startContainer === node ? range.startOffset : node.length;
      const endOffset = endComparison >= 0 ? node.length : range.endContainer === node ? range.endOffset : 0;
      if (startOffset < endOffset) textRanges.push({ node, startOffset, endOffset });
    }
  }
  if (!textRanges.length) return;
  for (const part of textRanges.reverse()) {
    const partRange = document.createRange();
    partRange.setStart(part.node, part.startOffset);
    partRange.setEnd(part.node, part.endOffset);
    const mark = document.createElement("mark");
    mark.className = `transcript-mark transcript-mark-${type}`;
    mark.dataset.markType = type;
    mark.title = `Texten är markerad som ${transcriptMarkLabels[type]}.`;
    mark.appendChild(partRange.extractContents());
    partRange.insertNode(mark);
  }
  window.getSelection()?.removeAllRanges();
  transcriptMarkStatus.dataset.result = "true";
  transcriptMarkStatus.textContent = `Markerade texten som ${transcriptMarkLabels[type]}.`;
  updateTranscriptMarkControls();
  transcriptMarkStatus.dataset.result = "true";
}

document.addEventListener("selectionchange", updateTranscriptMarkControls);
$("transcriptMarkingToolbar").addEventListener("pointerdown", event => {
  if (event.target.closest("[data-transcript-mark]")) event.preventDefault();
});
$("transcriptMarkingToolbar").addEventListener("click", event => {
  const button = event.target.closest("[data-transcript-mark]");
  if (button && !button.disabled) applyTranscriptMark(button.dataset.transcriptMark);
});

function updateTimers() {
  const time = clock(state.elapsed);
  $("timer").textContent = time;
  $("phoneTimer").textContent = time;
}
function updateTranscriptionUI() {
  const { recording, transcriptionEnabled } = state;
  $("transcriptPanel").classList.toggle("transcription-on", transcriptionEnabled);
  $("transcriptPanel").classList.toggle("transcription-off", !transcriptionEnabled);
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
  $("phoneRecordCard").classList.toggle("recording", active);
  updateAudioStatus();
  updateTranscriptionUI();
  if (active) {
    if (!state.timerId) state.timerId = setInterval(() => { state.elapsed += 1; updateTimers(); }, 1000);
    if (!state.feedId) state.feedId = setInterval(() => {
      if (!state.recording || state.nextLine >= demoDialogue.length) return;
      if (!state.transcriptionEnabled) { state.nextLine += 1; return; }
      addTranscriptLine(demoDialogue[state.nextLine++]);
    }, 5200);
    if (state.lines.length === 0 && state.nextLine < demoDialogue.length) {
      if (state.transcriptionEnabled) addTranscriptLine(demoDialogue[state.nextLine++]);
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
const demoFollowupQuestions = [
  {
    title: "Styrelsen",
    icon: "♧",
    question: "Du berättar att rutinen för kvittohantering ändrades. Vem föreslog eller beslutade om den ändringen?",
    source: "Påhittat bolagsregister · styrelsesammansättning",
    visualTitle: "Nordhamn Ekonomi AB · styrelseöversikt",
    visual: `<svg viewBox="0 0 300 136" role="img" aria-label="Fiktivt organisationsschema med en ordförande och två ledamöter"><path d="M150 45v18M75 63h150M75 63v12M150 63v12M225 63v12" fill="none" stroke="#9db1c7" stroke-width="2"/><rect x="91" y="8" width="118" height="38" rx="9" fill="#003366"/><text x="150" y="24" text-anchor="middle" fill="#ffcc00" font-size="9" font-weight="700">ORDFÖRANDE</text><text x="150" y="37" text-anchor="middle" fill="#fff" font-size="11">M. Lind</text><rect x="18" y="76" width="114" height="48" rx="9" fill="#f3f6fa" stroke="#cbd7e4"/><text x="75" y="94" text-anchor="middle" fill="#536b84" font-size="9" font-weight="700">LEDAMOT</text><text x="75" y="111" text-anchor="middle" fill="#173b63" font-size="11">S. Berg</text><rect x="168" y="76" width="114" height="48" rx="9" fill="#fff8dc" stroke="#ead37f"/><text x="225" y="94" text-anchor="middle" fill="#826300" font-size="9" font-weight="700">LEDAMOT</text><text x="225" y="111" text-anchor="middle" fill="#173b63" font-size="11">J. Hall</text></svg>`
  },
  {
    title: "Nyckelåtkomst",
    icon: "⌑",
    question: "Du nämner att flera i gruppen hade nyckel. Vilka personer kunde öppna arkivskåpet under den aktuella helgen?",
    source: "Påhittat behörighetssystem · nyckelregister",
    visualTitle: "Arkivskåp · fiktiv åtkomstöversikt",
    visual: `<svg viewBox="0 0 300 136" role="img" aria-label="Fiktiv åtkomstöversikt för tre personer och ett arkivskåp"><path d="M80 36h42M178 36h42M150 56v34M92 105h116" fill="none" stroke="#9db1c7" stroke-width="2"/><rect x="8" y="15" width="92" height="42" rx="9" fill="#f3f6fa" stroke="#cbd7e4"/><text x="54" y="32" text-anchor="middle" fill="#536b84" font-size="9" font-weight="700">PERSON A</text><text x="54" y="47" text-anchor="middle" fill="#173b63" font-size="10">Nyckel</text><rect x="108" y="15" width="84" height="42" rx="9" fill="#fff8dc" stroke="#ead37f"/><text x="150" y="32" text-anchor="middle" fill="#826300" font-size="9" font-weight="700">KOLLEGA B</text><text x="150" y="47" text-anchor="middle" fill="#173b63" font-size="10">Nyckel</text><rect x="200" y="15" width="92" height="42" rx="9" fill="#f3f6fa" stroke="#cbd7e4"/><text x="246" y="32" text-anchor="middle" fill="#536b84" font-size="9" font-weight="700">ADMIN C</text><text x="246" y="47" text-anchor="middle" fill="#173b63" font-size="10">Huvudnyckel</text><rect x="91" y="87" width="118" height="40" rx="9" fill="#003366"/><text x="150" y="112" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">ARKIVSKÅP</text></svg>`
  },
  {
    title: "Tidslinjen",
    icon: "◷",
    question: "Du uppskattar att samtalet kom runt halv tio. Finns det något som kan hjälpa dig att ringa in tidpunkten mer exakt?",
    source: "Påhittad kalender och e-post · händelsetider",
    visualTitle: "Exempel på tidslinje · måndag",
    visual: `<svg viewBox="0 0 300 136" role="img" aria-label="Fiktiv tidslinje med ankomst klockan 07.50, telefonsamtal 09.24 och e-post 10.02"><path d="M26 78h248" fill="none" stroke="#a8bbce" stroke-width="4" stroke-linecap="round"/><circle cx="48" cy="78" r="9" fill="#003366"/><circle cx="150" cy="78" r="9" fill="#ffcc00" stroke="#003366" stroke-width="2"/><circle cx="251" cy="78" r="9" fill="#003366"/><text x="48" y="45" text-anchor="middle" fill="#173b63" font-size="12" font-weight="700">07:50</text><text x="150" y="45" text-anchor="middle" fill="#173b63" font-size="12" font-weight="700">09:24</text><text x="251" y="45" text-anchor="middle" fill="#173b63" font-size="12" font-weight="700">10:02</text><text x="48" y="108" text-anchor="middle" fill="#536b84" font-size="9">Ankomst</text><text x="150" y="108" text-anchor="middle" fill="#536b84" font-size="9">Samtal</text><text x="251" y="108" text-anchor="middle" fill="#536b84" font-size="9">E-post</text></svg>`
  }
];
const followupToggle = $("followupToggle");
const followupQuestionList = $("followupQuestionList");
function updateFollowupVisibility() {
  followupQuestionList.hidden = !followupToggle.checked;
}
followupToggle.addEventListener("change", updateFollowupVisibility);

let openFollowupQuestion = null;
let activeFollowupDrag = null;

function renderFollowupQuestions(summaryNumber) {
  if (openFollowupQuestion) closeFollowupCard(false);
  const panel = $("followupSuggestions");
  const showQuestions = $("followupToggle")?.checked ?? true;
  panel.innerHTML = `<div class="followup-heading"><b>FÖRHÖRSANALYS</b><label class="followup-toggle" for="followupToggle"><span>Visa följdfrågor</span><input id="followupToggle" type="checkbox" ${showQuestions ? "checked" : ""} aria-controls="followupQuestionList"><span class="followup-toggle-switch" aria-hidden="true"></span></label></div><div class="followup-list" id="followupQuestionList"></div>`;
  const list = panel.querySelector(".followup-list");
  demoFollowupQuestions.slice(0, 3).forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "followup-card";
    card.dataset.questionId = `followup-${summaryNumber}-${index + 1}`;
    card.innerHTML = `<button class="followup-tile" type="button" aria-expanded="false" aria-label="Visa följdfråga: ${item.title}"><span class="followup-tile-icon" aria-hidden="true">${item.icon}</span><strong>${item.title}</strong></button><section class="followup-expanded" data-question-panel hidden><div class="followup-expanded-head" tabindex="0" aria-label="Dra för att flytta frågepanelen. Använd piltangenterna för att flytta den med tangentbordet."><span>FÖRSLAG ${index + 1} · DEL ${summaryNumber}</span><button type="button" class="followup-close" aria-label="Fäll ihop frågan">×</button></div><div class="followup-source">${item.source}</div><p class="followup-question">${item.question}</p><figure class="followup-visual"><figcaption>${item.visualTitle}<span>EXEMPEL</span></figcaption>${item.visual}</figure><label class="followup-asked"><input type="checkbox"><span>Frågan är ställd</span></label></section>`;
    list.appendChild(card);
  });
  panel.classList.add("is-visible");
  panel.classList.toggle("is-hidden-by-user", !showQuestions);
}

function openFollowupCard(card) {
  if (openFollowupQuestion?.card === card) return;
  if (openFollowupQuestion) closeFollowupCard(false);
  const tile = card.querySelector(".followup-tile");
  const detail = card.querySelector("[data-question-panel]");
  const list = card.closest(".followup-list");
  tile.setAttribute("aria-expanded", "true");
  card.classList.add("is-selected");
  list.classList.add("has-open-followup");
  detail.hidden = false;
  detail.classList.add("is-floating");
  detail.setAttribute("role", "dialog");
  detail.setAttribute("aria-label", `Följdfråga: ${tile.innerText.trim()}`);
  document.body.appendChild(detail);
  const rect = detail.getBoundingClientRect();
  const left = Math.max(16, window.innerWidth - rect.width - 24);
  const top = Math.max(16, window.innerHeight - rect.height - 24);
  detail.style.left = `${left}px`;
  detail.style.top = `${top}px`;
  detail.style.right = "auto";
  openFollowupQuestion = { card, tile, detail, list };
  detail.querySelector(".followup-expanded-head").focus({ preventScroll: true });
}

function closeFollowupCard(returnFocus = true) {
  if (!openFollowupQuestion) return;
  const { card, tile, detail, list } = openFollowupQuestion;
  detail.hidden = true;
  detail.classList.remove("is-floating");
  detail.removeAttribute("role");
  detail.removeAttribute("aria-label");
  detail.removeAttribute("style");
  card.appendChild(detail);
  card.classList.remove("is-selected");
  tile.setAttribute("aria-expanded", "false");
  list.classList.remove("has-open-followup");
  openFollowupQuestion = null;
  if (returnFocus && tile.isConnected) tile.focus();
}

function clampFollowupPanel() {
  if (!openFollowupQuestion) return;
  const panel = openFollowupQuestion.detail;
  const rect = panel.getBoundingClientRect();
  const left = clamp(rect.left, 8, Math.max(8, window.innerWidth - rect.width - 8));
  const top = clamp(rect.top, 8, Math.max(8, window.innerHeight - rect.height - 8));
  panel.style.left = `${left}px`;
  panel.style.top = `${top}px`;
}

$("followupSuggestions").addEventListener("click", event => {
  const tile = event.target.closest(".followup-tile");
  if (tile) openFollowupCard(tile.closest(".followup-card"));
});

document.addEventListener("click", event => {
  if (event.target.closest(".followup-close")) closeFollowupCard(true);
});

document.addEventListener("change", event => {
  if (event.target.matches(".followup-asked input") && event.target.checked) {
    const questionCard = openFollowupQuestion?.detail.contains(event.target)
      ? openFollowupQuestion.card
      : event.target.closest(".followup-card");
    if (!questionCard) return;
    if (openFollowupQuestion?.card === questionCard) closeFollowupCard(false);
    questionCard.remove();
    const panel = $("followupSuggestions");
    if (!panel.querySelector(".followup-card")) panel.classList.remove("is-visible");
    return;
  }
  if (event.target.id === "followupToggle") {
    const panel = $("followupSuggestions");
    panel.classList.toggle("is-hidden-by-user", !event.target.checked);
    if (!event.target.checked) closeFollowupCard(false);
  }
});

document.addEventListener("pointerdown", event => {
  const handle = event.target.closest(".followup-expanded-head");
  if (!handle || !openFollowupQuestion || !openFollowupQuestion.detail.contains(handle) || event.target.closest(".followup-close")) return;
  if (event.button !== undefined && event.button !== 0) return;
  const rect = openFollowupQuestion.detail.getBoundingClientRect();
  activeFollowupDrag = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, left: rect.left, top: rect.top, handle };
  handle.classList.add("is-dragging");
  event.preventDefault();
});

window.addEventListener("pointermove", event => {
  const drag = activeFollowupDrag;
  if (!drag || drag.pointerId !== event.pointerId || !openFollowupQuestion) return;
  const panel = openFollowupQuestion.detail;
  const rect = panel.getBoundingClientRect();
  panel.style.left = `${clamp(drag.left + event.clientX - drag.x, 8, Math.max(8, window.innerWidth - rect.width - 8))}px`;
  panel.style.top = `${clamp(drag.top + event.clientY - drag.y, 8, Math.max(8, window.innerHeight - rect.height - 8))}px`;
});
function finishFollowupDrag(event) {
  if (!activeFollowupDrag || (event && activeFollowupDrag.pointerId !== event.pointerId)) return;
  activeFollowupDrag.handle.classList.remove("is-dragging");
  activeFollowupDrag = null;
}
window.addEventListener("pointerup", finishFollowupDrag);
window.addEventListener("pointercancel", finishFollowupDrag);
window.addEventListener("resize", clampFollowupPanel);

document.addEventListener("keydown", event => {
  if (!openFollowupQuestion) return;
  if (event.key === "Escape") {
    closeFollowupCard(true);
    return;
  }
  const handle = event.target.closest(".followup-expanded-head");
  if (!handle) return;
  const step = event.shiftKey ? 60 : 20;
  const rect = openFollowupQuestion.detail.getBoundingClientRect();
  let left = rect.left;
  let top = rect.top;
  if (event.key === "ArrowLeft") left -= step;
  else if (event.key === "ArrowRight") left += step;
  else if (event.key === "ArrowUp") top -= step;
  else if (event.key === "ArrowDown") top += step;
  else return;
  event.preventDefault();
  openFollowupQuestion.detail.style.left = `${clamp(left, 8, Math.max(8, window.innerWidth - rect.width - 8))}px`;
  openFollowupQuestion.detail.style.top = `${clamp(top, 8, Math.max(8, window.innerHeight - rect.height - 8))}px`;
});
function createSummary() {
  if (state.lines.length === state.lastSummarized) {
    showToast("Det finns ingen ny transkriberad text att sammanfatta ännu.");
    return;
  }
  const chunk = state.lines.slice(state.lastSummarized);
  state.lastSummarized = state.lines.length;
  state.summaries.push({ title: `Del ${state.summaries.length + 1}`, time: clock(state.elapsed), text: makeSummaryText(chunk) });
  renderSummaries();
  renderFollowupQuestions(state.summaries.length);
  showToast("Delsammanfattning skapad · Förhörsanalys visar upp till 3 följdfrågor.");
}
function renderSummaries() {
  const list = $("summaryList");
  $("summaryCount").textContent = state.summaries.length;
  $("finalCount").textContent = `${state.summaries.length} ${state.summaries.length === 1 ? "del" : "delar"}`;
  $("makeFinal").disabled = state.summaries.length === 0;
  if (state.finalCreated) state.finalDirty = true;
  updateFinishSessionAvailability();
  $("makeFinal").innerHTML = `${state.finalCreated ? "Uppdatera sammanfattning" : "Skapa sammanfattning"} <span>→</span>`;
  $("summaryStaleNote").classList.toggle("hidden", !state.finalDirty);
  if (!state.summaries.length) {
    list.innerHTML = `<div class="empty-summary"><b>Inga delsammanfattningar ännu</b><small>Skapa en när en del av samtalet är klar.</small><button class="button button-small" id="firstSummary">＋ Skapa delsammanfattning</button></div>`;
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
function updateFinishSessionAvailability() {
  const ready = state.finalCreated && !state.finalDirty;
  $("finishSession").disabled = !ready;
}
function createFinal() {
  if (!state.summaries.length) return;
  const text = state.summaries.map((s, i) => `${i + 1}. ${s.text}`).join("\n\n");
  $("finalText").textContent = `ÖVERSIKT\n${state.summaries.length} delsammanfattningar har sammanställts. Innehållet nedan bygger enbart på exempeltext och behöver i en riktig lösning granskas mot transkriberingen.\n\n${text}\n\nATT FÖLJA UPP\nKontrollera tidsangivelser och eventuella oklarheter mot den fullständiga inspelningen.`;
  $("finalResult").classList.remove("hidden");
  state.finalCreated = true;
  state.finalDirty = false;
  updateFinishSessionAvailability();
  $("summaryStaleNote").classList.add("hidden");
  $("makeFinal").innerHTML = "Uppdatera sammanfattning <span>→</span>";
  showToast("Slutsammanfattning skapad från delsammanfattningarna.");
}
function activateSummaryTab(tabId, focus = false) {
  const tabs = [$("partsTab"), $("protocolTab")];
  const panels = [$("partsTabPanel"), $("protocolTabPanel")];
  const index = tabId === "protocolTab" ? 1 : 0;
  tabs.forEach((tab, i) => {
    const selected = i === index;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    panels[i].hidden = !selected;
    panels[i].classList.toggle("active", selected);
  });
  if (focus) tabs[index].focus();
}
$("partsTab").addEventListener("click", () => activateSummaryTab("partsTab"));
$("protocolTab").addEventListener("click", () => activateSummaryTab("protocolTab"));
$("summaryTabs").addEventListener("keydown", event => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const next = event.key === "Home" || event.key === "ArrowLeft" ? "partsTab" : "protocolTab";
  activateSummaryTab(next, true);
});
const panelResizer = $("panelResizer");
const transcriptPanel = document.querySelector(".transcript-panel");
const summaryColumn = document.querySelector(".summary-column");
let panelResizeStart = null;
function setTranscriptPanelWidth(width) {
  const combinedWidth = transcriptPanel.getBoundingClientRect().width + summaryColumn.getBoundingClientRect().width;
  const minTranscript = 380;
  const minSummary = 300;
  const transcriptWidth = Math.max(minTranscript, Math.min(combinedWidth - minSummary, width));
  const summaryWidth = combinedWidth - transcriptWidth;
  $("workGrid").style.setProperty("--transcript-panel-width", `${transcriptWidth}px`);
  $("workGrid").style.setProperty("--summary-panel-width", `${summaryWidth}px`);
  panelResizer.setAttribute("aria-valuemin", String(minTranscript));
  panelResizer.setAttribute("aria-valuemax", String(Math.round(combinedWidth - minSummary)));
  panelResizer.setAttribute("aria-valuenow", String(Math.round(transcriptWidth)));
  panelResizer.setAttribute("aria-valuetext", `Transkribering ${Math.round(transcriptWidth)} pixlar; sammanfattning ${Math.round(summaryWidth)} pixlar`);
}
panelResizer.addEventListener("pointerdown", event => {
  if (window.matchMedia("(max-width: 1350px)").matches) return;
  const transcriptWidth = transcriptPanel.getBoundingClientRect().width;
  const summaryWidth = summaryColumn.getBoundingClientRect().width;
  panelResizeStart = { x: event.clientX, transcriptWidth, combinedWidth: transcriptWidth + summaryWidth };
  panelResizer.setPointerCapture(event.pointerId);
  document.body.classList.add("is-panel-resizing");
  event.preventDefault();
});
panelResizer.addEventListener("pointermove", event => {
  if (!panelResizeStart) return;
  const minimum = 380;
  const maximum = panelResizeStart.combinedWidth - 300;
  const width = Math.max(minimum, Math.min(maximum, panelResizeStart.transcriptWidth + event.clientX - panelResizeStart.x));
  const summaryWidth = panelResizeStart.combinedWidth - width;
  $("workGrid").style.setProperty("--transcript-panel-width", `${width}px`);
  $("workGrid").style.setProperty("--summary-panel-width", `${summaryWidth}px`);
  panelResizer.setAttribute("aria-valuenow", String(Math.round(width)));
  panelResizer.setAttribute("aria-valuemax", String(Math.round(maximum)));
  panelResizer.setAttribute("aria-valuetext", `Transkribering ${Math.round(width)} pixlar; sammanfattning ${Math.round(summaryWidth)} pixlar`);
});
function finishPanelResize() {
  panelResizeStart = null;
  document.body.classList.remove("is-panel-resizing");
}
panelResizer.addEventListener("pointerup", finishPanelResize);
panelResizer.addEventListener("pointercancel", finishPanelResize);
panelResizer.addEventListener("keydown", event => {
  if (!["ArrowLeft", "ArrowRight", "Home"].includes(event.key) || window.matchMedia("(max-width: 1350px)").matches) return;
  event.preventDefault();
  if (event.key === "Home") {
    $("workGrid").style.removeProperty("--transcript-panel-width");
    $("workGrid").style.removeProperty("--summary-panel-width");
    panelResizer.setAttribute("aria-valuenow", "600");
    panelResizer.setAttribute("aria-valuetext", "Standardbredd återställd");
    return;
  }
  const current = transcriptPanel.getBoundingClientRect().width;
  const step = event.shiftKey ? 80 : 24;
  setTranscriptPanelWidth(current + (event.key === "ArrowRight" ? step : -step));
});
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 1350px)").matches) finishPanelResize();
});
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

const finalSummaryModal = $("finalSummaryModal");
const finalSummaryModalContent = $("finalSummaryModalContent");
const finalSummaryModalOpener = $("openFinalSummaryModal");
function syncFinalSummaryModalText() {
  const editor = $("finalResult").querySelector("textarea");
  finalSummaryModalContent.textContent = editor ? editor.value : ($("finalText")?.textContent || "");
}
function closeFinalSummaryModal() {
  if (finalSummaryModal.classList.contains("hidden")) return;
  finalSummaryModal.classList.add("hidden");
  document.body.classList.remove("final-summary-open");
  finalSummaryModalOpener.focus();
}
finalSummaryModalOpener.addEventListener("click", () => {
  syncFinalSummaryModalText();
  finalSummaryModal.classList.remove("hidden");
  document.body.classList.add("final-summary-open");
  $("closeFinalSummaryModal").focus();
});
$("closeFinalSummaryModal").addEventListener("click", closeFinalSummaryModal);
finalSummaryModal.addEventListener("click", event => {
  if (event.target === finalSummaryModal) closeFinalSummaryModal();
});
document.querySelectorAll("[data-final-summary-size]").forEach(button => {
  button.addEventListener("click", () => {
    const size = button.dataset.finalSummarySize;
    finalSummaryModalContent.classList.remove("text-size-small", "text-size-medium", "text-size-large");
    finalSummaryModalContent.classList.add("text-size-" + size);
    document.querySelectorAll("[data-final-summary-size]").forEach(option => {
      option.setAttribute("aria-pressed", String(option === button));
    });
  });
});
$("toggleFinalSummaryContrast").addEventListener("click", event => {
  const button = event.currentTarget;
  const inverted = button.getAttribute("aria-pressed") !== "true";
  button.setAttribute("aria-pressed", String(inverted));
  button.textContent = inverted ? "Återställ färger" : "Invertera färger";
  $("finalSummaryModal").querySelector(".final-summary-modal-card").classList.toggle("is-inverted", inverted);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !finalSummaryModal.classList.contains("hidden")) closeFinalSummaryModal();
});
$("finishSession").addEventListener("click", () => { if (!state.finalCreated || state.finalDirty) return; setRecording(false); showToast("Förhöret avslutades i demot."); });

const speechPhrases = [[4, 13], [17, 27], [32, 43], [48, 56]];
for (let i = 0; i < 120; i++) {
  const bar = document.createElement("i");
  const position = i % 60;
  const speaking = speechPhrases.some(([start, end]) => position >= start && position <= end);
  const variation = Math.min(1, Math.abs(Math.sin(position * 1.71) + Math.sin(position * .47) * .48) / 1.35);
  const level = speaking ? .2 + variation * .8 : .025 + variation * .045;
  bar.style.height = `${Math.round(2 + level * 38)}px`;
  $("phoneWave").appendChild(bar);
}
renderSummaries();
updatePairingUI();
updateAudioStatus();
updateTranscriptionUI();


// Fill the available desktop viewport below the case header and recording status.
(()=>{
  const grid=document.getElementById('workGrid');
  const handset=grid?.querySelector('.mobile-preview-panel');
  if(!grid||!handset)return;
  const media=window.matchMedia('(min-width:1141px)');
  const footer=grid.closest('.desktop-view')?.nextElementSibling;
  const syncPanelHeight=()=>{
    if(!media.matches){grid.style.removeProperty('--workspace-panel-height');handset.style.removeProperty('height');return;}
    const handsetHeight=handset.getBoundingClientRect().height;
    const gridTop=grid.getBoundingClientRect().top+window.scrollY;
    const footerHeight=footer&&getComputedStyle(footer).display!=='none'?footer.getBoundingClientRect().height:0;
    const availableHeight=window.innerHeight-gridTop-footerHeight-30;
    const height=Math.ceil(Math.max(handsetHeight,availableHeight));
    if(height>0){grid.style.setProperty('--workspace-panel-height',height+'px');handset.style.height=height+'px';}
  };
  if('ResizeObserver' in window)new ResizeObserver(syncPanelHeight).observe(handset);
  window.addEventListener('resize',syncPanelHeight,{passive:true});
  media.addEventListener?.('change',syncPanelHeight);
  requestAnimationFrame(syncPanelHeight);
})();


// Preserve the reader's position while new transcript text arrives.
const transcriptFollowState={followingLatest:true,hasUnread:false};
function handleTranscriptContentGrowth(){
  const scroller=$("transcriptScroll");
  const jumpButton=$("transcriptLatestButton");
  if(!scroller||!jumpButton)return;
  if(transcriptFollowState.followingLatest){
    scroller.scrollTop=scroller.scrollHeight;
    transcriptFollowState.hasUnread=false;
    jumpButton.hidden=true;
  }else{
    transcriptFollowState.hasUnread=true;
    jumpButton.hidden=false;
  }
}
(()=>{
  const scroller=$("transcriptScroll");
  const jumpButton=$("transcriptLatestButton");
  if(!scroller||!jumpButton)return;
  scroller.addEventListener("scroll",()=>{
    const distanceToBottom=scroller.scrollHeight-scroller.scrollTop-scroller.clientHeight;
    if(distanceToBottom<=36){
      transcriptFollowState.followingLatest=true;
      transcriptFollowState.hasUnread=false;
      jumpButton.hidden=true;
    }else{
      transcriptFollowState.followingLatest=false;
    }
  },{passive:true});
  jumpButton.addEventListener("click",()=>{
    transcriptFollowState.followingLatest=true;
    scroller.scrollTop=scroller.scrollHeight;
    transcriptFollowState.hasUnread=false;
    jumpButton.hidden=true;
  });
})();
