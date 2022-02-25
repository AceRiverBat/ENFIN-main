//ANNEE
const IDyear = document.getElementById("year");
let h2Y = document.createElement("h2");
IDyear.appendChild(h2Y);
let NowYear = new Date();
let TodayYear = NowYear.getFullYear();
h2Y.innerHTML = '<a href="#" id="preY" class="previous round">&#8249;</a>' + TodayYear + '<a href="#" id="nextY" class="next round">&#8250;</a>';

const PreY = document.getElementById("preY");
PreY.onclick = function () {
    const el = TodayYear--;
    
    console.log(el);
}

const NextY = document.getElementById("nextY");
NextY.onclick = function () {
    const el = TodayYear++;
    console.log(el);

}
//MOIS
const IDmonth = document.getElementById("month");
let h3M = document.createElement("h3");
IDmonth.appendChild(h3M);
let Nowmonths = (new Date).getMonth();
let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

h3M.innerHTML = '<a href="#" id="prem" onclick="previous()"class="previous round">&#8249;</a>' + months[Nowmonths] + '<a href="#" id="nextm" class="next round">&#8250;</a>';

// const previous = document.getElementById("prem");
// previous.onclick = function () {
//     let nouvPrev = '<a href="#" id="prem" onclick="previous()"class="previous round">&#8249;</a>' + months[Nowmonths-1] + '<a href="#" id="nextm" class="next round">&#8250;</a>';
//     h3M.innerHTML = nouvPrev;
//     console.log(months[Nowmonths-1]);
// }

const Previous = document.getElementById("prem");
Previous.onclick = function () {
        const el = months[Nowmonths];
        months[Nowmonths--];
        console.log(el);

}

const Next = document.getElementById("nextm");
Next.onclick = function () {
        const el = months[Nowmonths];
        months[Nowmonths++];
        console.log(el);

}


//JOURS
const IDday = document.getElementById("day");
let ulDay = document.createElement("ul");
IDday.appendChild(ulDay);
let NowDay = (new Date).getDay();
let Days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
for (let i = 0; i < Days.length; i++) {
    const jours = Days[i];
    let liDay = document.createElement("li");
    ulDay.appendChild(liDay);
    liDay.innerHTML = jours;
};

//CASES

function getMois(mois, annee) {
    let lgMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
        lgMois[1] = 29;
    }

    function setfirst(date) { 
        let day = date.getDate() || lgMois[Nowmonths]; 
        if (day !== 1){ 
        date.setHours(-24 * (day - 1)); 

        };
        let tabnumber = [];
        let date1 = date.getDate();
    while (date1 < lgMois[Nowmonths]+1){
        tabnumber.push(date1++);

    } 
    for (let i = 0; i < tabnumber.length; i++) {
            const el = tabnumber[i] ;
            let test = document.querySelector("#test");
            let div = document.createElement("div");
            let div1 = document.createElement("div");
            test.appendChild(div);
            div.className = 'd-flex justify-content-inline';
            div1.className = 'card ';
            test.appendChild(div1);
            div.appendChild(div1);
            let divbody = document.createElement("div");
            divbody.className = 'card-body';
            div1.appendChild(divbody);
            let pnumber = document.createElement("p");
            div1.appendChild(pnumber);
            pnumber.innerHTML = el;
            
        }

    } 
    setfirst(new Date());
    
}
getMois();


//TEST

let d = NowYear.getDate();
let p = document.getElementsByTagName('p')[d-1];
p.style.backgroundColor = 'rgba(224, 80, 80, 0.637)';
p.style.padding = '3em';
