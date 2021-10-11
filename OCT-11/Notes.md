### for loops
* used for repeating the same thing on a page
    * in stead of copying and pasting and alterring HTML elements

``` javascript
let soda = [
    'Irn Bru',
    'Inca Cola',
    'Cactus Cooler',
    'verners',
    'Faygo',
]

// Old way of doing
// for(let i = 0; i< soda.length; i++) {
//     console.log(soda[i]);
// }

// Option one
for(let soda of sodas) {
    console.log(`the value of soda is ${soda}`)
}

// Increment up
let  i=0;
for(let soda of sodas) {
    console.log(`index ${i} of sodas is: ${soda}`)
    i++;
}
```

``` javascript
// NEED FOR EXAMPLE
let soda = [
    {name: 'Irn Bru', img: 'https://s36737.pcdn.co/wp-content/uploads/2016/04/Hopsctch-board.jpg',
    {name: 'Inca Cola', img: 'https://www.liquor.com/thmb/r2gcipnku_IfX0EcBD7A-Z1CV_A=/735x0/scotch_main_720x720-1b3bc33c5cce48049771463b381a82f0.jpg',
    'Cactus Cooler',
    'verners',
    'Faygo',
]
// below exammples

let  i=0;
for(let soda of sodas) {
    console.log(`index ${i} of sodas is: ${soda}`)
    i++;
}

// const sodaList = document.getElementById('soda-list');
// const sodaHeader = document.getElementById('h2');
// sodaHeader.textContent = 'Irn Bru';
// sodaList.appendChild(sodaHeader);

// appendChild repeats the h2 element ont he website
// there is no h2 in HTMl, but puts them in the id='soda.list' on Html.
const sodaList = document.getElementById('soda-list');
for(let soda of sodas) {
const sodaHeader = document.getElementById('h2');
sodaHeader.textContent = soda.name;
sodaList.appendChild(sodaHeader);
}

```

``` javascript
//  CREATING HTML ELEMENTS
// for loops create copy image, name on panels
// <div class="soda-card">
//      <h2> Irn Bru </h2>
//      <div img src="./asets/img" alt="something">
// </div>
const sodaList = document.getElementById('soda-list');

// BELOW NEEDED TO CREATE HTML - creatin following dic for each item in sodas
for(let soda of sodas) {
    // div above
    cosnt sodaCard = document.creatElement('div');
    sodaCard.classList.add('soda-card'); //Added class name of 'soda-card'

    // h2 above
    const sodaHeader = document.getElementById('h2');
    sodaHeader.textContent = soda.name;

    // img above
    const img = document.createElement('img');
    img.src = soda.img;

    // append calls multiple things and ends to DOM
    // puts h2 and img into div
    sodaCard.appen(sodaHeader, img);
    // copies above img and h2 into own divs
    sodaList.appendChild(sodaCard);
    
}
```

### Oct 11 Notes
* Html elements auto generating
``` css
* {
    /* -- makes it a vriable */
    --color-1: $fce762;
    --color-2: $84DCC6;
}   

.green {
    background-color: var(--color-01)l
}
```
``` javascript
// additions
// const sodacards can go here cosnt sodaCard = document.creatElement('div');
const sodaCards = document.getElementsByClassName ('soda-card');
const purplebutton = documnet.getElementById('purple');
purpleButton.addEventListener('click', () => {
    // document.querySelectorAll('.soda-card'); //get all the soa-card divs
    // documnet.getElementsByClassName('soda-card');
    // loop throuhg each soda-card div
    // add the classname purple
    // remmeber to remove the classname spink, and turqoise to not conflict with each other

    for(let booger of sodaCards){
        booger.ClassList.add('purple');
        booger.ClassList.remove('turqoise');
        booger.ClassList.remove('PINK');
    }
})

const pinkbutton = documnet.getElementById('pink');
pinkButton.addEventListener('click', () => {
    for(let booger of sodaCards){
        booger.ClassList.add('pink');
        booger.ClassList.remove('turqoise');
        booger.ClassList.remove('purple');
    }
})

const turqoisebutton = documnet.getElementById('turqoise');
turqoiseButton.addEventListener('click', () => {
    for(let booger of sodaCards){
        booger.ClassList.add('turqoise');
        booger.ClassList.remove('pink');
        booger.ClassList.remove('purple');
    }
})
```

### Lab 06 Notes
* pick a list of things to sell
* data modeling, list of sodas.
# steps
* Step one make a branch each morning, merge at end of day in VS code
    * git checkout -b lab-06
* Start with JS
* add name, img, calores, price
* start with ID, name, image, price and other info can be added later. 
``` javascript
export const sodas = [
    {
       id: '1',
       name: 'Irn Bru', 
       img: 'https://s36737.pcdn.co/wp-content/uploads/2016/04/Hopsctch-board.jpg', 
       calories: 250,
       price: 2
    },
    {
       id: '2',
       name: 'Irn Bru', 
       img: 'https://s36737.pcdn.co/wp-content/uploads/2016/04/Hopsctch-board.jpg', 
       calories: 250,
       price: 2
    },
}];
```

* start setting up HTML
    * Build singel Dom
    * terminal, elements, right click class, copy outer HTML for TDD Test
# ACP
* add file render-product.js
``` javascript
// TESTING THIS
//  {
//        id: '1',
//        name: 'Irn Bru', 
//        img: 'https://s36737.pcdn.co/wp-content/uploads/2016/04/Hopsctch-board.jpg', 
//        calories: 250,
//        price: 2
//     }

export funciton renderProduct(productObject){
    //return some HTML
}
```
# example.test.js
``` javascript
// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProduct } from '.js';
import { products } from '.js';
const test = QUnit.test;

test('rednerProduct shoudl return HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = //string from copied element when setting up HTML
    const prd1 = productss[0];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(prd1).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
```
* begin work on render-product.js
render-product
``` javascript
import { renderProuct } from '.js.';
import { products} from '.js.';
const productList = document.getelementBNyId('product-list');
for (let product of products){
    const productCard = renderProduct(product);
    productList.append(productCard);
}
```
# another model
``` javascript
const fruits = [
    {
        id: '1',
        name: 'granny smith',
        color: 'green',
        expDate: Date.now(),
        type:'tree fruit',
        skin: true,
        season: 'fall',
        pits: false
        weight: '100g',
    },
    {
        id: '2',
        name: 'banana',
        color: 'yellow',
        expDate: Date.now(),
        type:'tree fruit',
        skin: true,
        season: 'summer',
        pits: false
        weight: '100g',
    },
]
```
``` javascript
const robots = [
    {
        name: 'spot',
        manufacutre: 'Boston Dynaics',
        type: 'dog'
    }, 
    {
        name: 'Roomba',
        manufacutre: 'iRobot',
        type: 'vacuum'
    },
]
```