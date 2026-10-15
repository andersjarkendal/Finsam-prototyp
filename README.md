# FINSAM – klickbar prototyp

Responsiv gränssnittsprototyp för förhörsflöde med mobilinspelare, transkribering och sammanfattningar. Byggd med HTML, CSS och JavaScript; inga paket eller byggsteg behövs.

> Detta är endast en demo. Ljud spelas inte in eller sparas, parkopplingen är simulerad och transkribering och sammanfattningar består av exempeldata. Använd inga riktiga personuppgifter eller ärendeuppgifter.

## Kör lokalt

Öppna `index.html` i en modern webbläsare, eller starta en lokal webbserver i projektmappen:

```bash
python3 -m http.server 8000
```

Öppna sedan <http://localhost:8000>.

## Prova prototypen

Välj **Anslut mobil** och **Simulera parkoppling**. Starta, pausa och återuppta sedan ljudinspelningen i mobilpanelen. Transkribering kan stängas av separat. Skapa delsammanfattningar och därefter en slutsammanfattning.

## Publicering

Aktivera GitHub Pages under **Settings → Pages**. Välj **Deploy from a branch**, grenen `main` och mappen `/(root)`. När du sparar får du en publik länk. Senare pushar till `main` publiceras automatiskt.
