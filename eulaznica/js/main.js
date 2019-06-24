proveraKorisnika();

function proveraKorisnika() {
    //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizKorisnika
    //U ZAVISNOSTI OD STATUSA OTVARAJU SE OPCIJE KORISNIKU
    var trenutnoUlogovani = JSON.parse(localStorage.getItem('trenutnoulogovanikorisnik')) || {};
    console.log(trenutnoUlogovani);

    if (trenutnoUlogovani.status == 0) {
        //document.getElementById('eshop').style.display = "none";
        document.getElementById('eshop2').style.display = "none";
        document.getElementById('unos').style.display = "block";
        document.getElementById('prodaja').style.display = "block";
        document.getElementById('registracija').style.display = "none";
        document.getElementById('signout').style.display = "block";
    } else if (trenutnoUlogovani.status == 1) {
        document.getElementById('unos').style.display = "none";
        document.getElementById('prodaja').style.display = "none";
        document.getElementById('eshop2').style.display = "block";
        document.getElementById('registracija').style.display = "none";
        document.getElementById('signout').style.display = "block";
    } else {
        //document.getElementById('eshop').style.display = "block";
        document.getElementById('registracija').style.display = "block";
        document.getElementById('eshop2').style.display = "none";
        document.getElementById('unos').style.display = "none";
        document.getElementById('prodaja').style.display = "none";
        document.getElementById('signout').style.display = "none";
    }
}