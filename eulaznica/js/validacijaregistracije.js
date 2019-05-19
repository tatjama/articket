//validacija 
function validR(a, b) {
    let val = document.getElementById(a).value;
    if ((/[^A-Za-zČčĆćŠšĐđ]+$/.test(val)) || (val == '')) {
        document.getElementsByClassName('greskaR')[b].innerHTML = '*';
    }
}

function validMailR(a, b) {
    let val = document.getElementById(a).value;
    if (!(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(val)) || (val == '')) {
        document.getElementsByClassName('greskaR')[b].innerHTML = '*';
    }

}

function valid1R(a, b) {
    let val = document.getElementById(a).value;
    if ((/[\W_]/.test(val)) || (val == '')) {
        document.getElementsByClassName('greskaR')[b].innerHTML = '*';
    }
}



//brise * kada je onfocus polje u koje treba da unesemo ispravku
function unosR(b) {
    document.getElementsByClassName('greskaR')[b].innerHTML = '';
}

//brisemo upisane vrednosti za korisnika
function obrisiR() {

    document.getElementById('imeRegistracija').value = '';
    document.getElementById('prezimeRegistracija').value = '';
    document.getElementById('emailRegistracija').value = '';
    document.getElementById('lozinkaRegistracija').value = '';
    document.getElementById('kolicinaRegistracija').value = '1';


}