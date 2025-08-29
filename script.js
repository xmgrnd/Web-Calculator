//regex
const canAddOp = /^-?\d+(\.\d+)?$/;
const canCalc = /^\-?\d+(\.\d+)? [+\/\-x] \-?\d+(\.?\d+)?$/;
//initial
console.log("start");
const operators = ['+','/','-','x'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const dispUp  = document.querySelector(".upr-fd");
const dispDown  = document.querySelector(".lwr-fd");

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
    live = parseInt(live).toFixed(2);
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
    } else if ( operators.includes(value) && canAddOp.test(live) ) {
        console.log("2 fired");
        updateLive(value);
    } else if ( canCalc.test(live)) {
        console.log("3 fired");
        operate();
        updateLive(value);
    }
}



//buttons
document.querySelector("#ac").addEventListener("click", function (e) {
    feed = "";
    live = "";
    dispDown.textContent = "";
    dispUp.textContent   = "";
});

document.querySelector("#ce").addEventListener("click", function (e) { 
    let temp = live.split("");
    temp.pop();
    if ( live.length === 0 ) {
        feed = "";
        dispUp.textContent = feed;
    }
    live = temp.join("");
    dispDown.textContent = live;
});

document.querySelector("#one").addEventListener("click", function (e) { updateHandler('1'); });
document.querySelector("#two").addEventListener("click", function (e) { updateHandler('2'); });
document.querySelector("#three").addEventListener("click", function (e) { updateHandler('3'); });
document.querySelector("#four").addEventListener("click", function (e) { updateHandler('4'); });
document.querySelector("#five").addEventListener("click", function (e) { updateHandler('5'); });
document.querySelector("#six").addEventListener("click", function (e) { updateHandler('6'); });
document.querySelector("#seven").addEventListener("click", function (e) { updateHandler('7'); });
document.querySelector("#eight").addEventListener("click", function (e) { updateHandler('8'); });
document.querySelector("#nine").addEventListener("click", function (e) { updateHandler('9'); });
document.querySelector("#zero").addEventListener("click", function (e) { updateHandler('0'); });

document.querySelector("#plus").addEventListener("click", function (e) { updateHandler('+'); });
document.querySelector("#minus").addEventListener("click", function (e) { updateHandler('-'); });
document.querySelector("#dvd").addEventListener("click", function (e) { updateHandler('/'); });
document.querySelector("#times").addEventListener("click", function (e) { updateHandler('x'); });


document.querySelector("#equals").addEventListener("click", function (e) {
    if ( canCalc.test(live)) {
        operate();
    }
});
