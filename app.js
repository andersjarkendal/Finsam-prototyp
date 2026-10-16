const demoDialogue = [
  { speaker: "Förhörsledare", kind: "speaker", topic: "Roll och ansvar", text: "Förhöret gäller misstanke om bokföringsbrott i bolaget Nordkust Bygg AB. Du är misstänkt i ärendet och har fått information om vad misstanken gäller. Förstår du det?" },
  { speaker: "Misstänkt", kind: "person", topic: "Roll och ansvar", text: "Ja, jag förstår vad ni misstänker.", summary: "Den misstänkte uppger att Ja, jag förstår vad ni misstänker." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Roll och ansvar", text: "Berätta först om din roll i bolaget under räkenskapsåret 2024." },
  { speaker: "Misstänkt", kind: "person", topic: "Roll och ansvar", text: "Jag var verkställande direktör och ägde också en del av bolaget. Jag skötte kundkontakter, offerter och mycket av den dagliga driften. Vi var ett litet företag, så jag hjälpte även till ute på arbetsplatserna ibland.", summary: "Den misstänkte uppger att Jag var verkställande direktör och ägde också en del av bolaget. Jag skötte kundkontakter, offerter och mycket av den dagliga driften. Vi var ett…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Roll och ansvar", text: "Hur många arbetade i bolaget?" },
  { speaker: "Misstänkt", kind: "person", topic: "Roll och ansvar", text: "Vi var fyra heltidsanställda och tog in underentreprenörer när det behövdes. Det varierade lite mellan månaderna.", summary: "Den misstänkte uppger att Vi var fyra heltidsanställda och tog in underentreprenörer när det behövdes. Det varierade lite mellan månaderna." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Roll och ansvar", text: "Vem ansvarade för bokföringen?" },
  { speaker: "Misstänkt", kind: "person", topic: "Roll och ansvar", text: "Vår redovisningskonsult, Karin Holm. Hon hade hjälpt oss i flera år. Jag ansvarade för att skicka in underlag och svara på frågor, men hon skötte själva bokföringen och tog fram rapporter.", summary: "Den misstänkte uppger att Vår redovisningskonsult, Karin Holm. Hon hade hjälpt oss i flera år. Jag ansvarade för att skicka in underlag och svara på frågor, men hon…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Roll och ansvar", text: "Hur brukade du skicka underlagen?" },
  { speaker: "Misstänkt", kind: "person", topic: "Roll och ansvar", text: "Oftast mejlade jag fakturor och kvitton som pdf-filer. Ibland hade jag kvitton på papper som jag lämnade i en pärm på kontoret. Kontoutdragen kunde Karin hämta själv eftersom hon hade tillgång till bankens bokföringsunderlag.", summary: "Den misstänkte uppger att Oftast mejlade jag fakturor och kvitton som pdf-filer. Ibland hade jag kvitton på papper som jag lämnade i en pärm på kontoret. Kontoutdragen kunde…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Bokföringsrutiner", text: "Hur ofta skickade du in material?" },
  { speaker: "Misstänkt", kind: "person", topic: "Bokföringsrutiner", text: "Tanken var en gång i månaden, men det blev inte alltid så. Under intensiva perioder kunde det gå sex eller åtta veckor. Då samlade jag ihop det som fanns och skickade på en gång.", summary: "Den misstänkte uppger att Tanken var en gång i månaden, men det blev inte alltid så. Under intensiva perioder kunde det gå sex eller åtta veckor. Då samlade…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Bokföringsrutiner", text: "Hade ni någon rutin för att kontrollera att allt material verkligen kommit fram?" },
  { speaker: "Misstänkt", kind: "person", topic: "Bokföringsrutiner", text: "Inte någon särskilt tydlig rutin. Jag brukade fråga Karin om hon saknade något när jag skickade materialet. Ibland svarade hon direkt, ibland tog det lite tid.", summary: "Den misstänkte uppger att Inte någon särskilt tydlig rutin. Jag brukade fråga Karin om hon saknade något när jag skickade materialet. Ibland svarade hon direkt, ibland tog det…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Bokföringsrutiner", text: "Vi har gått igenom bolagets bokföring. Flera kundbetalningar saknas där, trots att de syns på bolagets bankkonto. Känner du till det?" },
  { speaker: "Misstänkt", kind: "person", topic: "Bokföringsrutiner", text: "Jag vet att det blev fel med några betalningar. Men jag trodde att Karin skulle fånga upp det när hon stämde av banken.", summary: "Den misstänkte uppger att Jag vet att det blev fel med några betalningar. Men jag trodde att Karin skulle fånga upp det när hon stämde av banken." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Bokföringsrutiner", text: "När upptäckte du att betalningarna inte fanns med i bokföringen?" },
  { speaker: "Misstänkt", kind: "person", topic: "Bokföringsrutiner", text: "Jag såg det nog i samband med att vi skulle ta fram material till bokslutet. Det var flera poster som inte stämde mot fakturorna och rapporterna.", summary: "Den misstänkte uppger att Jag såg det nog i samband med att vi skulle ta fram material till bokslutet. Det var flera poster som inte stämde mot fakturorna…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Bokföringsrutiner", text: "Ungefär när var det?" },
  { speaker: "Misstänkt", kind: "person", topic: "Bokföringsrutiner", text: "I januari eller februari 2025, tror jag. Jag minns att vi pratade om det efter nyår, men jag kan inte säga exakt datum.", summary: "Den misstänkte uppger att I januari eller februari 2025, tror jag. Jag minns att vi pratade om det efter nyår, men jag kan inte säga exakt datum.", uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Saknade betalningar", text: "Vad gjorde du när du upptäckte avvikelserna?" },
  { speaker: "Misstänkt", kind: "person", topic: "Saknade betalningar", text: "Jag ringde Karin och frågade vad som hade hänt. Hon sa att hon saknade några underlag och att vi skulle reda ut det efter årsskiftet. Jag uppfattade det som att det var en försening, inte att bokföringen var helt fel.", summary: "Den misstänkte uppger att Jag ringde Karin och frågade vad som hade hänt. Hon sa att hon saknade några underlag och att vi skulle reda ut det efter…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Saknade betalningar", text: "Minns du vilka underlag hon saknade?" },
  { speaker: "Misstänkt", kind: "person", topic: "Saknade betalningar", text: "Inte alla. Det var åtminstone ett par fakturor från en kund som heter Berglunds Fastighet. De hade betalat sent, och jag tror att jag skickade fakturorna på nytt. Det kan också ha varit någon kreditfaktura som hon inte hade fått.", summary: "Den misstänkte uppger att Inte alla. Det var åtminstone ett par fakturor från en kund som heter Berglunds Fastighet. De hade betalat sent, och jag tror att jag…", uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Saknade betalningar", text: "Vi har inte hittat de fakturorna i bolagets bokföring. Men betalningarna kom in på bolagets konto. Varför skickades inte fakturorna till redovisningskonsulten?" },
  { speaker: "Misstänkt", kind: "person", topic: "Saknade betalningar", text: "Jag kan inte säga säkert. Det kan ha blivit liggande i mejlen. Jag hade mycket att göra och ibland skickade jag underlag i efterhand. Jag kan ha tänkt att jag redan hade skickat dem fast jag inte hade gjort det.", summary: "Den misstänkte uppger att Jag kan inte säga säkert. Det kan ha blivit liggande i mejlen. Jag hade mycket att göra och ibland skickade jag underlag i efterhand.…", uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Saknade betalningar", text: "Hur brukade du hantera en kundfaktura från att den skapades tills betalningen kom in?" },
  { speaker: "Misstänkt", kind: "person", topic: "Saknade betalningar", text: "Jag skapade fakturan i vårt faktureringsprogram och mejlade den till kunden. När pengarna kom in syntes det på bankkontot. Jag brukade markera fakturan som betald i programmet, men jag vet inte om den informationen automatiskt gick över till bokföringen.", summary: "Den misstänkte uppger att Jag skapade fakturan i vårt faktureringsprogram och mejlade den till kunden. När pengarna kom in syntes det på bankkontot. Jag brukade markera fakturan som…", uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Saknade betalningar", text: "Vem hade tillgång till faktureringsprogrammet?" },
  { speaker: "Misstänkt", kind: "person", topic: "Saknade betalningar", text: "Jag hade ett eget konto. En av de anställda kunde också skapa fakturor, men normalt kontrollerade jag dem innan de skickades. Karin hade inte inloggning till programmet, så jag behövde skicka rapporter eller fakturor till henne.", summary: "Den misstänkte uppger att Jag hade ett eget konto. En av de anställda kunde också skapa fakturor, men normalt kontrollerade jag dem innan de skickades. Karin hade inte…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Fakturahantering", text: "Hade du någon gång fått en påminnelse från Karin om att bokföringsmaterial saknades?" },
  { speaker: "Misstänkt", kind: "person", topic: "Fakturahantering", text: "Ja, ibland. Hon kunde skriva att hon saknade kvitton eller fakturor. Jag svarade ofta att jag skulle leta fram dem. Sedan kunde det dröja innan jag skickade dem.", summary: "Den misstänkte uppger att Ja, ibland. Hon kunde skriva att hon saknade kvitton eller fakturor. Jag svarade ofta att jag skulle leta fram dem. Sedan kunde det dröja…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Fakturahantering", text: "Minns du om hon särskilt frågade efter fakturorna från Berglunds Fastighet?" },
  { speaker: "Misstänkt", kind: "person", topic: "Fakturahantering", text: "Jag tror att hon frågade efter någon av dem. Jag kan inte minnas exakt vad jag svarade. Jag kan ha sagt att jag skulle kontrollera det.", summary: "Den misstänkte uppger att Jag tror att hon frågade efter någon av dem. Jag kan inte minnas exakt vad jag svarade. Jag kan ha sagt att jag skulle…", uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Fakturahantering", text: "En av betalningarna från Berglunds Fastighet, på 86 000 kronor, fördes över från bolagets konto till ditt privata konto två dagar efter att den kom in. Vad gällde överföringen?" },
  { speaker: "Misstänkt", kind: "person", topic: "Fakturahantering", text: "Det var en återbetalning till mig. Jag hade lagt ut pengar för material och löner tidigare under året.", summary: "Den misstänkte uppger att Det var en återbetalning till mig. Jag hade lagt ut pengar för material och löner tidigare under året." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Fakturahantering", text: "Vilka utlägg avsåg den återbetalningen?" },
  { speaker: "Misstänkt", kind: "person", topic: "Fakturahantering", text: "Jag minns inte exakt vilka poster som ingick. Det kan ha varit byggmaterial, drivmedel och någon löneutbetalning när bolaget hade det lite tajt med pengar.", summary: "Den misstänkte uppger att Jag minns inte exakt vilka poster som ingick. Det kan ha varit byggmaterial, drivmedel och någon löneutbetalning när bolaget hade det lite tajt med…", uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Fakturahantering", text: "Finns det något underlag som visar vilka utlägg återbetalningen avsåg?" },
  { speaker: "Misstänkt", kind: "person", topic: "Fakturahantering", text: "Jag har några kvitton hemma och det borde finnas mejl om det. Jag skickade nog inte allt till Karin. En del av kvittona kan också ha blivit kvar i bilen eller på kontoret.", summary: "Den misstänkte uppger att Jag har några kvitton hemma och det borde finnas mejl om det. Jag skickade nog inte allt till Karin. En del av kvittona kan…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Överföring till privat konto", text: "Varför var beloppet 86 000 kronor?" },
  { speaker: "Misstänkt", kind: "person", topic: "Överföring till privat konto", text: "Jag tror att det var en ungefärlig summa som jag räknade ihop. Jag hade lagt ut pengar vid flera tillfällen. Jag kan ha använt en anteckning eller en sammanställning, men jag vet inte var den är nu.", summary: "Den misstänkte uppger att Jag tror att det var en ungefärlig summa som jag räknade ihop. Jag hade lagt ut pengar vid flera tillfällen. Jag kan ha använt…", uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Överföring till privat konto", text: "Varför bokfördes överföringen inte som en återbetalning av utlägg?" },
  { speaker: "Misstänkt", kind: "person", topic: "Överföring till privat konto", text: "Det vet jag inte. Jag trodde att det skulle bokföras när Karin fick underlagen. Jag tänkte inte att banköverföringen i sig skulle bli ett problem.", summary: "Den misstänkte uppger att Det vet jag inte. Jag trodde att det skulle bokföras när Karin fick underlagen. Jag tänkte inte att banköverföringen i sig skulle bli ett…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Överföring till privat konto", text: "Hade du pratat med Karin om överföringen innan du gjorde den?" },
  { speaker: "Misstänkt", kind: "person", topic: "Överföring till privat konto", text: "Jag minns inte om jag ringde henne just då. Jag kan ha sagt att bolaget skulle betala tillbaka pengar till mig. Jag har inte något minne av att hon godkände just den summan.", summary: "Den misstänkte uppger att Jag minns inte om jag ringde henne just då. Jag kan ha sagt att bolaget skulle betala tillbaka pengar till mig. Jag har inte…", uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Överföring till privat konto", text: "Fanns det fler överföringar från bolaget till dig som saknar bokföringsunderlag?" },
  { speaker: "Misstänkt", kind: "person", topic: "Överföring till privat konto", text: "Ja, det kan ha varit någon mindre också. Jag minns inte beloppen. Jag tog ibland ut pengar när jag tyckte att bolaget var skyldigt mig för utlägg eller för att jag hade skjutit till pengar tidigare.", summary: "Den misstänkte uppger att Ja, det kan ha varit någon mindre också. Jag minns inte beloppen. Jag tog ibland ut pengar när jag tyckte att bolaget var skyldigt…", uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Överföring till privat konto", text: "Hade du en separat sammanställning över vad bolaget var skyldigt dig?" },
  { speaker: "Misstänkt", kind: "person", topic: "Överföring till privat konto", text: "Inte en komplett sammanställning. Jag hade anteckningar och sparade en del kvitton. Jag borde ha hållit ordning på det bättre.", summary: "Den misstänkte uppger att Inte en komplett sammanställning. Jag hade anteckningar och sparade en del kvitton. Jag borde ha hållit ordning på det bättre." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Utlägg och underlag", text: "Du säger att du trodde att redovisningskonsulten skulle ordna bokföringen. Som vd, hur följde du upp att bolagets räkenskaper blev fullständiga?" },
  { speaker: "Misstänkt", kind: "person", topic: "Utlägg och underlag", text: "Jag tittade på rapporterna ibland, men jag gick inte igenom varje konto. Jag litade på Karin. Jag såg att hon skickade resultatrapporter och balansrapporter, men jag förstod inte alltid alla poster.", summary: "Den misstänkte uppger att Jag tittade på rapporterna ibland, men jag gick inte igenom varje konto. Jag litade på Karin. Jag såg att hon skickade resultatrapporter och balansrapporter,…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Utlägg och underlag", text: "Hade du någon annan som kontrollerade bokföringen?" },
  { speaker: "Misstänkt", kind: "person", topic: "Utlägg och underlag", text: "Nej, inte regelbundet. Vår revisor gick igenom bokslutet, men han var inte inne i den löpande bokföringen varje månad.", summary: "Den misstänkte uppger att Nej, inte regelbundet. Vår revisor gick igenom bokslutet, men han var inte inne i den löpande bokföringen varje månad." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Utlägg och underlag", text: "När blev du medveten om att bokföringen kunde vara ofullständig?" },
  { speaker: "Misstänkt", kind: "person", topic: "Utlägg och underlag", text: "Vid bokslutet, när siffrorna inte gick ihop. Men då trodde jag fortfarande att det handlade om saknade papper som gick att komplettera.", summary: "Den misstänkte uppger att Vid bokslutet, när siffrorna inte gick ihop. Men då trodde jag fortfarande att det handlade om saknade papper som gick att komplettera." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Utlägg och underlag", text: "Gjorde du något för att komplettera bokföringen efter det?" },
  { speaker: "Misstänkt", kind: "person", topic: "Utlägg och underlag", text: "Jag skickade några mejl till Karin, men jag vet inte om allt kom med. Jag letade också efter kvitton. När hon slutade hjälpa oss några månader senare blev det rörigare, och jag vet inte vad som blev färdigbehandlat.", summary: "Den misstänkte uppger att Jag skickade några mejl till Karin, men jag vet inte om allt kom med. Jag letade också efter kvitton. När hon slutade hjälpa oss…", uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Utlägg och underlag", text: "När slutade hon hjälpa bolaget?" },
  { speaker: "Misstänkt", kind: "person", topic: "Utlägg och underlag", text: "Någon gång under våren 2025. Vi var oense om kostnaden och hon hade mycket att göra. Efter det tog en annan konsult över, men det blev ett glapp.", summary: "Den misstänkte uppger att Någon gång under våren 2025. Vi var oense om kostnaden och hon hade mycket att göra. Efter det tog en annan konsult över, men…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Kontroll av bokföringen", text: "Informerade du den nya konsulten om de saknade kundbetalningarna och överföringen till ditt konto?" },
  { speaker: "Misstänkt", kind: "person", topic: "Kontroll av bokföringen", text: "Jag sa att bokföringen behövde gås igenom och att vissa underlag saknades. Jag vet inte om jag nämnde just de här betalningarna. Jag borde ha varit tydligare.", summary: "Den misstänkte uppger att Jag sa att bokföringen behövde gås igenom och att vissa underlag saknades. Jag vet inte om jag nämnde just de här betalningarna. Jag borde…", uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Kontroll av bokföringen", text: "Har du försökt ändra eller ta bort fakturor eller bokföringsmaterial efter att du fick veta att det saknades uppgifter?" },
  { speaker: "Misstänkt", kind: "person", topic: "Kontroll av bokföringen", text: "Nej, inte med avsikt. Jag kan ha rättat något i faktureringsprogrammet, till exempel markerat en betalning eller skickat en faktura på nytt. Men jag har inte försökt radera underlag för att dölja något.", summary: "Den misstänkte uppger att Nej, inte med avsikt. Jag kan ha rättat något i faktureringsprogrammet, till exempel markerat en betalning eller skickat en faktura på nytt. Men jag…", uncertain: true },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Kontroll av bokföringen", text: "Har du kvar mejl, kvitton eller anteckningar som kan visa vad överföringen avsåg?" },
  { speaker: "Misstänkt", kind: "person", topic: "Kontroll av bokföringen", text: "Jag ska kontrollera hemma och i min gamla mejl. Det kan finnas kvitton i en kartong med bolagets papper. Jag kan också se om jag har kvar kontoutdrag från mitt privata konto.", summary: "Den misstänkte uppger att Jag ska kontrollera hemma och i min gamla mejl. Det kan finnas kvitton i en kartong med bolagets papper. Jag kan också se om…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Kontroll av bokföringen", text: "Du får möjlighet att komplettera med sådant material senare. Är det något mer du vill berätta om betalningarna eller bokföringen?" },
  { speaker: "Misstänkt", kind: "person", topic: "Kontroll av bokföringen", text: "Nej. Jag förstår att det ser illa ut att betalningarna saknas och att pengar gick till mitt konto. Men jag har inte medvetet försökt få bolagets ekonomi att se annorlunda ut. Jag trodde att det skulle rättas till när underlagen kom in. Jag borde ha följt upp det bättre.", summary: "Den misstänkte uppger att Nej. Jag förstår att det ser illa ut att betalningarna saknas och att pengar gick till mitt konto. Men jag har inte medvetet försökt…" },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Kontroll av bokföringen", text: "Är det något i det du har berättat som du vill ändra eller förtydliga?" },
  { speaker: "Misstänkt", kind: "person", topic: "Kontroll av bokföringen", text: "Nej, inte just nu. Jag kan behöva kontrollera datumen och beloppen mot mina papper.", summary: "Den misstänkte uppger att Nej, inte just nu. Jag kan behöva kontrollera datumen och beloppen mot mina papper." },
  { speaker: "Förhörsledare", kind: "speaker", topic: "Komplettering av bokföringen", text: "Då avslutar vi förhöret. Du får möjlighet att gå igenom dina uppgifter och påpeka om något blivit fel i anteckningarna." },
  { speaker: "Misstänkt", kind: "person", topic: "Komplettering av bokföringen", text: "Okej.", summary: "Den misstänkte uppger att Okej." }
].map((line, index) => ({ ...line, time: clock(index * 5 + 3) }));

const $ = (id) => document.getElementById(id);
const state = { recording: false, hasStarted: false, audioEnded: false, transcriptionEnabled: true, elapsed: 0, lines: [], summaries: [], timerId: null, feedId: null, typingJob: null, typingQueue: [], typingTimeout: null, nextLine: 0, lastSummarized: 0, finalCreated: false, pairConnected: false };
const transcriptList = $("transcriptList");
const transcriptPlaceholder = $("transcriptPlaceholder");
const toast = $("toast");

// Keep each status panel movable within its parent, while preserving their left-to-right order.
const recordingStatuses = $("recordingStatuses");
const statusPositionStorageKey = "finsam-status-card-positions-v3";
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
  const remoteWidth = $("remoteControlUnit").getBoundingClientRect().width || 340;
  const gap = Math.min(statusGap, Math.max(0, (width - audio.width - transcription.width - remoteWidth) / 2));
  const groupWidth = audio.width + gap + transcription.width + gap + remoteWidth;
  const left = Math.max(0, (width - groupWidth) / 2);
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

// Keep the remote-control unit movable inside its own area, like the status cards.
const remoteControlArea = recordingStatuses;
const remoteControlUnit = $("remoteControlUnit");
const remotePositionStorageKey = "finsam-remote-control-position-v3";
let remotePosition = { x: 0, y: 0 };
let activeRemoteDrag = null;
function remoteControlSize() {
  const rect = remoteControlUnit.getBoundingClientRect();
  return { width: rect.width, height: rect.height };
}
function clampRemotePosition(x) {
  const maxX = Math.max(0, remoteControlArea.clientWidth - remoteControlSize().width);
  return clamp(x, 0, maxX);
}
function renderRemotePosition(x) {
  remotePosition.x = clampRemotePosition(x);
  remoteControlUnit.style.left = `${remotePosition.x}px`;
  remoteControlUnit.style.top = "4px";
  remoteControlUnit.style.transform = "none";
}
function initializeRemotePosition() {
  const maxX = Math.max(0, remoteControlArea.clientWidth - remoteControlSize().width);
  let startX = statusPositions.transcriptionStatusCard.x + statusCardSize(transcriptionStatusCard).width + statusGap;
  try {
    const saved = JSON.parse(localStorage.getItem(remotePositionStorageKey) || "null");
    if (Number.isFinite(saved?.x)) startX = saved.x;
  } catch (_) { /* Use the centered default when storage is unavailable. */ }
  renderRemotePosition(startX);
}
function saveRemotePosition() {
  try { localStorage.setItem(remotePositionStorageKey, JSON.stringify(remotePosition)); }
  catch (_) { /* Positioning still works until reload if storage is unavailable. */ }
}
function resolveSharedPanelPositions(nextStatuses, nextRemoteX, movingId) {
  const bounded = constrainStatusPositions(
    nextStatuses,
    movingId === "audioStatusCard" || movingId === "transcriptionStatusCard" ? movingId : null
  );
  const panels = [
    { id: "audioStatusCard", x: bounded.audioStatusCard.x, width: statusCardSize(audioStatusCard).width },
    { id: "transcriptionStatusCard", x: bounded.transcriptionStatusCard.x, width: statusCardSize(transcriptionStatusCard).width },
    { id: "remoteControlUnit", x: clamp(nextRemoteX, 0, Math.max(0, remoteControlArea.clientWidth - remoteControlSize().width)), width: remoteControlSize().width }
  ];
  panels.sort((left, right) => left.x - right.x || ["audioStatusCard", "transcriptionStatusCard", "remoteControlUnit"].indexOf(left.id) - ["audioStatusCard", "transcriptionStatusCard", "remoteControlUnit"].indexOf(right.id));
  const audioIndex = panels.findIndex(panel => panel.id === "audioStatusCard");
  const transcriptionIndex = panels.findIndex(panel => panel.id === "transcriptionStatusCard");
  if (audioIndex > transcriptionIndex) {
    const [audio] = panels.splice(audioIndex, 1);
    panels.splice(panels.findIndex(panel => panel.id === "transcriptionStatusCard"), 0, audio);
  }

  const areaWidth = remoteControlArea.clientWidth;
  const totalPanelWidth = panels.reduce((sum, panel) => sum + panel.width, 0);
  const gap = Math.min(statusGap, Math.max(0, (areaWidth - totalPanelWidth) / Math.max(1, panels.length - 1)));
  let previousRight = 0;
  panels.forEach((panel, index) => {
    const trailingWidth = panels.slice(index + 1).reduce((sum, trailing) => sum + trailing.width, 0);
    const trailingGaps = (panels.length - index - 1) * gap;
    const minimumX = index === 0 ? 0 : previousRight + gap;
    const maximumX = Math.max(minimumX, areaWidth - panel.width - trailingWidth - trailingGaps);
    panel.x = clamp(panel.x, minimumX, maximumX);
    previousRight = panel.x + panel.width;
  });

  const resolvedStatuses = {
    audioStatusCard: { ...bounded.audioStatusCard },
    transcriptionStatusCard: { ...bounded.transcriptionStatusCard }
  };
  for (const panel of panels) {
    if (panel.id === "audioStatusCard" || panel.id === "transcriptionStatusCard") {
      resolvedStatuses[panel.id].x = panel.x;
    }
  }
  renderStatusPositions(resolvedStatuses);
  renderRemotePosition(panels.find(panel => panel.id === "remoteControlUnit").x);
}
initializeRemotePosition();
resolveSharedPanelPositions(statusPositions, remotePosition.x, null);
remoteControlUnit.addEventListener("pointerdown", event => {
  if (event.button !== undefined && event.button !== 0) return;
  if (event.target.closest("button")) return;
  activeRemoteDrag = { pointerId: event.pointerId, startX: event.clientX, originX: remotePosition.x };
  try { remoteControlUnit.setPointerCapture(event.pointerId); } catch (_) { /* Window listeners remain as fallback. */ }
  remoteControlUnit.classList.add("is-dragging");
  event.preventDefault();
});
remoteControlUnit.addEventListener("keydown", event => {
  if (event.target !== remoteControlUnit) return;
  const step = event.shiftKey ? 64 : 20;
  let nextX;
  if (event.key === "ArrowLeft") nextX = remotePosition.x - step;
  else if (event.key === "ArrowRight") nextX = remotePosition.x + step;
  else if (event.key === "Home") nextX = 0;
  else if (event.key === "End") nextX = remoteControlArea.clientWidth - remoteControlSize().width;
  else return;
  event.preventDefault();
  resolveSharedPanelPositions(statusPositions, nextX, "remoteControlUnit");
  saveStatusPositions();
  saveRemotePosition();
});
window.addEventListener("pointermove", event => {
  const drag = activeRemoteDrag;
  if (!drag || drag.pointerId !== event.pointerId) return;
  resolveSharedPanelPositions(statusPositions, drag.originX + event.clientX - drag.startX, "remoteControlUnit");
});
function finishRemoteDrag(event) {
  if (!activeRemoteDrag || (event && activeRemoteDrag.pointerId !== event.pointerId)) return;
  remoteControlUnit.classList.remove("is-dragging");
  activeRemoteDrag = null;
  saveStatusPositions();
  saveRemotePosition();
}
window.addEventListener("pointerup", finishRemoteDrag);
window.addEventListener("pointercancel", finishRemoteDrag);
window.addEventListener("resize", () => resolveSharedPanelPositions(statusPositions, remotePosition.x, null));

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
    resolveSharedPanelPositions({ ...statusPositions, [card.id]: current }, remotePosition.x, card.id);
    saveStatusPositions();
    saveRemotePosition();
  });
}
window.addEventListener("pointermove", event => {
  const drag = activeStatusDrag;
  if (!drag || drag.pointerId !== event.pointerId) return;
  resolveSharedPanelPositions({
    ...statusPositions,
    [drag.card.id]: {
      x: drag.origin.x + event.clientX - drag.startX,
      y: drag.origin.y
    }
  }, remotePosition.x, drag.card.id);
});
function finishStatusDrag(event) {
  if (!activeStatusDrag || (event && activeStatusDrag.pointerId !== event.pointerId)) return;
  activeStatusDrag.card.classList.remove("is-dragging");
  activeStatusDrag = null;
  saveStatusPositions();
  saveRemotePosition();
}
window.addEventListener("pointerup", finishStatusDrag);
window.addEventListener("pointercancel", finishStatusDrag);
window.addEventListener("resize", () => {
  const centered = defaultStatusPositions();
  resolveSharedPanelPositions({
    audioStatusCard: { ...statusPositions.audioStatusCard, y: centered.audioStatusCard.y },
    transcriptionStatusCard: { ...statusPositions.transcriptionStatusCard, y: centered.transcriptionStatusCard.y }
  }, remotePosition.x, null);
  saveStatusPositions();
  saveRemotePosition();
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
  state.typingJob?.element.classList.remove("is-typing");
}
function advanceTyping() {
  if (!state.recording || !state.transcriptionEnabled || state.typingTimeout) return;
  if (!state.typingJob) state.typingJob = state.typingQueue.shift() || null;
  const job = state.typingJob;
  if (!job) return;
  job.element.classList.add("is-typing");
  const typeNext = () => {
    state.typingTimeout = null;
    if (!state.recording || !state.transcriptionEnabled) {
      job.element.classList.remove("is-typing");
      return;
    }
    job.index += 1;
    job.element.textContent = job.text.slice(0, job.index);
    handleTranscriptContentGrowth();
    if (job.index >= job.text.length) {
      job.element.classList.remove("is-typing");
      state.typingJob = null;
      job.onComplete();
      advanceTyping();
      return;
    }
    state.typingTimeout = setTimeout(typeNext, 22);
  };
  typeNext();
}
function typeTranscriptText(element, text, onComplete) {
  state.typingQueue.push({ element, text, index: 0, onComplete });
  advanceTyping();
}
function finishPendingTyping() {
  pauseTyping();
  const pending = [state.typingJob, ...state.typingQueue].filter(Boolean);
  state.typingJob = null;
  state.typingQueue = [];
  for (const job of pending) {
    job.element.textContent = job.text;
    job.element.classList.remove("is-typing");
    job.onComplete();
  }
  handleTranscriptContentGrowth();
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
  const transcriptionStatus = state.audioEnded
    ? "AVSLUTAD"
    : recording
      ? transcriptionEnabled ? "PÅGÅR" : "AV"
      : state.hasStarted
        ? transcriptionEnabled ? "VÄNTAR · LJUD PAUSAT" : "AV"
        : transcriptionEnabled ? "PÅSLAGEN · VÄNTAR PÅ LJUD" : "AV";
  $("transcriptionStatusValue").textContent = transcriptionStatus;
  $("phoneTranscriptionState").textContent = state.audioEnded
    ? "TRANSKRIBERING AVSLUTAD"
    : recording
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
function updateRemoteControls() {
  const connected = state.pairConnected;
  const recordButton = $("remoteRecord");
  recordButton.disabled = !connected || state.audioEnded;
  recordButton.classList.toggle("is-recording", state.recording);
  const actionText = state.audioEnded ? "Ljudinspelning avslutad" : state.recording ? "Pausa ljudinspelning" : state.hasStarted ? "Fortsätt ljudinspelning" : "Starta ljudinspelning";
  $("remoteRecordText").textContent = actionText;
  $("remoteRecordIcon").textContent = state.recording ? "Ⅱ" : "●";
  recordButton.setAttribute("aria-label", actionText);
  $("remoteStop").disabled = !connected || !state.hasStarted || state.audioEnded;
  $("remoteStop").classList.toggle("is-ended", state.audioEnded);
}

function setRecording(active) {
  if (active && state.audioEnded) return;
  state.recording = active;
  if (active) advanceTyping();
  else pauseTyping();
  document.body.classList.toggle("is-recording", active);
  if (active) state.hasStarted = true;
  $("phoneRecord").disabled = state.audioEnded;
  const actionText = state.audioEnded ? "Ljudinspelning avslutad" : active ? "Pausa ljudinspelning" : state.hasStarted ? "Fortsätt ljudinspelning" : "Starta ljudinspelning";
  $("phoneRecordText").textContent = actionText;
  $("phoneRecord").setAttribute("aria-label", actionText);
  $("phoneRecordIcon").textContent = active ? "Ⅱ" : "●";
  $("phoneStop").disabled = !state.hasStarted || state.audioEnded;
  $("phoneStop").classList.toggle("is-ended", state.audioEnded);
  $("phoneRecordState").textContent = state.audioEnded ? "LJUDINSPELNING AVSLUTAD" : active ? "LJUDINSPELNING PÅGÅR" : state.hasStarted ? "LJUD PAUSAT" : "MOBIL REDO ATT SPELA IN LJUD";
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
  updateRemoteControls();
}
function updateAudioStatus() {
  const card = $("audioStatusCard");
  $("audioStatusValue").textContent = state.audioEnded ? "AVSLUTAD" : state.recording ? "INSPELNING PÅGÅR" : state.hasStarted ? "PAUSAD" : "REDO ATT SPELA IN";
  card.classList.toggle("is-active", state.recording);
  card.classList.toggle("is-paused", state.hasStarted && !state.recording && !state.audioEnded);
  updateRemoteControls();
}
function startRecording() {
  if (!state.pairConnected) { showToast("Anslut mobilen genom att skanna QR-koden i datorvyn först."); return; }
  if (state.audioEnded) return;
  setRecording(!state.recording);
}
function stopRecording() {
  if (!state.pairConnected || !state.hasStarted || state.audioEnded) return;
  setRecording(false);
  finishPendingTyping();
  state.audioEnded = true;
  $("phoneRecordState").textContent = "LJUDINSPELNING AVSLUTAD";
  $("phoneRecordText").textContent = "Ljudinspelning avslutad";
  $("phoneRecord").setAttribute("aria-label", "Ljudinspelning avslutad");
  $("phoneRecord").disabled = true;
  $("phoneStop").disabled = true;
  $("phoneStop").classList.add("is-ended");
  updateAudioStatus();
  updateTranscriptionUI();
  updateRemoteControls();
  showToast("Ljudinspelningen har avslutats.");
}
function makeSummaryText(lines) {
  const suspectLines = lines.filter(line => line.kind === "person");
  const topics = [...new Set(lines.map(line => line.topic).filter(Boolean))];
  const questionCount = lines.filter(line => line.kind === "speaker").length;
  if (!suspectLines.length) {
    return `Inga svar från den misstänkte har transkriberats i den här delen ännu. Förhörsledaren har ställt ${questionCount} frågor om ${topics.join(", ").toLowerCase()}.`;
  }

  const points = [...new Set(suspectLines
    .map(line => (line.summary || line.text || "").replace(/^Den misstänkte uppger att\\s*/i, "").trim())
    .filter(text => text && !/^(Ja, jag förstår|Okej\\.)/i.test(text)))];
  const details = points.length
    ? points.map(point => `• ${point}`).join("\\n")
    : `• Den misstänkte har lämnat ${suspectLines.length} svar i den här delen.`;
  const transcriptText = lines.map(line => line.text).join(" ");
  const hasUncertainDetails = suspectLines.some(line => line.uncertain);
  const review = hasUncertainDetails
    ? "Flera uppgifter anges som osäkra eller ungefärliga. Kontrollera dem mot den fullständiga transkriberingen och tillgängliga bokföringsunderlag."
    : "Sammanfattningen återger den misstänktes uppgifter. Kontrollera dem mot den fullständiga transkriberingen och tillgängliga underlag.";
  const transferNote = /86\\s?000/.test(transcriptText)
    ? "\\nSärskilt att följa upp: underlaget för överföringen på 86 000 kronor och vilka utlägg den avsåg."
    : "";

  return `DEN MISSTÄNKTES UPPGIFTER
${details}

FÖRHÖR SOM BEHANDLATS
${questionCount} frågor berörde ${topics.join(", ").toLowerCase()}. Delen bygger på ${suspectLines.length} transkriberade svar.

ATT KONTROLLERA
${review}${transferNote}`;
}
const demoFollowupQuestions = [
  {
    title: "Saknade fakturor",
    icon: "▤",
    question: "Du berättar att fakturor från Berglunds Fastighet saknades i bokföringen. Hur brukade du skicka dem till Karin, och vad kan visa om eller när de skickades?",
    source: "Transkriberingen · fakturor och bokföringsunderlag",
    visualTitle: "Fakturor · från kund till bokföring",
    visual: `<svg viewBox="0 0 300 136" role="img" aria-label="Illustration av flödet från kundfaktura via redovisningskonsult till bokföring"><path d="M92 68h22M184 68h22" stroke="#9db1c7" stroke-width="3" stroke-linecap="round"/><path d="m108 61 8 7-8 7m76-14 8 7-8 7" fill="none" stroke="#9db1c7" stroke-width="3"/><rect x="8" y="30" width="84" height="76" rx="10" fill="#f3f6fa" stroke="#cbd7e4"/><text x="50" y="57" text-anchor="middle" fill="#173b63" font-size="11" font-weight="700">Kundfaktura</text><text x="50" y="77" text-anchor="middle" fill="#536b84" font-size="9">Berglunds</text><text x="50" y="91" text-anchor="middle" fill="#536b84" font-size="9">Fastighet</text><rect x="108" y="30" width="84" height="76" rx="10" fill="#fff8dc" stroke="#ead37f"/><text x="150" y="57" text-anchor="middle" fill="#826300" font-size="10" font-weight="700">Underlag</text><text x="150" y="77" text-anchor="middle" fill="#536b84" font-size="9">skickas till</text><text x="150" y="91" text-anchor="middle" fill="#536b84" font-size="9">Karin</text><rect x="208" y="30" width="84" height="76" rx="10" fill="#f3f6fa" stroke="#cbd7e4"/><text x="250" y="57" text-anchor="middle" fill="#173b63" font-size="10" font-weight="700">Bokföring</text><text x="250" y="77" text-anchor="middle" fill="#536b84" font-size="9">betalning</text><text x="250" y="91" text-anchor="middle" fill="#536b84" font-size="9">stäms av</text></svg>`
  },
  {
    title: "Överföringen",
    icon: "↗",
    question: "Du uppger att överföringen på 86 000 kronor avsåg återbetalning för utlägg. Kan du gå igenom vilka utlägg beloppet bestod av och vilket underlag som styrker varje del?",
    source: "Transkriberingen · kundbetalning och privat överföring",
    visualTitle: "Överföring · uppgifter i förhöret",
    visual: `<svg viewBox="0 0 300 136" role="img" aria-label="Tidsföljd enligt förhöret: kundbetalning kommer in och två dagar senare görs en överföring på 86 000 kronor till ett privat konto"><path d="M46 68h208" stroke="#a8bbce" stroke-width="4" stroke-linecap="round"/><circle cx="54" cy="68" r="10" fill="#003366"/><circle cx="246" cy="68" r="10" fill="#ffcc00" stroke="#003366" stroke-width="2"/><text x="54" y="35" text-anchor="middle" fill="#173b63" font-size="10" font-weight="700">Kundbetalning</text><text x="54" y="104" text-anchor="middle" fill="#536b84" font-size="9">på bolagets konto</text><text x="150" y="58" text-anchor="middle" fill="#536b84" font-size="10" font-weight="700">2 dagar senare</text><text x="246" y="35" text-anchor="middle" fill="#173b63" font-size="10" font-weight="700">86 000 kr</text><text x="246" y="104" text-anchor="middle" fill="#536b84" font-size="9">till privat konto</text></svg>`
  },
  {
    title: "Bokföringsansvar",
    icon: "◷",
    question: "Du uppger att du upptäckte avvikelser vid bokslutet i januari eller februari 2025 och kontaktade Karin. Vad gjorde du sedan för att komplettera bokföringen, och vad informerades den nya konsulten om?",
    source: "Transkriberingen · bokslut och konsultbyte",
    visualTitle: "Uppföljning enligt förhöret",
    visual: `<svg viewBox="0 0 300 136" role="img" aria-label="Ungefärlig tidslinje enligt förhöret: avvikelser upptäcks vid bokslutet i januari eller februari 2025, kontakt med redovisningskonsult och konsultbyte under våren 2025"><path d="M36 72h228" stroke="#a8bbce" stroke-width="4" stroke-linecap="round"/><circle cx="48" cy="72" r="9" fill="#003366"/><circle cx="150" cy="72" r="9" fill="#ffcc00" stroke="#003366" stroke-width="2"/><circle cx="252" cy="72" r="9" fill="#003366"/><text x="48" y="38" text-anchor="middle" fill="#173b63" font-size="10" font-weight="700">Jan/feb 2025</text><text x="150" y="38" text-anchor="middle" fill="#173b63" font-size="10" font-weight="700">Kontakt</text><text x="252" y="38" text-anchor="middle" fill="#173b63" font-size="10" font-weight="700">Våren 2025</text><text x="48" y="103" text-anchor="middle" fill="#536b84" font-size="9">Avvikelser vid</text><text x="48" y="116" text-anchor="middle" fill="#536b84" font-size="9">bokslutet</text><text x="150" y="109" text-anchor="middle" fill="#536b84" font-size="9">Redovisnings-</text><text x="150" y="121" text-anchor="middle" fill="#536b84" font-size="9">konsult</text><text x="252" y="109" text-anchor="middle" fill="#536b84" font-size="9">Ny konsult</text><text x="252" y="121" text-anchor="middle" fill="#536b84" font-size="9">tar över</text></svg>`
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
  if (event.target.id === "analysisPanelToggle") {
    const sessionStripMain = event.target.closest(".session-strip-main");
    sessionStripMain?.classList.toggle("analysis-hidden", !event.target.checked);
    return;
  }
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
  state.summaries.push({ title: `Del ${state.summaries.length + 1}`, time: clock(state.elapsed), text: makeSummaryText(chunk), collapsed: false });
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
  list.innerHTML = state.summaries.map((summary, index) => {
    const collapsed = summary.collapsed === true;
    const hidden = collapsed ? " hidden" : "";
    const expanded = String(!collapsed);
    const toggleLabel = collapsed ? "Visa" : "Fäll ihop";
    return '<article class="summary-card"><div class="summary-card-head"><b>' + summary.title + '</b><div class="summary-card-actions"><span class="summary-card-time">' + summary.time + '</span><button type="button" class="text-button edit-summary" data-index="' + index + '">Redigera</button><button type="button" class="summary-collapse" data-index="' + index + '" aria-expanded="' + expanded + '" aria-controls="summaryText-' + index + '">' + toggleLabel + '</button></div></div><p class="summary-card-text" id="summaryText-' + index + '"' + hidden + '>' + summary.text + '</p></article>';
  }).join("");
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
  list.querySelectorAll(".summary-collapse").forEach(button => button.addEventListener("click", () => {
    const idx = Number(button.dataset.index);
    const summary = state.summaries[idx];
    const card = button.closest(".summary-card");
    summary.collapsed = !summary.collapsed;
    const text = card.querySelector(".summary-card-text");
    if (text) text.hidden = summary.collapsed;
    button.setAttribute("aria-expanded", String(!summary.collapsed));
    button.textContent = summary.collapsed ? "Visa" : "Fäll ihop";
    button.setAttribute("aria-label", (summary.collapsed ? "Visa " : "Fäll ihop ") + summary.title);
  }));
;
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
  updateRemoteControls();
}
function resetSessionForNewHearing() {
  clearInterval(state.timerId); state.timerId = null;
  clearInterval(state.feedId); state.feedId = null;
  clearTimeout(state.typingTimeout); state.typingTimeout = null;
  state.recording = false;
  state.hasStarted = false;
  state.audioEnded = false;
  state.elapsed = 0;
  state.lines = [];
  state.summaries = [];
  state.nextLine = 0;
  state.lastSummarized = 0;
  state.finalCreated = false;
  state.finalDirty = false;
  state.typingJob = null;
  state.typingQueue = [];
  $("transcriptList").replaceChildren();
  $("transcriptPlaceholder").classList.remove("hidden");
  $("finalResult").classList.add("hidden");
  $("summaryStaleNote").classList.add("hidden");
  $("followupSuggestions").querySelector(".followup-list")?.replaceChildren();
  delete $("transcriptMarkStatus").dataset.result;
  $("transcriptMarkStatus").textContent = "Markera text i transkriberingen för att välja en markering.";
  $("finishSession").disabled = true;
  document.body.classList.remove("is-recording");
  renderSummaries();
  activateSummaryTab("partsTab");
  setRecording(false);
  updateTimers();
  updateSummaryButton();
  updateTranscriptMarkControls();
}
function simulatePairing() {
  if (state.audioEnded) resetSessionForNewHearing();
  state.pairConnected = true;
  updatePairingUI();
  closePairing();
  showToast("Demomobilen är ansluten och redo för ett nytt förhör.");
}
$("openPairing").addEventListener("click", openPairing);
$("closePairing").addEventListener("click", closePairing);
$("pairingModal").addEventListener("click", event => { if (event.target === $("pairingModal")) closePairing(); });
$("simulatePair").addEventListener("click", simulatePairing);
$("phoneRecord").addEventListener("click", startRecording);
$("phoneStop").addEventListener("click", stopRecording);
$("remoteRecord").addEventListener("click", startRecording);
$("remoteStop").addEventListener("click", stopRecording);
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
$("finishSession").addEventListener("click", () => {
  if (!state.finalCreated || state.finalDirty) return;
  setRecording(false);
  state.audioEnded = true;
  state.pairConnected = false;
  $("finishSession").disabled = true;
  updateAudioStatus();
  updateTranscriptionUI();
  updatePairingUI();
  showToast("Förhöret avslutades. Anslut mobilen igen för att starta ett nytt.");
});

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


// Collapse the mobile preview so the transcript and summary can use the width.
(()=>{
  const grid=$("workGrid");
  const handset=$("mobilePreviewPanel");
  const collapseButton=$("collapseMobileView");
  const showButton=$("showMobileView");
  if(!grid||!handset||!collapseButton||!showButton)return;
  const setCollapsed=collapsed=>{
    grid.classList.toggle("mobile-preview-collapsed",collapsed);
    handset.hidden=collapsed;
    showButton.hidden=!collapsed;
    collapseButton.setAttribute("aria-expanded",String(!collapsed));
    showButton.setAttribute("aria-expanded",String(!collapsed));
  };
  collapseButton.addEventListener("click",()=>{
    setCollapsed(true);
    showButton.focus();
  });
  showButton.addEventListener("click",()=>{
    setCollapsed(false);
    collapseButton.focus();
  });
})();


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
