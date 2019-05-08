/*obrisiLokalStoridz();

function obrisiLokalStoridz() {
    localStorage.clear();
}*/
//funkciju poziva dugme Novi formular
//dugme Pokupi se pojavljuje. Prilikom ucitavanja programa dugme Pokupi je aktivno. Kada ga pritisnemo
// pokrecemo funkciju registracija() i sakrivamo dugme Pokupi
function noviFormular() {
    document.getElementById('pokupi').style.display = 'initial';
    obrisi();
}

//validacija Naziva i autora prilikom unosa. Proverava da li su uneti karakteri samo velika i mala slova srpske latinice
function valid(a, b) {
    let val = document.getElementById(a).value;
    if ((/[^A-Za-zČčĆćŠšĐđ]+$/.test(val)) || (val == '')) {
        document.getElementsByClassName('greska')[b].innerHTML = '*';
    }
}

function validMail(a, b) {
    let val = document.getElementById(a).value;
    if (!(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(val)) || (val == '')) {
        document.getElementsByClassName('greska')[b].innerHTML = '*';
    }

}

//brise * kada je onfocus polje u koje treba da unesemo ispravku
function unos(b) {
    document.getElementsByClassName('greska')[b].innerHTML = '';
}

//brisemo upisane vrednosti za korisnika
function obrisi() {

    document.getElementById('naziv').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('cena').value = '';
    document.getElementById('datum').value = '';
    document.getElementById('kolicina').value = '1';
    // document.getElementById('vrstaDogadjaja').value = '';

}

//funkciju poziva dugme Pokupi          
//funkcija prikuplja podatke iz forme u HTML-u i smesta u objekat sa nazivom noviKorisnik.
//potom ubacuje metodom push objekat noviKorisnik u niz nizKorisnika gde ga pamti
//Istovremeno sakriva dugme Pokupi  da ne bismo mogli greskom da prepisemo jednog korisnika drugim 
// Inicijalizujemo promenljivu nizKorisnika kao niz u koji smestamo dobijene objekte
var nizKorisnika = [];

function registracija() {
    if (document.getElementById('naziv').value == '' || document.getElementById('autor').value == '' ||
        document.getElementById('cena').value == '' ||
        document.getElementById('datum').value == '' ||
        document.getElementsByClassName('greska')[0].innerHTML != '' ||
        document.getElementsByClassName('greska')[1].innerHTML != '' ||
        document.getElementsByClassName('greska')[2].innerHTML != '' ||
        document.getElementsByClassName('greska')[3].innerHTML != '') {
        alert('Neispravan unos ili prazno polje');
    } else {
        document.getElementById('pokupi').style.display = 'none';

        var noviKorisnik = {};

        noviKorisnik.ime = document.getElementById('naziv').value.toUpperCase();
        noviKorisnik.prezime = document.getElementById('autor').value.toUpperCase();
        noviKorisnik.email = document.getElementById('cena').value;
        noviKorisnik.lozinka = document.getElementById('datum').value;
        noviKorisnik.status = document.getElementById('kolicina').value;

        //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizKorisnika
        var nizKorisnika = JSON.parse(localStorage.getItem('bazakorisnika')) || [];
        //ubacuje novi dogadjaj objekat u nizKorisnika
        console.log(nizKorisnika);
        nizKorisnika.push(noviKorisnik);
        //smesta nizKorisnika u localStoride
        localStorage.setItem('bazakorisnika', JSON.stringify(nizKorisnika));

        console.log(nizKorisnika);
        console.log(noviKorisnik);
    }
    obrisi();
} //kraj funkcije registracija