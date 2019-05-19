/*obrisiLokalStoridz();

function obrisiLokalStoridz() {
    localStorage.clear();
}*/
//funkciju poziva dugme Registracija          
//funkcija prikuplja podatke iz forme u HTML-u i smesta u objekat sa nazivom noviKorisnik.
//potom ubacuje metodom push objekat noviKorisnik u niz nizKorisnika gde ga pamti
//Istovremeno sakriva dugme Pokupi  da ne bismo mogli greskom da prepisemo jednog korisnika drugim 
// Inicijalizujemo promenljivu nizKorisnika kao niz u koji smestamo dobijene objekte
var nizKorisnika = [];

function registracija() {
    if (document.getElementById('imeRegistracija').value == '' ||
        document.getElementById('prezimeRegistracija').value == '' ||
        document.getElementById('emailRegistracija').value == '' ||
        document.getElementById('lozinkaRegistracija').value == '' ||
        document.getElementsByClassName('greskaR')[0].innerHTML != '' ||
        document.getElementsByClassName('greskaR')[1].innerHTML != '' ||
        document.getElementsByClassName('greskaR')[2].innerHTML != '' ||
        document.getElementsByClassName('greskaR')[3].innerHTML != '') {
        alert('Neispravan unos ili prazno polje');
    } else {


        var noviKorisnik = {};
        //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizKorisnika
        var nizKorisnika = JSON.parse(localStorage.getItem('bazakorisnika')) || [];
        console.log(nizKorisnika);

        noviKorisnik.ime = document.getElementById('imeRegistracija').value.toUpperCase();
        noviKorisnik.prezime = document.getElementById('prezimeRegistracija').value.toUpperCase();
        noviKorisnik.email = document.getElementById('emailRegistracija').value;
        noviKorisnik.lozinka = document.getElementById('lozinkaRegistracija').value;
        noviKorisnik.status = document.getElementById('kolicinaRegistracija').value;
        nizKorisnika.forEach(element => {
            if (element.email === noviKorisnik.email) {
                alert("Postoji korisnik sa tim e-mailom u bazi");
                document.getElementById('emailRegistracija').value = '';
                noviKorisnik.email = '';

            }

        });
        if (noviKorisnik.email !== '') {
            //ubacuje novi dogadjaj objekat u nizKorisnika        
            nizKorisnika.push(noviKorisnik);
            //smesta nizKorisnika u localStoride
            localStorage.setItem('bazakorisnika', JSON.stringify(nizKorisnika));

            console.log(nizKorisnika);
            console.log(noviKorisnik);
            obrisiR();
            document.getElementById('pokupiRezervacija').style.display = 'none';
        }





    }

} //kraj funkcije registracija