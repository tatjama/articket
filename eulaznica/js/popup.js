//pop-up prozor logovanje
function prikaziLoginFormu() {
    document.getElementById("pokupi").style.display = "block";
}


function sakrijLoginFormu() {
    document.getElementById("pokupi").style.display = "none";
}
//pop-up prozor registracija
function prikaziRegistracionuFormu() {
    document.getElementById("pokupiRezervacija").style.display = "block";
}

function sakrijRegistracionuFormu() {
    document.getElementById("pokupiRezervacija").style.display = "none";
}
function signOut(){
 trenutnoUlogovani = {
        status: 9,
        email: "gost"
    };
    console.log(trenutnoUlogovani);
    document.getElementById('registracija').style.display = "block";
            document.getElementById('eshop2').style.display = "none";
            document.getElementById('unos').style.display = "none";
            document.getElementById('prodaja').style.display = "none";
            document.getElementById('signout').style.display = "none";
}