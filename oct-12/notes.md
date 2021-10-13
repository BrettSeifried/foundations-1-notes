### Making a shopping cart
* Multi-Page applications (ie. /cart)
    * create a folder, "cart" and put an index.html in that folder for it to work.
## Cart
* Product, prive, quantity, total, order total, clear cart, go home button.
    * today will just have static data, and not linked and working page

# Process 
* Create cart folder in main root, new filed index.html
    * line 1, html:5 to get page set up.
    * pull over style sheets into HTML. but add a second dot in front of path
        * can create a new CSS file just for the cart.
    * link to home page
        * <a href="../">Back</a> -- sends you back one level.
        * <a href="/">Back</a> -- will break GitHub pages, but sends you to the initial html.index or html in root director.
            * abosolute patch, takes you back to root page.

* Create link on home page to cartt
    * <a href="./cart">GO to cart</a>

# looks of cart
* for this proejct, do HTML Tables
    * Table rows<tr>, table headers<th>, table data<td>, table body<tbody>, Table footer <tfoot>
* Elements of a table <table>
    * <thead> header
        * <th>
    * <tbody> items added, give ID
        * <tr>
            * <td>
    * <tfoot> order total
        * <td> empty
        * <td> empty
        * <td> Order Total:
        * <td> sum
* border-collapse: collapse; in CSS will remove gaps in the table.
* ACP after cart page structure is made

# What we need in cart data
* Product name, price, quantity, total, order total
    * all of that is in the shirt.js,
    * all we need ot tracking is order total
``` javascript
const cart = [
    {
        id: '1',
        quantity: 2,
    },
    {
        id: '4',
        quantity: 5
    },
];
```
* Utils const findById = function (id) -- to find
``` javascript
const findById = function (id)
```
# TDD 
* folder named data. move shirt.js and cart-data.js into it, update imports in apps.js
    * When making big files moves, ACP once working.

cart-data.js
```javascript
export const cart = [
    {id: '1', quantity: 6},
    {id: '4', quantity: 5},
]
```
* Make seperate FindById.test.js
* copy over TDD test Qunit

utils.js
* generic funtion for any items
``` javascript
export function findById(id, items){
    for(let item of items){
        if(item.id === id){
            return item
        }
    }
}
```

findById.test.js
``` javascript
import Sodas
import renderSodas
const text = Qunit.text;
```

example.test.js
* deep equal will check something from an array, IE, everything from found ID.
* import findById function.

# cart.js
* add cart.js
* link cart.js in <script> in cart/index.html
* loads when page loads
``` javascript
import { shirts } from '../data/shirts.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';

// cartItem{id: '1', qty: 6}
const tbody = document.getElementById('table-body);
for (let cartItem of cart){
    const shirtData = findById(cartItem.id, shirts);

    const tr = document.createElemet('tr');
    const tdName = document.createElemenmt('td');
    tdName.textContent = shirtData.name;
    const tdPrice = document.createElemenmt('td');
    tdPrice.textContent = shirtData.price;
    const tdQty = document.createElemenmt('td');
    tdQty.textContent = cartItem.qty;
    const tdTotal = document.createElemenmt('td');
    tdTotal.textContent = carItem.qty * shirtData.price;

tr.append(tdName, tdPrice, tdQty, tdTotal);
tbody.appendChild()tr;
}
```