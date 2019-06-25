upisiBalet("Balet");

function upisiBalet(x) {
    //nizDogadjaja izvlacimo iz localS
    let dogadjanja = JSON.parse(localStorage.getItem('bazadogadjaja'));

    //Filtriramo po vrsti dogadjaja -balet  
    var filterBalet = dogadjanja;

    filterBalet = dogadjanja.filter(
        function(noviDogadjaj) {
            if (noviDogadjaj.vrsta == x) {
                return true;
            } else {
                return false;
            }
        });


    console.log(filterBalet);

    for (let i = 0; i < filterBalet.length; i++) {
        //refaktorizacija
        let korpa = document.getElementById('korpa');
        var omotacSlike = document.createElement('div');
        
        //omotacSlike.setAttribute("class","item");
        omotacSlike.innerHTML = '<img id="balet"' + (i + 1) + ' class="linkovi" alt="balet"' + (i + 1) + ' src="../slikezavrsni/balerina' + (i + 1) + '.jpg"><br><span>' + filterBalet[i].naziv + '</span> <br> Cena: <span>' + filterBalet[i].cena + '</span>   <br>Količina <input type="number" min="0" max="20" placeholder="0" id="rezervacija' + i + '"><br>';
        
        korpa.appendChild(omotacSlike);


    }
   /* var dugmici = document.createElement('span');
        dugmici.innerHTML = ' <button type="button" class="dugme" id="dugme"><a href="korpakorisnik.html" > Kupi</a></button><br><button type="button" class="dugme" id="dugme1"><a href="korpakorisnik.html"> Korpa</a></button><br><button type="button" class="dugme" id="dugme2"><a href="prodavnica.html">E-shop</a> </button>'
        omotacSlike.appendChild(dugmici);*/

}


let dugme = document.getElementById('dugme');
dugme.addEventListener('click', rezervisiNovuKolicinu);

function rezervisiNovuKolicinu() {


    //nizDogadjaja izvlacimo iz localS
    let dogadjanja = JSON.parse(localStorage.getItem('bazadogadjaja'));

    //Filtriramo po vrsti dogadjaja -balet  
    var filterBalet = dogadjanja;

    filterBalet = dogadjanja.filter(
        function(noviDogadjaj) {
            if (noviDogadjaj.vrsta == "Balet") {
                return true;
            } else {
                return false;
            }
        });


    console.log(filterBalet);

    let nizRezervacija = [];
    for (let j = 0; j < filterBalet.length; j++) {
        let novaRezervacija = document.getElementById('rezervacija' + j).value;

        //DODALA USLOV DA NE MOZE DA ODE U MINUS
        if (novaRezervacija > 0) {
            //nizFiltriranihDogadjaja[j].kolicina = parseInt(nizFiltriranihDogadjaja[j].kolicina);
            if (novaRezervacija > parseInt(filterBalet[j].kolicina)) {
                //treba da izbaci gresku za kolicinu 
                alert(
                    "lager ne moze da ide u minus. Rezervisete vise ulaznica nego sto ima na lageru.Mozete da kupite maksimalno " +
                    filterBalet[j].kolicina + " ulaznica");
                console.log(filterBalet[j].kolicina);
                console.log(novaRezervacija);

                novaRezervacija = 0;

            }

            filterBalet[j].rezervacija = novaRezervacija;
            nizRezervacija.push(filterBalet[j]);

        }

    }
    console.log(nizRezervacija);

    //vadi niz iz local S 'korpa' i parsira u JavaScript, smesta u promenljivu korpaIzStoridza
    var korpaIzStoridza = JSON.parse(localStorage.getItem('korpa')) || [];
    //merdzujemo niz korpaIzStoridza i nizRezervacija i smestamo u niz novaKorpa
    var novaKorpa = korpaIzStoridza.concat(nizRezervacija);
    console.log(novaKorpa);
    //smesta niz novaKorpa u localStoride
    localStorage.setItem('korpa', JSON.stringify(novaKorpa));
    nizRezervacija = [];
    for (let j = 0; j < filterBalet.length; j++) {
        document.getElementById('rezervacija' + j).value = 0;
    }

}
//kraj funkcije filtriraj