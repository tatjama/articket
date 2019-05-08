//funkciju poziva dugme Novi formular
//dugme Pokupi se pojavljuje. Prilikom ucitavanja programa dugme Pokupi je aktivno. Kada ga pritisnemo
// pokrecemo funkciju registracija() i sakrivamo dugme Pokupi
function noviFormular() {
    document.getElementById('pokupi').style.display = 'initial';
    obrisi();
}

//validacija
function validMail(a, b) {
    let val = document.getElementById(a).value;
    if (!(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(val)) || (val == '')) {
        document.getElementsByClassName('greska')[b].innerHTML = '*';
    }

}

function valid(a, b) {
    let val = document.getElementById(a).value;
    if ((/[^A-Za-zČčĆćŠšĐđ]+$/.test(val)) || (val == '')) {
        document.getElementsByClassName('greska')[b].innerHTML = '*';
    }
}

function valid1(a, b) {
    let val = document.getElementById(a).value;
    if ((/[\W_]/.test(val)) || (val == '')) {
        document.getElementsByClassName('greska')[b].innerHTML = '*';
    }
}
//brise * kada je onfocus polje u koje treba da unesemo ispravku
function unos(b) {
    document.getElementsByClassName('greska')[b].innerHTML = '';
}



//brisemo upisane vrednosti za logovanje
function obrisi() {
    document.getElementById('cena').value = '';
    document.getElementById('datum').value = '';

}

//funkciju poziva dugme Pokupi          
//funkcija prikuplja podatke iz forme u HTML-u i smesta u objekat sa nazivom noviKorisnik.
//potom ubacuje metodom push objekat noviKorisnik u niz nizKorisnika gde ga pamti
//Istovremeno sakriva dugme Pokupi  da ne bismo mogli greskom da prepisemo jednog korisnika drugim 
// Inicijalizujemo promenljivu nizKorisnika kao niz u koji smestamo dobijene objekte
var nizKorisnika = [];

function logovanje() {
    if (document.getElementById('greska1').innerHTML == '*' ||
        document.getElementById('greska2').innerHTML == '*') {
        alert('Neispravan unos ili prazno polje');
    } else {
        document.getElementById('pokupi').style.display = 'none';

        var proveraKorisnika = {};

        proveraKorisnika.email = document.getElementById('cena').value;
        proveraKorisnika.lozinka = document.getElementById('datum').value;

        //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizKorisnika
        var nizKorisnika = JSON.parse(localStorage.getItem('bazakorisnika')) || [];
        console.log(nizKorisnika);
        let trenutnoUlogovani = { status: 9, email: "gost" };

        for (let i = 0; i < nizKorisnika.length; i++) {

            if (proveraKorisnika.email === nizKorisnika[i].email && proveraKorisnika.lozinka === nizKorisnika[i].lozinka) {
                alert("vas status je " + nizKorisnika[i].status);
                trenutnoUlogovani.status = nizKorisnika[i].status;
                trenutnoUlogovani.email = nizKorisnika[i].email;
                trenutnoUlogovani.ime = nizKorisnika[i].ime;
                trenutnoUlogovani.prezime = nizKorisnika[i].prezime;
            }
        }

        if (trenutnoUlogovani.status == 9) {
            alert("Niste ulogovani. Registrujte se");
            let trenutnoUlogovani = { status: 9, email: "gost" };
            //praznimo localStoridze
            localStorage.removeItem('trenutnoulogovanikorisnik');
            //smesta trenutno ulogovanog korisnika u localStoride
            localStorage.setItem('trenutnoulogovanikorisnik', JSON.stringify(trenutnoUlogovani));

        } else {
            console.log(trenutnoUlogovani);
            //praznimo localStoridze
            localStorage.removeItem('trenutnoulogovanikorisnik');
            //smesta trenutno ulogovanog korisnika u localStoride
            localStorage.setItem('trenutnoulogovanikorisnik', JSON.stringify(trenutnoUlogovani));
        }
        obrisi();
    }

} //kraj funkcije registracija