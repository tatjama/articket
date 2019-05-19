function postaviLocalStoridge() {
    //localStorage.removeItem('bazakorisnika');

    //preuzimanje vrednosti local storidga i slanje na drugu adresu
    /*
        var nizDogadjaja = JSON.parse(localStorage.getItem('bazadogadjaja'));
        var bazakorisnika = JSON.parse(localStorage.getItem('bazakorisnika'));
        var trenutnoUlogovani = {
            status: 9,
            email: "gost"
        }
        console.log(nizDogadjaja);
        console.log(bazakorisnika);
        localStorage.setItem('bazadogadjaja3', JSON.stringify(nizDogadjaja));
        localStorage.setItem('bazakorisnika3', JSON.stringify(bazakorisnika));
        localStorage.setItem('trenutnoulogovanikorisnik3', JSON.stringify(trenutnoUlogovani));*/


    //KADA JE LOCAL STORADGE PRAZAN, PUNIMO GA POCETNIM VREDNOSTIMA.
    //INDEX.HTML DUGME POCETNA



    var bazakorisnika = [
        { ime: "TATJANA", prezime: "MARKOVIC", email: "tanja120a@gmail.com", lozinka: "tanja", status: "0" },
        { ime: "TANJA", prezime: "MARKOVIC", email: "tanja120@gmail.com", lozinka: "tanja", status: "0" },
        { ime: "PERA", prezime: "PERIC", email: "pera@gmail.com", lozinka: "pera", status: "1" },
        { ime: "MITAR", prezime: "MIRIC", email: "mitar@gmail.com", lozinka: "mitar", status: "1" },
        { ime: "IVAN", prezime: "IVANOVIC", email: "ivan@gmail.com", lozinka: "ivan", status: "1" }

    ];
    var nizDogadjaja = [{
            naziv: "KARMEN",
            autor: "BIZE",
            cena: "700",
            datum: "2019-05-10",
            kolicina: 123,
            vrsta: "Opera",
            scena: "Mala scena"

        },
        {
            naziv: "RADOVAN TREĆI",
            autor: "DUŠAN KOVAČEVIĆ",
            cena: "500",
            datum: "2019-05-20",
            kolicina: 8,
            vrsta: "Predstava",
            scena: "Mala scena"

        }, {

            naziv: "GOSPOĐA MINISTARKA",
            autor: "BRANISLAV NUŠIĆ",
            cena: "800",
            datum: "2019-05-15",
            kolicina: 163,
            vrsta: "Predstava",
            scena: "Mala scena"

        },
        {
            naziv: "TRAVIJATA",
            autor: "ĐUZEPE VERDI",
            cena: "860",
            datum: "2019-05-19",
            kolicina: 161,
            vrsta: "Opera",
            scena: "Velika scena"

        }, {
            naziv: "BALKANSKI ŠPIJUN",
            autor: "DUŠAN KOVAČEVIĆ",
            cena: "680",
            datum: "2019-05-11",
            kolicina: 175,
            vrsta: "Predstava",
            scena: "Mala scena"

        }, {
            naziv: "LABUDOVO JEZERO",
            autor: "PETAR ILJIČ ČAJKOVSKI",
            cena: "900",
            datum: "2019-05-18",
            kolicina: 236,
            vrsta: "Balet",
            scena: "Velika scena"

        }, {
            naziv: "ČUDO U ŠARGANU",
            autor: "LJUBOMIR SIMOVIĆ",
            cena: "550",
            datum: "2019-05-25",
            kolicina: 80,
            vrsta: "Predstava",
            scena: "Mala scena"

        }, {
            naziv: "DAMA S KAMELIJAMA",
            autor: "ALEKSANDAR DIMA SIN",
            cena: "800",
            datum: "2019-05-16",
            kolicina: 255,
            vrsta: "Predstava",
            scena: "Mala scena"

        }, {
            naziv: "EVGENIJE ONJEGIN",
            autor: "PETAR ILJIČ ČAJKOVSKI",
            cena: "900",
            datum: "2019-05-16",
            kolicina: 58,
            vrsta: "Balet",
            scena: "Velika scena"

        }, {
            naziv: "KRCKO ORAŠČIĆ",
            autor: "PETAR ILJIČ ČAJKOVSKI",
            cena: "980",
            datum: "2019-05-28",
            kolicina: 37,
            vrsta: "Balet",
            scena: "Velika scena"

        }, {
            naziv: "KRALJICA MARGO",
            autor: "GORAN BREGOVIĆ",
            cena: "700",
            datum: "2019-05-17",
            kolicina: 195,
            vrsta: "Balet",
            scena: "Mala scena"

        }, {
            naziv: "USPAVANA LEPOTICA",
            autor: "PETAR ILJIČ ČAJKOVSKI",
            cena: "800",
            datum: "2019-05-16",
            kolicina: 79,
            vrsta: "Balet",
            scena: "Mala scena"

        }, {
            naziv: "KAVALERIJA RUSTIKANA",
            autor: "PJETRO MASKANJI",
            cena: "1000",
            datum: "2019-05-21",
            kolicina: 151,
            vrsta: "Opera",
            scena: "Velika scena"

        }, {
            naziv: "AIDA",
            autor: "ĐUZEPE VERDI",
            cena: "880",
            datum: "2019-05-18",
            kolicina: 158,
            vrsta: "Opera",
            scena: "Velika scena"

        }, {
            naziv: "MUZIČKI RAZGOVORI",
            autor: "NEMANJA STANKOVIĆ",
            cena: "2000",
            datum: "2019-05-15",
            kolicina: 163,
            vrsta: "Filharmonija",
            scena: "Mala scena"

        }, {
            naziv: "KONCERT NA OTVORENOM",
            autor: "GABRIJEL FELC",
            cena: "100",
            datum: "2019-05-22",
            kolicina: 93,
            vrsta: "Filharmonija",
            scena: "Velika scena"

        }, {
            naziv: "JA VOLIM FILHARMONIJU",
            autor: "ALEKSANDAR KOJIĆ",
            cena: "2500",
            datum: "2019-05-22",
            kolicina: 163,
            vrsta: "Filharmonija",
            scena: "Mala scena"

        }, {

            naziv: "BOLERO",
            autor: "RAVEL",
            cena: "970",
            datum: "2019-05-17",
            kolicina: 165,
            vrsta: "Filharmonija",
            scena: "Mala scena"

        }, {
            naziv: "ERO S ONOGA SVIJETA",
            autor: "JAKOV GOTOVAC",
            cena: "1500",
            datum: "2019-05-27",
            kolicina: "157",
            vrsta: "Opera",
            scena: "Velika scena"

        }, {
            naziv: "NA LEPOM PLAVOM DUNAVU",
            autor: "JOHAN STRAUS",
            cena: "1200",
            datum: "2019-05-13",
            kolicina: "71",
            vrsta: "Filharmonija",
            scena: "Velika scena"

        }

    ];
    var trenutnoUlogovani = {
        status: 9,
        email: "gost"
    }
    console.log(nizDogadjaja);
    console.log(bazakorisnika);
    console.log(trenutnoUlogovani);

    localStorage.removeItem('bazadogadjaja');
    localStorage.removeItem('bazakorisnika');
    localStorage.removeItem('trenutnoulogovanikorisnik');

    localStorage.setItem('bazadogadjaja', JSON.stringify(nizDogadjaja));
    localStorage.setItem('bazakorisnika', JSON.stringify(bazakorisnika));
    localStorage.setItem('trenutnoulogovanikorisnik', JSON.stringify(trenutnoUlogovani));



}