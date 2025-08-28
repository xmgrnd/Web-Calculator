//regex
const stage0 = /^$/;
const canAddOp = /^\d+$/;
const stage2 = /^\d+ [+\/\-x] $/;
const canCalc = /^\d+ [+\/\-x] \d+$/;
//initial
console.log("works");
const operators = ['+','/','-','x'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const dispUp  = document.querySelector(".upr-fd");
const dispDown  = document.querySelector(".lwr-fd");

let isFirstProvided     = false;
let isSecondProvided    = false;
let isOperatorProvided  = false;

let numFrst;
let numScnd;
let opr;
let feed = "";
let live = "";

//functions
function operate() {
    const values = live.split(" ");
    const v1 = parseInt(values[0]);
    const v2 = parseInt(values[2]);

    if (feed === "") {
        feed = live;
    } else {
        feed = feed + " " + values[1] + " " + v2;
    }

    switch(values[1]) {
        case "x":
            live = v1 * v2;
            break;
        case "/":
            if (v2 === 0) {
                alert("invalid behavior of yours.");
                live = "";
                break;
            }
            live = v1 / v2;
            break;
        case "+":
            live = v1 + v2;
            break;
        case "-":
            live = v1 - v2;
            break;
        default:
            throw new Error("quite unexpected");
            break;
    }
    dispDown.textContent = live;
    dispUp.textContent = feed;
}

function updateLive(x) {
    if (operators.includes(x)) {
        live = live + ' ' + x + ' ';
    } else {
        live = live + x;
    }
    dispDown.textContent = live;
}

function updateHandler(value){
    if (numbers.includes(value)) {
        console.log("1 fired");
        updateLive(value);
    } else if ( canAddOp.test(live) ) {
        console.log("2 fired");
        updateLive(value);
    } else if ( canCalc.test(live)) {
        console.log("3 fired");
        operate();
    }
}

updateHandler('6');
updateHandler('4');
updateHandler('-');
updateHandler('-');
updateHandler('4');
updateHandler('-');
console.log(canCalc.test(live));
console.log(live);

//buttons
document.querySelector("#ac").addEventListener("click", function (e) {
    dispDown.textContent = "";
    dispUp.textContent = "";
    
});

document.querySelector("#ce").addEventListener("click", function (e) {

});