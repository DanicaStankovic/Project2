document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("listaTaskova").innerHTML = localStorage.getItem("sacuvaniTaskovi");
 });

function sacuvajTaskSaOpcijomBrisanja() {
    let tekstTaska = document.getElementById("poljeZaUnosTaska").value;
    taskNaListi = document.createElement("li");
    let tekstTaskaNaListi = document.createTextNode(tekstTaska);
    taskNaListi.appendChild(tekstTaskaNaListi);
    listaTaskova.appendChild(taskNaListi);
    let iksic = document.createElement("a");
    iksic.setAttribute("class", "xIcon");
    iksic.setAttribute("onclick", "brisiTask(event)");
    let slicicaZaBrisanje = document.createElement("img");
    slicicaZaBrisanje.setAttribute ("src", "img/x-icon.png");
    slicicaZaBrisanje.setAttribute ("alt", "X");
    slicicaZaBrisanje.setAttribute ("height", "20px");
    iksic.appendChild(slicicaZaBrisanje);
    taskNaListi.appendChild(iksic);
    document.getElementById("poljeZaUnosTaska").value = "";
    let sacuvajTaskove = document.getElementById("listaTaskova").innerHTML;
    localStorage.setItem("sacuvaniTaskovi", sacuvajTaskove);
}

function brisiTask(event) {
    let mojAlert = confirm("Are you sure? This action cannot be undone.");
        if (mojAlert == true) {
            event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
            let sacuvajTaskove = document.getElementById("listaTaskova").innerHTML;
            localStorage.setItem("sacuvaniTaskovi", sacuvajTaskove);
        }
}

function pretragaListe() {
    let poljeUnetogTeksta = document.getElementById("poljeFilterTaskova");
    let unetiTekstMalaSlova = poljeUnetogTeksta.value.toLowerCase();
    let sviTaskovi = document.getElementsByTagName("li");
        for (let i = 0; i < sviTaskovi.length; i++) {
            let tekstTaska = sviTaskovi[i].childNodes[0];
            let tekstTaskaMalaSlova = tekstTaska.nodeValue.toLowerCase();
            if (tekstTaskaMalaSlova.indexOf(unetiTekstMalaSlova) > -1) {
                sviTaskovi[i].style.display = "";
            }
            else {
                sviTaskovi[i].style.display = "none";
            }
        }
}

function brisanjeSvihTaskova() {
    let mojAlert = confirm("Are you sure? This action cannot be undone.");
    if (mojAlert == true) {
        let lista = document.getElementById("listaTaskova");
        lista.remove(lista.childNodes);
        localStorage.clear();
    }
}
/*
+ Омогућите кориснику да при уношењу нових задатака такође унесе и алфанумерички приоритет, а да се при уношењу у листу задаци аутоматски сортирају по нормалном алфанумеричком редоследу приоритета.
+ Поред тога, омогућите кориснику да едитује већ унети приоритет постојећих задатака на листи, уз аутоматско ресортирање.
*/