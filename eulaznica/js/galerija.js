var omotac = document.getElementById('omotac');
var slika1 = "../slikezavrsni/pozoriste.jpg";
var slika2 = "../slikezavrsni/balerina6.jpg";
var slika3 = "../slikezavrsni/opera6.jpg";
var slika4 = "../slikezavrsni/filharmonija4.jpg";
var slika5 = "../slikezavrsni/drama6.jpg"
var niz = [slika1, slika2, slika3, slika4, slika5];
var nizTekstova = ["Narodno pozorište", "Balet", "Opera", "Koncerti", "Predstave"];


function slika(y, z, l) {
    var x = document.createElement('img');
    x.setAttribute("src", y);
    x.setAttribute("class", l);
    x.style.display = z;
    omotac.appendChild(x);

}

$(document).ready(function() {
    slika(slika1, "block", 0);
    slika(slika2, "none", 1);
    slika(slika3, "none", 2);
    slika(slika4, "none", 3);
    slika(slika5, "none", 4);

    for (let i = 0; i < niz.length; i++) {
        var p = document.createElement('p');
        p.setAttribute("class", "krug");
        p.setAttribute("class", i);
        p.setAttribute("id", i);
        omotac.appendChild(p);
    }

    var h1 = document.createElement('h1');
    h1.setAttribute("id", "tekst");
    omotac.appendChild(h1);

});


var brojac = 0;

//strelice levo i desno pokrecu kunkciju za listanje slika. which i keyCode citaju vrednost tastera

$(document).keyup(promeni);

function promeni(dogadjaj) {
    var k = (dogadjaj.which || dogadjaj.keyCode);
    resetuj();

    if (k == 39) {
        brojac++;
        $('img').hide(2000);
        if (brojac > (niz.length - 1)) {
            brojac = 0;
        }
        $("." + brojac).show().slideUp(2000).slideDown(2000);
        $('p' + '.' + brojac).css("background-color", "red");

    }
    if (k == 37) {
        brojac--;
        $('img').hide();
        if (brojac < 0) {
            brojac = (niz.length - 1);
        }
        $('.' + brojac).show().fadeTo(2000, 0.2);
        $('p' + '.' + brojac).css("background-color", "red");
        $('h1').show().animate({
            left: '550px',
            top: "150px",
            fontSize: "56px"

        }, (500)).queue(function() {
            $(this).css({
                "color": "red",
                "text-shadow": "3px 3px 11px black"
            }).dequeue();
        });
        document.getElementById('tekst').innerHTML = nizTekstova[brojac];
    }
}

function resetuj() {
    $('img').css("opacity", "1");
    $('p').css({
        "opacity": "1",
        "background-color": "lightgrey"
    });
    $('h1').css({
        "font-size": "12px",
        "color": "black",
        "left": "0",
        "top": "400px"
    }).hide();
}