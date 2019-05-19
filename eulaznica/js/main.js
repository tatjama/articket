proveraKorisnika();

function proveraKorisnika() {
    //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizKorisnika
    //U ZAVISNOSTI OD STATUSA OTVARAJU SE OPCIJE KORISNIKU
    var trenutnoUlogovani = JSON.parse(localStorage.getItem('trenutnoulogovanikorisnik')) || {};
    console.log(trenutnoUlogovani);

    if (trenutnoUlogovani.status == 0) {
        document.getElementById('eshop').style.display = "none";
        document.getElementById('registracija').style.display = "none";
    } else if (trenutnoUlogovani.status == 1) {
        document.getElementById('unos').style.display = "none";
        document.getElementById('prodaja').style.display = "none";
    } else {
        document.getElementById('eshop').style.display = "none";
        document.getElementById('unos').style.display = "none";
        document.getElementById('prodaja').style.display = "none";
    }
}