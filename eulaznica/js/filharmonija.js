upisiBalet();

function upisiBalet() {
    //nizDogadjaja izvlacimo iz localS
    let dogadjanja = JSON.parse(localStorage.getItem('bazadogadjaja'));

    //Filtriramo po vrsti dogadjaja -fulharmonija  
    var filterBalet = dogadjanja;

    filterBalet = dogadjanja.filter(
        function(noviDogadjaj) {
            if (noviDogadjaj.vrsta == "Filharmonija") {
                return true;
            } else {
                return false;
            }
        });


    console.log(filterBalet);

    for (let i = 0; i < filterBalet.length; i++) {
        document.getElementById('baletRezervacijaNaziv' + i).innerHTML = filterBalet[i].naziv;
        document.getElementById('baletRezervacijaCena' + i).innerHTML = filterBalet[i].cena;
    }

}


let dugme = document.getElementById('dugme');
dugme.addEventListener('click', rezervisiNovuKolicinu);

function rezervisiNovuKolicinu() {


    //nizDogadjaja izvlacimo iz localS
    let dogadjanja = JSON.parse(localStorage.getItem('bazadogadjaja'));

    //Filtriramo po vrsti dogadjaja -filharmonija
    var filterBalet = dogadjanja;

    filterBalet = dogadjanja.filter(
        function(noviDogadjaj) {
            if (noviDogadjaj.vrsta == "Filharmonija") {
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