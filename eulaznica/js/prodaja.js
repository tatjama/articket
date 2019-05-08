 //otvara prozor za selektovanje filtera i ponistava prethodno zadat filter
 function filter() {
     let sFilter = document.getElementById('selektujFilter');
     sFilter.style.display = 'initial';
     sFilter.value = '';

 }



 //funkcija primenjuje filtere
 /*Filtrira tebele dogadjaja po 4 osnova.
 - 1. Vrsta dogadjaja
  - 2. Mesto dogadjaja(scena)
  - 3. Kolicina veca od nula
  - 4. po nazivu dogadjaja*/
 function filtriraj() {
     //nizDogadjaja izvlacimo iz localS
     let dogadjanja = JSON.parse(localStorage.getItem('bazadogadjaja'));
     let filterVrsta = document.getElementById('filterVrsta').value;
     let filterScena = document.getElementById('filterScena').value;
     let kolicinaKarata = document.getElementById('kolicinaKarata');
     kolicinaKarata = parseInt(kolicinaKarata);
     var karakter = document.getElementById('karakter').value.toUpperCase();

     //Filtriramo po vrsti dogadjaja. Pocetnom nizu menjamo ime u novi niz da bismo rezultat uvek
     // trazili po imenu novog niza, cak i kada ne primenimo filter jer nije pozvan 
     var filterVrstaDogadjaja = dogadjanja;
     if (filterVrsta != '') {
         filterVrstaDogadjaja = dogadjanja.filter(
             function(noviDogadjaj) {
                 if (noviDogadjaj.vrsta == filterVrsta) {
                     return true;
                 } else {
                     return false;
                 }
             });
     }

     //filter za Scenu. Funkcija filter
     var filterVrstaScene = filterVrstaDogadjaja;
     if (filterScena != '') {
         filterVrstaScene = filterVrstaDogadjaja.filter(
             function(noviDogajaj) {
                 if (noviDogajaj.scena == filterScena) {
                     return true;
                 } else {
                     return false;
                 }
             });
     }

     //filter kolicina veca od 0. Proveravamo da li je cekirana opcija kolicina veca od nule
     //iz niza dogadjaja ugradjenom metodom filter uklanjamo dogadjaje sa kolicinom manjom od 0
     var imaKarata = filterVrstaScene;
     if (kolicinaKarata.checked) {
         imaKarata = filterVrstaScene.filter(function(lager) {
             let stanjeLagera = parseInt(lager.kolicina);
             if (stanjeLagera > 0) {
                 return true;
             } else {
                 return false;
             }
         });
     }

     //filter po ukljucenim slovima. U input polje ubacimo proizvoljan broj karaktera
     filterPoImenu = imaKarata;

     if (karakter == '') {} else {
         var filterPoImenu = [];
         for (let i = 0; i < imaKarata.length; i++) {

             var cha = (imaKarata[i].naziv).indexOf(karakter);

             if (cha >= 0) {
                 filterPoImenu.push(imaKarata[i]);
             }
         }
     }

     console.log(filterPoImenu);

     //smesta filtrirani niz u localStoridge
     localStorage.removeItem('filter');
     localStorage.setItem('filter', JSON.stringify(filterPoImenu));

     //pozvamo funkciju za iscrtavanje tabele sa filtriranim dogadjajima
     tabelaFiltriranihDogadjaja(filterPoImenu);

     //Prebrojavanje dogadjaja koji su filtrirani
     if (document.getElementById('prebroj').checked) {
         var nizPrebroj = filterPoImenu.map(
             function(elemenat) {
                 let suma = 1;
                 for (let i = 0; i < filterPoImenu.length; i++) {
                     suma = suma + i;
                     return suma;
                 }
             }
         );

         //ispis broja prebrojanih dogadjaja        
         let tabela = document.getElementById('tabelaFiltriranihDogadjaja1');
         let ispisBrojaDogadjaja = document.createElement('p');
         ispisBrojaDogadjaja.innerHTML = 'Ukupan broj dogadjaja po  filterima je ' + nizPrebroj.length;
         tabela.appendChild(ispisBrojaDogadjaja);
     }

     //Funkcija koja pravi tabelu sa filtriranim dogadjajima
     function tabelaFiltriranihDogadjaja(x) {
         let tabela = document.getElementById('tabelaFiltriranihDogadjaja1');
         tabela.style.display = 'initial';

         x.forEach(
             function(y) {
                 let red = document.createElement('tr');

                 for (i in y) {
                     let celija = document.createElement('td');
                     celija.innerHTML = y[i];
                     red.appendChild(celija);
                 }
                 tabela.appendChild(red);
             });
         return x;
     }
     //kraj funkcije tabela filtriranih dogadjaja    
 }
 //kraj funkcije filtriraj