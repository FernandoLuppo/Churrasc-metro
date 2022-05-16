let adultMale = document.getElementById("men-count");
let adultFemale = document.getElementById("woman-count");
let chiold = document.getElementById("chiold-count");
let drinkSoda = document.getElementById("non-alcoholic-drinks-count");
let drinkBeer = document.getElementById("alcoholic-drinks-count");
let duration = document.getElementById("time-count");
let result = document.getElementById("result")

let timer = duration.value


function calculatorPeople() {
    let timer = duration.value
    let men = adultMale.value
    let woman = adultFemale.value
    let kid = chiold.value

    let calcAdultFood = food(timer) * men + food(timer) * woman;
    let calcChioldFood = food(timer) / 2 * kid;
    
    let finalCalcFood = calcAdultFood + calcChioldFood; 
    result.innerHTML = `<p>${finalCalcFood / 1000} Kg de carne</p>`;
   
}


function calculatorDrink() {
    let timer = duration.value
    let soda = drinkSoda.value
    
    let calcAdultDrink = sodaDrink(timer) * soda;
    let calcChioldDrink = sodaDrink(timer) / 2 * soda;

    let finalCalcDrink = calcAdultDrink + calcChioldDrink;
    result.innerHTML += " " + `<p>${finalCalcDrink / 1000} L de refrigerante</p>`;

}


function calculatorAlcoholicDrink() {
    let timer = duration.value
    let beer = drinkBeer.value

    let calcAlcoholicDrinks = beerDrink(timer) * beer
    result.innerHTML += " " + `<p>${calcAlcoholicDrinks / 1000} L de bebida alcoólica</p>`;

}


function food(timer) {

    if (timer >= 6){
        return 650;}
    else {
        return 400;}

}
    
function sodaDrink(timer) {

    if (timer >= 6){
        return 1400;}
    else {
        return 900;}

}

function beerDrink(timer) {

    if (timer >= 6){
        return 2800;}
    else {
        return 2000;}

}


function calc() {
    
    calculatorPeople()
    calculatorDrink()
    calculatorAlcoholicDrink()
    
}


