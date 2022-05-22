let adultMale = document.getElementById("men-count");
let adultFemale = document.getElementById("woman-count");
let chiold = document.getElementById("chiold-count");
let drinkSoda = document.getElementById("non-alcoholic-drinks-count");
let drinkBeer = document.getElementById("alcoholic-drinks-count");
let duration = document.getElementById("time-count");
let result = document.getElementById("result")

function timeFood() {

    let time = duration.value;
    let food = (adultMale.value + adultFemale.value) * 125;
    let foodKid = chiold.value * 62.5; 

    let foodForTime = (food + foodKid) * time;
    result.innerHTML = `<p>${foodForTime / 1000} Kl de carne</p>`;

}


function timeSoda() {

    let time = duration.value;
    let soda = drinkSoda.value * 225;

    let sodaForTime = soda * time;
    result.innerHTML += `<p>${sodaForTime / 1000} L de refrigerante</p>`;

}


function timeBeer() {

    let time = duration.value;
    let beer = drinkBeer.value * 500;

    let beerForTime = beer * time;
    result.innerHTML += `<p>${beerForTime / 1000} L de cerveja</p>`;

}


function calc() {

    timeFood()
    timeSoda()
    timeBeer()

}


