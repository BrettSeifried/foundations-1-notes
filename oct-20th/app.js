import { fruits } from './fruits.js';
import { pickFruit, showFruit } from './storage-utils.js';
console.log(fruits);

const fruit1Img = document.getElementById('fruit-1-img');
const fruit2Img = document.getElementById('fruit-2-img');
const button = document.getElementById('submit');
const fruit1Radio = document.getElementById('fruit-1-radio')
const fruit2Radio = document.getElementById('fruit-2-radio')

const generateFruit = () => {
    // generate 2 random fruit
    let randNum1 = Math.floor(Math.random() * fruits.length);
    let randNum2 = Math.floor(Math.random() * fruits.length);
    let randNum3 = Math.floor(Math.random() * fruits.length); // for third number
        //regenrate th enumber if they match for 3 options
    while (
        randNum1 === randNum2 ||
        randNum1 === randNum3 ||
        randNum2 === randNum3
    ) {
        randNum1 = Math.floor(Math.random() * fruits.length);
        randNum2 = Math.floor(Math.random() * fruits.length);
        randNum3 = Math.floor(Math.random() * fruits.length);
    }
    // call showFruit for each
    
    // render the fruit page
    let fruit1 = fruits[randNum1];
    showFruit(fruit1.id); // ADDED day 2
    fruit1Img.src = fruit1.image;
    fruit1Radio.value = fruit1.id

    let fruit2 = fruits[randNum2];
    showFruit(fruit2.id); // ADDED day 2
    fruit2Img.src = fruit2.image;
    fruit2Radio.value = fruit2.id
};
let totalPlays = 0; // I used 10 and go to 0 ALREADY did this
generateFruit(); //calls the first 2 fruits whent he page is loaded

button.addEventListener('click', () => {
    const chosenRadio = document.querySelector('input[type=radio]:checked');
    // query selector is a CSS selector
    if (chosenRadio){
        const chosenId = chosenRadio.value;
        totalPlays++;
        pickFruit(chosenId);
        if(totalPOlays >= 2){
            window.location = './results';
        } else {
            generateFruit();
        }
    }
    
    generateFruit();

});