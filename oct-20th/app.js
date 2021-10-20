import { fruits } from './fruits.js';
console.log(fruits);

const fruit1Img = document.getElementById('fruit-1-img');
const fruit2Img = document.getElementById('fruit-2-img');
const button = document.getElementById('submit');

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
    fruit1Img.src = fruit1.image;
    let fruit2 = fruits[randNum2];
    fruit2Img.src = fruit2.image;
};

generateFruit(); //calls the first 2 fruits whent he page is loaded

button.addEventListener('click', () => {

    generateFruit();

});