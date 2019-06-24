//funkciju poziva dugme Uloguj         
//funkcija prikuplja podatke iz forme u HTML-u i smesta u objekat sa nazivom noviKorisnik.
//potom ubacuje metodom push objekat noviKorisnik u niz nizKorisnika gde ga pamti
//Istovremeno sakriva dugme Pokupi  da ne bismo mogli greskom da prepisemo jednog korisnika drugim 
// Inicijalizujemo promenljivu nizKorisnika kao niz u koji smestamo dobijene objekte
var nizKorisnika = [];

function logovanje() {
    if (document.getElementById('greska1').innerHTML == '*') {
        alert('E-mail mora biti u formatu nesto@nesto.xyz')
    } else if (document.getElementById('greska2').innerHTML == '*') {
        alert('Lozinka prima samo slova ili brojeve');
    } else {
        document.getElementById('pokupi').style.display = 'none';

        var proveraKorisnika = {};

        proveraKorisnika.email = document.getElementById('cena').value;
        proveraKorisnika.lozinka = document.getElementById('datum').value;

        //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizKorisnika
        var nizKorisnika = JSON.parse(localStorage.getItem('bazakorisnika')) || [];
        console.log(nizKorisnika);
        let trenutnoUlogovani = {
            status: 9,
            email: "gost"
        };

        for (let i = 0; i < nizKorisnika.length; i++) {

            if (proveraKorisnika.email === nizKorisnika[i].email && proveraKorisnika.lozinka === nizKorisnika[i].lozinka) {
                if(nizKorisnika[i].status == 1){
                    alert("Dobro došli "+nizKorisnika[i].ime + " "+nizKorisnika[i].prezime + " ! Vaš status je registrovani korisnik.")
                }else{

                
                alert(("Dobro došli "+nizKorisnika[i].ime + " "+nizKorisnika[i].prezime + " ! Vaš status je administratorski."));
                }
                trenutnoUlogovani.status = nizKorisnika[i].status;
                trenutnoUlogovani.email = nizKorisnika[i].email;
                trenutnoUlogovani.ime = nizKorisnika[i].ime;
                trenutnoUlogovani.prezime = nizKorisnika[i].prezime;
            }
        }

        if (trenutnoUlogovani.status == 9) {
            alert("Niste ulogovani. Registrujte se");
            let trenutnoUlogovani = {
                status: 9,
                email: "gost"
            };
            //praznimo localStoridze
            localStorage.removeItem('trenutnoulogovanikorisnik');
            //smesta trenutno ulogovanog korisnika u localStoride
            localStorage.setItem('trenutnoulogovanikorisnik', JSON.stringify(trenutnoUlogovani));
            console.log(trenutnoUlogovani);
            //document.getElementById('eshop').style.display = "block";
            document.getElementById('registracija').style.display = "block";
            document.getElementById('eshop2').style.display = "none";
            document.getElementById('unos').style.display = "none";
            document.getElementById('prodaja').style.display = "none";
            document.getElementById('signout').style.display = "none";

        } else {
            console.log(trenutnoUlogovani);
            //praznimo localStoridze
            localStorage.removeItem('trenutnoulogovanikorisnik');
            //smesta trenutno ulogovanog korisnika u localStoride
            localStorage.setItem('trenutnoulogovanikorisnik', JSON.stringify(trenutnoUlogovani));
            if (trenutnoUlogovani.status == 1) {
                document.getElementById('unos').style.display = "none";
                document.getElementById('prodaja').style.display = "none";
                document.getElementById('eshop2').style.display = "block";
                document.getElementById('registracija').style.display = "none";
                document.getElementById('signout').style.display = "block";
            } else {
               // document.getElementById('eshop').style.display = "none";
                document.getElementById('eshop2').style.display = "none";
                document.getElementById('unos').style.display = "block";
                document.getElementById('prodaja').style.display = "block";
                document.getElementById('registracija').style.display = "none";
                document.getElementById('signout').style.display ="block";
            }

        }
        obrisi();
    }

} //kraj funkcije logovanje