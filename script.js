


const qoute = document.querySelector(".qoute");
const btn = document.querySelector("#new-qoute");
const person = document.querySelector(".person");

const qoutes = [{
    qoute: "This joureny of a thousand miles begins wiht one step",
    person: "Lao Tzu",
},{
    qoute: "Remember that not getting what you want is someimtes a wonderful stroke of luck.",
    person: "Dalai Lama"
}, {
    qoute: "Our lives begin to end the day we become silent about things that metter.",
    person: "Martin Luther King, Jr"
}, {
    qoute: "It does not matter how slowely you go as long as you do not stop.",
    person: "Confucius"
},{
    qoute: "I do the very best I know how - the very I can and I mean to keep on doing so until the end.",
    person: "Abraham Lincone"
}];


btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * qoutes.length)

    qoute.innerHTML = qoutes[random].qoute;
    person.innerHTML = qoutes[random].person;
})


