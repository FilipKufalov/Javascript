let countryImages = ["af-flag", "al-flag", "ag-flag",
    "an-flag", "ao-flag", "ac-flag", "ar-flag",
    "am-flag", "as-flag", "au-flag", "aj-flag",
    "bf-flag", "ba-flag", "bg-flag", "bb-flag",
    "bo-flag", "be-flag", "bh-flag", "bn-flag",
    "bt-flag", "bl-flag", "bk-flag", "bc-flag",
    "br-flag", "bx-flag", "bu-flag", "uv-flag",
    "by-flag", "iv-flag", "cv-flag", "cb-flag",
    "cm-flag", "ca-flag", "ct-flag", "cd-flag",
    "ci-flag", "ch-flag", "co-flag", "cn-flag",
    "cg-flag", "cs-flag", "hr-flag", "cu-flag",
    "cy-flag", "ez-flag", "da-flag", "dj-flag",
    "do-flag", "dr-flag", "kn-flag", "congo-flag",
    "ec-flag", "eg-flag", "es-flag", "ek-flag",
    "er-flag", "en-flag", "wz-flag", "et-flag",
    "fj-flag", "fi-flag", "fr-flag", "gb-flag",
    "ga-flag", "gg-flag", "gm-flag", "gh-flag",
    "gr-flag", "gj-flag", "gt-flag", "gv-flag",
    "pu-flag", "gy-flag", "ha-flag", "vt-flag",
    "ho-flag", "hu-flag", "ic-flag", "in-flag",
    "id-flag", "ir-flag", "iz-flag", "ei-flag",
    "is-flag", "it-flag", "jm-flag", "ja-flag",
    "jo-flag", "kz-flag", "ke-flag", "kr-flag",
    "ku-flag", "kg-flag", "la-flag", "lg-flag",
    "le-flag", "lt-flag", "li-flag", "ly-flag",
    "ls-flag", "lh-flag", "lu-flag", "ma-flag",
    "mi-flag", "my-flag", "mv-flag", "ml-flag",
    "mt-flag", "rm-flag", "mr-flag", "mp-flag",
    "mx-flag", "fm-flag", "md-flag", "mn-flag",
    "mg-flag", "mj-flag", "mo-flag", "mz-flag",
    "bm-flag", "wa-flag", "nr-flag", "np-flag",
    "nl-flag", "nz-flag", "nu-flag", "ng-flag",
    "ni-flag", "mk-flag", "no-flag", "mu-flag",
    "pk-flag", "ps-flag", "pm-flag", "pp-flag",
    "pa-flag", "pe-flag", "rp-flag", "pl-flag",
    "po-flag", "qa-flag", "ro-flag", "rs-flag",
    "rw-flag", "sc-flag", "st-flag", "ws-flag",
    "sm-flag", "tp-flag", "sa-flag", "sg-flag",
    "ri-flag", "se-flag", "sl-flag", "sn-flag",
    "lo-flag", "si-flag", "bp-flag", "so-flag",
    "sf-flag", "ks-flag", "od-flag", "sp-flag",
    "ce-flag", "vc-flag", "palestine-flag", "su-flag",
    "ns-flag", "sw-flag", "sz-flag", "sy-flag",
    "ti-flag", "tz-flag", "th-flag", "tt-flag",
    "to-flag", "tn-flag", "td-flag", "ts-flag",
    "tu-flag", "tx-flag", "tv-flag", "ae-flag",
    "uk-flag", "us-flag", "ug-flag", "up-flag",
    "uy-flag", "uz-flag", "nh-flag", "ve-flag",
    "vm-flag", "ym-flag", "za-flag", "zi-flag"];

let countryNames = ["afghanistan", "albania", "algeria", "andorra",
    "angola", "antigua", "argentina", "armenia", "australia", "austria",
    "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus",
    "belgium", "belize", "benin", "bhutan", "bolivia", "bosnia", "botswana",
    "brazil", "brunei ", "bulgaria", "burkina", "burundi", "cote", "cabo",
    "cambodia", "cameroon", "canada", "car", "chad", "chile", "china",
    "colombia", "comoros", "congo", "costa rica", "croatia", "cuba",
    "cyprus", "czech", "denmark", "djibouti", "dominica", "dominican",
    "north korea", "drc", "ecuador", "egypt", "el salvador",
    "equatorial guinea", "eritrea", "estonia", "eswatini", "ethiopia", "fiji",
    "finland", "france", "gabon", "gambia", "georgia", "germany", "ghana",
    "greece", "grenada", "guatemala", "guinea", "guinea-bissau", "guyana",
    "haiti", "holy see", "honduras", "hungary", "iceland", "india",
    "indonesia", "iran", "iraq", "ireland", "israel", "italy", "jamaica",
    "japan", "jordan", "kazakhstan", "kenya", "kiribati", "kuwait",
    "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia",
    "libya", "liechtenstein", "lithuania", "luxembourg", "madagascar",
    "malawi", "malaysia", "maldives", "mali", "malta", "marshall islands",
    "mauritania", "mauritius", "mexico", "micronesia", "moldova", "monaco",
    "mongolia", "montenegro", "morocco", "mozambique", "myanmar", "namibia",
    "nauru", "nepal", "netherlands", "new zealand", "nicaragua", "niger",
    "nigeria", "macedonia", "norway", "oman", "pakistan", "palau", "panama",
    "papua new guinea", "paraguay", "peru", "philippines", "poland",
    "portugal", "qatar", "romania", "russia", "rwanda",
    "saint kitts and nevis", "saint lucia", "samoa", "san marino", "sao tome and principe",
    "saudi arabia", "senegal", "serbia", "seychelles", "sierra leone",
    "singapore", "slovakia", "slovenia", "solomon islands", "somalia",
    "south africa", "south korea", "south sudan", "spain", "sri lanka",
    "st. vincent grenadines", "state of palestine", "sudan", "suriname",
    "sweden", "switzerland", "syria", "tajikistan", "tanzania", "thailand",
    "timor-leste", "togo", "tonga", "trinidad", "tunisia", "turkey",
    "turkmenistan", "tuvalu", "united arab emirates", "united kingdom",
    "united states", "uganda", "ukraine", "uruguay", "uzbekistan",
    "vanuatu", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"];

let startpoints = 0;
let RandomNumber;
let answer = document.getElementById('answer');
let flag = document.getElementById("country");

function startGame() {
    RandomNumber = Math.floor(Math.random() * 196);
    flag.src = `https://www.worldometers.info/img/flags/${countryImages[RandomNumber]}.gif`;
}

function skipFlag() {
    RandomNumber = Math.floor(Math.random() * 196);
    startpoints -= 1;
    points.innerText = startpoints;
    answer.innerHTML = "";
    flag.src = `https://www.worldometers.info/img/flags/${countryImages[RandomNumber]}.gif`;
}

function showAnswer() {
    answer.innerHTML = countryNames[RandomNumber].toUpperCase();
    startpoints -= 5;
    points.innerText = startpoints;
}

function showLegend() {
    document.getElementById('legenddiv').style.visibility = "hidden";
    console.log("test");
}

document.getElementById("country").onclick = function () {
    let country = prompt("Which country is it?");
    let points = document.getElementById('points');
    if (country.toLowerCase() == countryNames[RandomNumber]) {
        alert("Correct guess");
        startpoints += 5;
        skipFlag();
    } else {
        alert("Try again");
        startpoints -= 3;
    }
    console.log(RandomNumber);
    points.innerText = startpoints;
}