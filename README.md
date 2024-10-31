# OldiesButGoldiesLLC

## Hvordan bidra
For oss gamlinger er det alltid greit med litt ekstra datahjelp, så detaljerte instruksjoner følger.

### Oppsett av GIT
1. Last ned og installer GIT fra https://git-scm.com/downloads
2. Åpne git bash
3. skriv: git config --global user.name "Ditt Navn"
4. skriv: git config --global user.email "din.email@eksempel.com" 
5. skriv: git pull https://github.com/sanderby/OldiesButGoldiesLLC
6. *VIKTIG* Alltid lag ny branch før dere endrer noe som helst
7. Ny branch lages med: git checkout -b ny-funksjon
8. Du kan nå begynne å jobbe

### Hvordan gjøre endringer 
Når du har gjort betydelige endringer er det på tide å lage en commit.
Dette sikrer at om du ødelegger noe kan du gå tilbake til en tidligere versjon
1. Sørg for at du er i en ny branch ved å skrive: git branch,
den branchen du er i vil være markert
2. Dersom du er i main må du lage ny branch ved å skrive: 
git checkout -b ny-funksjon 
3. Legg til alle filene du har endre ved å skrive: git add filnavn
4. Når alle endringer er lagt til bruk git commit -m "hva som er endret"
