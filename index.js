
const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
const document = dom.window.document;

const numOne = 1;
const numTwo = 2;
const numTwoStr = numTwo.toString();
const h2 = document.createElement("h2");
h2.textContent = numTwoStr;
document.querySelector("body").appendChild(h2);
console.log(numTwo);

fetch("http://localhost:3000/events")
.then(r => r.json())
.then(json => {
    eventData = json;
    console.log(eventData);

    eventData.forEach(event =>{
        showCards(event);
    })
})

function showCards(event) {
    console.log(event);
}
