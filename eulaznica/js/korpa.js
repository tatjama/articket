prikaziKorpu();

function prikaziKorpu() {

    //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu korpa
    var korpa = JSON.parse(localStorage.getItem('korpa')) || [];
    console.log(korpa);
    // suma();

    //dodajemo polje za kolicinu rezervacije .
    korpa.forEach(dodajPoljeZaBrisanje);

    //pozivamo funkciju za iscrtavanje tabele sa rezervisanim događajima
    tabelaRezervisanihDogadjaja(korpa);

    //dodavanje dugmeta kupi      
    let tabela = document.getElementById('tabelaRezervisanihDogadjaja');
    let kupi = document.createElement('button');
    kupi.addEventListener('click', kupovina);
    kupi.innerHTML = 'Kupi';
    tabela.appendChild(kupi);

    //sumiramo ukupan iznos
    suma();

    function suma() {
        for (let i = 0; i < korpa.length; i++) {
            let ukupnoKupljeno = document.getElementById('ceh').value;
            let iznosPoKartama = document.getElementById('iznos' + i).innerHTML;
            ukupnoKupljeno = parseInt(ukupnoKupljeno) + parseInt(iznosPoKartama);
            document.getElementById('ceh').value = ukupnoKupljeno;
        }
    }



    $(document).ready(function() {

        $("#roditelj").on('click', '.obrisi', function(event) {
            console.log(event.target.id);
            var obrisiId = event.target.id;
            var pozicijaObrisanogReda = obrisiId.slice(6);
            //brisanje sume
            document.getElementById('ceh').value -= korpa[pozicijaObrisanogReda].iznos;

            delete korpa[pozicijaObrisanogReda]
            console.log(pozicijaObrisanogReda);
            $(this).closest('tr').remove();
            var kupljeno = korpa.filter(izbaciObrisanaPolja);



            console.log(kupljeno);
            console.log(korpa);

        });

    });


    //FUNKCIJE:

    function dodajPoljeZaBrisanje(el) {
        el.obrisi = 'Obrisi';
        el.iznos = parseInt(el.cena) * parseInt(el.rezervacija);

    }



    //Funkcija koja pravi tabelu sa rezervisanim događajima
    function tabelaRezervisanihDogadjaja(x) {
        let tabela = document.getElementById('tabelaRezervisanihDogadjaja');
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
        // suma();
        return x;
    }

    //kraj funkcije tabela rezervisanih događaja


    // Aktivira se pritiskom dugmeta 'kupi'
    //1.smesta  niz kupljenih ulaznica u localStoridge pod nazivom "kupljeno"

    function kupovina() {
        //vadimo podatke iz osnovnog lagera 'bazadogadjaja' i smestamo u promenljivu lager
        //. Oduzimamo prodate ulaznice i upisujemo nove kolicine na lager
        var lager = JSON.parse(localStorage.getItem('bazadogadjaja')) || [];
        console.log(lager);
        var kupljeno = korpa.filter(izbaciObrisanaPolja);
        console.log(kupljeno);
        for (let i = 0; i < kupljeno.length; i++) {

            console.log(kupljeno[i].kolicina);
            console.log(kupljeno[i].rezervacija);
            var novaKolicina = parseInt(kupljeno[i].kolicina) - parseInt(kupljeno[i].rezervacija);
            console.log(novaKolicina);


            for (let j = 0; j < lager.length; j++) {
                console.log(kupljeno[i].naziv);
                console.log(lager[j].naziv);
                if (kupljeno[i].naziv === lager[j].naziv) {
                    console.log(lager[j].kolicina);
                    console.log(novaKolicina);
                    lager[j].kolicina = novaKolicina;
                    console.log(lager[j].kolicina);

                    //upisujemo novi lager u localStoridze 'bazadogadjaja'  
                    //pre toga obrisemo dosadasnji lager 
                    localStorage.removeItem('bazadogadjaja');
                    localStorage.setItem('bazadogadjaja', JSON.stringify(lager));
                    document.getElementById('roditelj').style.display = "none";
                    document.getElementById('poruka').innerHTML = "Vaša kupovina je uspešno izvršena. Hvala."

                }
            }
        }
        localStorage.removeItem('kupljeno');
        localStorage.setItem('kupljeno', JSON.stringify(kupljeno));
        //praznimo localS korpa
        localStorage.removeItem('korpa');


    }

    function izbaciObrisanaPolja(element) {
        return element != undefined;
    }



}