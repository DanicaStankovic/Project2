document.addEventListener("DOMContentLoaded", preuzmiPodatke);
function preuzmiPodatke() {
    if (localStorage.getItem("sacuvaniTaskovi") !== null) {
        document.getElementById("listaTaskova").innerHTML = localStorage.getItem("sacuvaniTaskovi");
    }
}

document.getElementById("unosTaskovaForma").onsubmit = sacuvajTaskSaOpcijomBrisanja;
function sacuvajTaskSaOpcijomBrisanja() {
    let tekstTaska = document.getElementById("poljeZaUnosTaska").value;
    taskNaListi = document.createElement("li");
    let tekstTaskaNaListi = document.createElement("p");
    tekstTaskaNaListi.innerHTML = tekstTaska;
    taskNaListi.appendChild(tekstTaskaNaListi);
    let iksic = document.createElement("a");
    iksic.setAttribute("class", "xIcon");
    iksic.setAttribute("onclick", "brisiTask(event)");
    let slicicaZaBrisanje = document.createElement("img");
    slicicaZaBrisanje.setAttribute ("src", "img/x-icon.png");
    slicicaZaBrisanje.setAttribute ("alt", "X");
    slicicaZaBrisanje.setAttribute ("height", "12px");
    iksic.appendChild(slicicaZaBrisanje);
    taskNaListi.appendChild(iksic);
    document.getElementById("listaTaskova").appendChild(taskNaListi);
    let sacuvajTaskove = document.getElementById("listaTaskova").innerHTML;
    localStorage.setItem("sacuvaniTaskovi", sacuvajTaskove);
    document.getElementById("poljeZaUnosTaska").value = "";
}

function brisiTask(event) {
    let mojAlert = confirm("Are you sure? This action cannot be undone.");
        if (mojAlert == true) {
            event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
            let sacuvajTaskove = document.getElementById("listaTaskova").innerHTML;
            localStorage.setItem("sacuvaniTaskovi", sacuvajTaskove);
        }
}

document.getElementById("poljeFilterTaskova").addEventListener("keyup", pretragaListe);
function pretragaListe() {
    let poljeUnetogTeksta = document.getElementById("poljeFilterTaskova");
    let unetiTekstMalaSlova = poljeUnetogTeksta.value.toLowerCase();
    let elementiListe = document.getElementsByTagName("li");
    let paragrafiTekstTaska = document.getElementsByTagName("p");
        for (let i = 0; i < paragrafiTekstTaska.length; i++) {
            let tekstTaska = paragrafiTekstTaska[i].innerHTML;
            let tekstTaskaMalaSlova = tekstTaska.toLowerCase();
            if (tekstTaskaMalaSlova.indexOf(unetiTekstMalaSlova) > -1) {
                elementiListe[i].style.display = "";
            }
            else {
                elementiListe[i].style.display = "none";
            }
        }
}

document.getElementById("dugmeClear").addEventListener("click", brisanjeSvihTaskova);
function brisanjeSvihTaskova() {
    let mojAlert = confirm("Are you sure? This action cannot be undone.");
    if (mojAlert == true) {
        let lista = document.getElementById("listaTaskova");
        let elementiListe = lista.getElementsByTagName("li");
        while (elementiListe.length > 0) {
            lista.removeChild(elementiListe[0]);
        }
        localStorage.removeItem("sacuvaniTaskovi");
    }
}
/*
+ Омогућите кориснику да при уношењу нових задатака такође унесе и алфанумерички приоритет, а да се при уношењу у листу задаци аутоматски сортирају по нормалном алфанумеричком редоследу приоритета.
+ Поред тога, омогућите кориснику да едитује већ унети приоритет постојећих задатака на листи, уз аутоматско ресортирање.
*/