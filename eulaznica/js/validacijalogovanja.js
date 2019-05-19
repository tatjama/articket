 //brisemo upisane vrednosti za logovanje
 function obrisi() {
     document.getElementById('cena').value = '';
     document.getElementById('datum').value = '';

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