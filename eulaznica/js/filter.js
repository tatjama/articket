rezervacija();

function rezervacija() {

    //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizFiltriranihDogadjaja
    var nizFiltriranihDogadjaja = JSON.parse(localStorage.getItem('filter')) || [];
    console.log(nizFiltriranihDogadjaja);
    //dodajemo polje za kolicinu rezervacije .
    nizFiltriranihDogadjaja.forEach(dodajPoljeKolicine);

    function dodajPoljeKolicine(el) {
        el.rezervacija = 0;
    }

    //pozivamo funkciju za iscrtavanje tabele sa filtriranim događajima
    tabelaFiltriranihDogadjaja(nizFiltriranihDogadjaja);

    //Prebrojavanje događaja koji su filtrirani

    var nizPrebroj = nizFiltriranihDogadjaja.map(
        function(elemenat) {
            let suma = 1;
            for (let i = 0; i < nizFiltriranihDogadjaja.length; i++) {
                suma = suma + i;
                return suma;
            }
        }
    );

    //ispis broja prebrojanih događaja       
    let tabela = document.getElementById('tabelaFiltriranihDogadjaja');
    let ispisBrojaDogadjaja = document.createElement('p');
    ispisBrojaDogadjaja.innerHTML = 'Ukupan broj događaja po  filterima je ' + nizPrebroj.length;
    let pokupi = document.createElement('div');


    pokupi.addEventListener('click', dodaj);
    pokupi.innerHTML = '<a href="korpa.html">Pokupi</a>'
    tabela.appendChild(ispisBrojaDogadjaja);
    tabela.appendChild(pokupi);

    //fumkcija uzima upisane vrednosti u polje rezervacije i smesta ga u local storidge pod nazivom "korpa".
    // Aktivira se pritiskom dugmeta pokupi

    function dodaj() {
        console.log("Pokupi");
        let nizRezervacija = [];
        for (let j = 0; j < nizPrebroj.length; j++) {
            let novaRezervacija = document.getElementById('rezervacija' + j).innerHTML;
            //let novaRezervacija = parseInt(novaRezervacija);
            //DODALA USLOV DA NE MOZE DA ODE U MINUS
            if (novaRezervacija > 0) {
                //nizFiltriranihDogadjaja[j].kolicina = parseInt(nizFiltriranihDogadjaja[j].kolicina);
                if (novaRezervacija > parseInt(nizFiltriranihDogadjaja[j].kolicina)) {
                    //treba da izbaci gresku za kolicinu 
                    alert(
                        "lager ne moze da ide u minus. Rezervisete vise ulaznica nego sto ima na lageru.Mozete da kupite maksimalno " +
                        nizFiltriranihDogadjaja[j].kolicina + " ulaznica");
                    console.log(nizFiltriranihDogadjaja[j].kolicina);
                    console.log(novaRezervacija);

                    novaRezervacija = 0;

                }

                nizFiltriranihDogadjaja[j].rezervacija = novaRezervacija;
                nizRezervacija.push(nizFiltriranihDogadjaja[j]);
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
    }


    //Funkcija koja pravi tabelu sa filtriranim događajima
    function tabelaFiltriranihDogadjaja(x) {
        let tabela = document.getElementById('tabelaFiltriranihDogadjaja');
        tabela.style.display = 'initial';



        for (y in x) {
            let red = document.createElement('tr');

            for (i in x[y]) {
                let celija = document.createElement('td');
                celija.innerHTML = x[y][i];
                //dodajemo class-u za svaku celiju
                celija.setAttribute('class', i);
                celija.setAttribute('id', i + y);
                //console.log(i + y);
                red.appendChild(celija);
            }

            tabela.appendChild(red);
        }
        console.log(x);
        return x;
    }

    //kraj funkcije tabela filtriranih događaja

    //polja sa klasom rezervacija proglasavamo editabinim
    function editabilan() {
        var z = document.querySelectorAll(".rezervacija");
        var i;
        for (i = 0; i < z.length; i++) {
            z[i].contentEditable = true;
        }
    }
    editabilan();

}