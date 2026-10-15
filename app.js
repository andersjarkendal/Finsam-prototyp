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
  row.cl