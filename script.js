//Model
let thing;
let name;
let food;

//View
function updateView() {
    document.getElementById("story").innerHTML = /*html*/ `
            <div>Det var en gang&nbsp;</div>
            <div id="thingDiv">${thing || "----"}</div>
            <div>, han heter&nbsp;</div>
            <div id="nameDiv">${name || "----"}</div>
            <div>&nbsp;og han liker&nbsp;</div>
            <div id="foodDiv">${food || "----"}</div>
    `;
}
//Controller
function changeThing(word) {
    thing = word;
    updateView();
}

function changeName(word) {
    name = word;
    updateView();
}

function changeFood(word) {
    food = word;
    updateView();
}

updateView();
