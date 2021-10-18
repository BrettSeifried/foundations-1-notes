### READMES
* front page for the work, get in habit of reading when opening and start writing in own README
* no problem console logging each step of the way to make sure it works.

### HTML Forms
* using form
``` html
<form id="animal">
    <label></label>
        <input type="" id="id" name="id">
        <select>
            <option value="dog">
        </select>
    </label>
    <button id ="submit">
</form>
```
* creates query selector in URL when submitting a form.
    * full page reload happens, we don't want that to happen.
    * goal is to go into, take the info and use it how we want. Julie said hijack it
 
 # Form structure
 * ID for to grab it
 * Label tag
    * when you click on Name outside input, it focuses in on the box to start typing
    * connects label with input child.
        * Helps with screen readers.
* Select
    * allows to create a drop down menu, good for categories
    * Options child of select, those are the options.
* Submit button:
    * **Any button in a form acts as a submit button.**

# Javascript it
* grab the form by the ID
* listening event
``` javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
});
```
* (e) stands for event
* e.preventDefault() stops the page from loading. We hijacking it now
* "new FormData(form)" passing data, can now pull each input seperatlely. Each value given something.
    * pulls individual form elemnt.
    * can console(log) or use each thing submitted
* name in HTML name="name" is where this is pulled from. 

# Creating somehting out of form Data
``` javascript
const newThing = {
    id: data.get('id'),
    name: data.get('name'),
    type: data.get('type'),
};
```
* take all info and turn into something like an object.

# Using it for Prodcut page
* use form to change local storage
* seeding a database, putting a ton of stuff into the database.
* Utils file
    * export function getProducts()
        * get the PRODUCTS form local storage
        * if NO products -- seed the data

# Putting PRODUCTS in local storage
``` javascript
import {shirts } from;

export function getProducts(){
    let lsShirts = localStorage.getItem(item.id shirts); // turn into a string
    const products = JSON.parse(lsShirts); // turn back into OBject
    if(!lsShirts){
        const shirtsString = JSON.stringify(shirts);
        localStorage.setItem('PRODUCTS', shirtsString);
    }
    return lsShirts || shirts;
}
```

# Replace Soda data
* apps.js, replace import sodas with getProducts
    * const sodas = getProducts()
* cart.js, remove import of sodas
    * const soda = getProducts();

## Why we do this
* 

## add admin page
* Admin fodler, index.html, add-products.js
    * HTML 5 and script
* add <a href="./admin">Admin on page link to all pages.

# Form time - to create a new soda to the shop
* add all things in Data. to HTML.
    * id, shirt, descrip, price, ect.
* styles.css and new admin.css

* utils.js
    * add product from LS
        * get prodcuts form LS (localstorage)
        * objectify them
        * add new object
        * stringify the new array
        * reset in LS
    * Full round trip, take old array, do above, send back as new array
    * summary
        * get, modify, set

# TDD
``` javascript
test('addProduct shoudl add a product ot he products array', (expect) =>{
    //arrange
    let products = getProducts();
    const newProduct = {
        id: '6', // one more than currently int.
        name: 'fancy swag',
        img: '.imgage link',
    }
    //act
    addProduct(newProduct);

    //assert
    const products = getProducts();
    expect.equal(products.length, 6); // new length after adding this product
})
```
* import to Utils.jss

``` javascript
export function addProduct(newShirt){
    //get
    let products = getProducts();

//modify
    products.push(newShirt);

//set
let productsString = JSON.stringify(products);
localStorage.setItem('PRODUCTS', productsString);

}
```

# add-products.js
* get form, create new object from th e formData, call addProduct using that new object, todays warmups.
``` javascript
const form = document.getElementById ('product-form');

form.addEventListener ('submit', (e) =>{
    e.preventDDefault();
    const data = new FormData(form); // make sure in event listener so it runs when button pushed
    const newShirt = {
        //bring over shirt object
        id: data.get('id'),
        //continue for all parts of object
        price: Number(data.get('price')),
    }
    addProduct(newShirt);
    alert("new Shirt added!");
})
```
* ensure script has a type of module