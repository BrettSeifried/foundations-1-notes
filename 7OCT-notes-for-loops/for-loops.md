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
let soda = [
    {name: 'Irn Bru', img: 'https://s36737.pcdn.co/wp-content/uploads/2016/04/Hopsctch-board.jpg',
    {name: 'Inca Cola', img: 'https://www.liquor.com/thmb/r2gcipnku_IfX0EcBD7A-Z1CV_A=/735x0/scotch_main_720x720-1b3bc33c5cce48049771463b381a82f0.jpg',
    'Cactus Cooler',
    'verners',
    'Faygo',
]

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
// copy image, name on panels
// <div class="soda-card">
//      <h2> Irn Bru </h2>
//      <div img src="./asets/img" alt="something">
// </div>
const sodaList = document.getElementById('soda-list');

for(let soda of sodas) {
    // div above
    cosnt sodaCard = document.creatElement('div');
    sodaCard.classList.add('soda-card');

    // h2 above
    const sodaHeader = document.getElementById('h2');
    sodaHeader.textContent = soda.name;

    // img above
    const img = document.createElement('img');
    img.src = soda.img;

    // append calls multiple things
    // puts h2 and img into div
    sodaCard.appen(sodaHeader, img);
    // copies above img and h2 into own divs
    sodaList.appendChild(sodaCard);
    
}
```