ZAVRŠNI PROJEKAT :"E-ULAZNICA"
Autor: Marković Tatjana
Datum:: 08.05.2019
Program:IT prekvalifikacije Nacionalne službe za zapošljavanje
Grupa: JavaScript I
Profesori: Una i Zoran
Škola: CODE Beograd

OPIS
Projekat "E-ulaznica" je sajt za kupovinu ulaznica za balete, predstave, opere i koncerte.
Sajt ima tri nivoa pristupa.
1. Neulogovani korisnik može da pristupi home, galerija, registracija i logovanje stranama
2. Ulogovani korisnik dobija mogućnost da izvrši i kupovinu ulaznica
3. Administrator može da unese nove događaje i ulaznice za njih kao i da proda ulaznice
Početna strana je index.html sa navigacijom i neulogovanim korisnikom "gost"

FUNKCIONALNOST
    Urađene su validacije formi preko JavaScripta
    1. Ime i prezime samo slova
    2. E-mail u formatu nesto@nesto.ext
    3. Cene samo brojevi od 100 do 10000
    4. itd

 Količina ulaznica pri unosu je random
 Podaci su smešteni na LocalStoridge-u .Početno punjenje LS se nalazi na home strani- dugme "početno"
 Lager možemo da filtriramo po
 1. vrsti događaja(balet, opera, drama, filharmonija)
 2. sceni na kojoj se događaj odigrava(mala i velika scena)
 3. količine ulaznica veće od neulogovanim
 4. nazivu tj. da naziv sadrzi karatere...
 Rezervaciju upisujemo u korpu, potom možemo opet filtrirati i izabrati još neke proizvode i dodati u kurpu.
 Rezervacija ne može da bude veća od trenutnog lagera - ne dozvoljava da lager ode u minus
 Korpa ima opciju za brisanje proizvoda i izračunava ukupnu vrednost
 Kada se završi kupovina korpa se briše , a kupljeni proizvodi se skidaju sa lagera u LS
 
 TEHNOLOGIJE
 1. HTML-struktura
 2. CSS-izgled
 3. JavaScript-funkcionalnost
 4. jQuery-dinamika, animacija
 5. LocalStoridge- baza
 Sajt je postavljen na Git-Hub, a podaci se čuvaju u LS



