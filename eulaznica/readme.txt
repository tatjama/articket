ZAVRŠNI PROJEKAT :"ARTICKET"
Autor: Marković Tatjana
Datum:: 08.05.2019
Program:IT prekvalifikacije Nacionalne službe za zapošljavanje
Grupa: JavaScript I
Profesori: Una i Zoran
Škola: CODE Beograd

UVOD

Projekat "ArTicket" je CRUD aplikacija kojom možemo ubaciti nove podatke  (Create), pokupiti podatke o 
događajima upisanim u bazu (Read), izmeniti podatke (Update) i obrisati (Delete).  
Urađena je u vanila JavaScript-u i namenjena kupovini ulaznica za balete, predstave, opere i koncerte.
Baza je smeštena u localStoridge. Početno punjenje localStoridg-a, namenjeno isključivo testiranju,
vršimo klikom na dugme POČETNO koji se nalazi u Navigacionom baru Home strane.

OPIS

Sajt ima tri nivoa pristupa.
1. Neulogovani korisnik može da pristupi home, galerija, registracija i logovanje stranama
2. Ulogovani korisnik dobija mogućnost da izvrši i kupovinu ulaznica u E-shop-u
3. Administrator može da unese nove događaje i ulaznice za njih kao i da proda ulaznice
Početna strana je index.html sa navigacijom i neulogovanim korisnikom "gost"

FUNKCIONALNOST
    
 1.  LogIn i SignUp strane su POP-Up.
 2.  Validacije formi  su urađene korišćenjem JavaScripta.
 3.  Pri registraciji novog korisnika proveravamo da li su svi podaci u ispravnom formatu i da li 
 u bazi postoji već taj registrovani korisnik( provera e-mail-a). Ukoliko su podaci validni i ne postoji 
 korisnik sa tim e-mail-om , novog korisnika  ubacuje u bazu.
 4. Prilikom logovanja, proveravamo e-mail i password i ukoliko je korisnik upisan u bazu, očitavamo i 
 njegov status tj. da li je upitanju registrovani korisnik ili administrator.
    Registrovani korisnik: e-mail:   mitar@gmail.com 
                           password: mitar 
    Administrator        : e-mail:   tanja120a@gmail.com
                           password: tanja               
 5. Ako smo ulogovani kao registrovani korisnik, otvara nam se mogućnost kupovine u E-shop-u.
 6. E-shop i korpa su urađeni dinamički.
 7. Kao administrator, možemo da pristupimo unosu novih podataka, ispisu, promeni i brisanju postojećih
  podataka. 
 8.  Lager možemo da filtriramo po
    a. vrsti događaja(balet, opera, drama, filharmonija)
    b. sceni na kojoj se događaj odigrava(mala i velika scena)
    c. količine ulaznica veće od neulogovanim
    d. nazivu tj. da naziv sadrzi karatere...
    e. ili po više kriterijuma odjednom
 9.   Rezervaciju upisujemo u korpu, potom možemo opet filtrirati i izabrati još neke proizvode i dodati
  u kurpu. Rezervacija ne može da bude veća od trenutnog lagera - ne dozvoljava da lager ode u minus
 Korpa ima opciju za brisanje proizvoda i izračunava ukupnu vrednost
 Kada se završi kupovina korpa se briše , a kupljeni proizvodi se skidaju sa lagera u LS
 
 TEHNOLOGIJE
 1. HTML-struktura
 2. CSS-izgled
 3. JavaScript-funkcionalnost
 4. jQuery-dinamika, animacija
 5. LocalStoridge- baza
 Sajt je postavljen na Git-Hub, a podaci se čuvaju u LS



