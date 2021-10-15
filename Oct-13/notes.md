### connecitng cart ot store page
## local storage
* Goal is to turn into cart array into a string
* Going to be using JSON in foundations 2 for API
    * Translate complex data across systems
* values can only be strings in local storage
    * setItem, getITem
        * localStorage.setItem('HELLO', 'world')
        * localStorage.getItem('HELLO')
            * returns 'world'
* JSON.stringify(cart)
    * will turn all the data into a string.
    * JSON.parse(cartString) will return into JS.
# How-to
* JSON.stringify(cart)
* const stringyCart = JSON.stringify(cart)
* typeof stringyCart -- to confirm it is a cart.
* JSON.parse(stringyCart) back into an object(?)

## using it with cart
* the process
    * Add button => addItem
        * Check if item exists
        * need Product ID
        * Increment the qty
        * save it in local storage
* When going to the cart page
    * get data => getCart
        * get JSON string from local storage
        * parse into JS
        * return it.
* Add button to submit order
    * clear out the cart => clearCart
        * just remove the item.

## getCart
* get cart from local storage
* parse it from JSON to javascript
* what if cart doesn't exist yet? (aka. edge case) => return an empty array
* build test
    * have a removeItem to always clear out localStorage
* then utils.js to make it pass

``` javascript
// for Test
export function getCart(){
    // get from local storage
                        // null              falsy  or truthy
    const cartString = localStorage.getItem('CART') || '[]';
    // parse it
    const cart = JSON.parse(cartString);
    //return it
    return cart;
}
```

## addItem
call getCart()
* need to know ('id')
    * id has {id: 1, qty: 1}
* for now will always increment by 1
* will need findByID to see if there is an exisiting item in cart, and if so, increment by 1.
*  if cartItem found, incremebt qty by 1
    * else creat ea new cartItem with id and qty = 1
* stringify the cart back to JSON
* set the cart to localStorage

# test
* increment test
    * should show adding one item
    * build test first
        * test to see if one goes up
    * then go to utils.js
        * function addItem
            * getCart
            * findById
        * if & else
* add item if not already there test
    * Remove item from cart to clear out cart
    * add item by ID
    * test to see if it is there


utils.js
``` javascript

```

## clearCart
localStorage.removeItrm('CART')
``` javascript

```

## TDD tests
* Deep equal to see if keys and items both match.
``` javascript
// arrange
test('getCart shoudl return the cart if it exists', (expect) => {
    const fakeCart = [
        { id: '1', qty: 3},
        { id: '3', qty: 2},
    ];
    localStorage.setItem('CAR', JSON.stringify(fakeCart));
    // act
    localStorage.removeItem('CART');
    const cart = getCart();
    // assert
    expect.deepEqual(cart, fakeCart); 
})

test('getCart should return an empty array if the car does not exist', () =>{
    // arrange
    // noting to arrange bc nothiong in localStorage

    //act
    const cart = getCart();

    //asset
    expect.deepEqual(cart,[]);
})
```

* additem

``` javascript

test('addItem shoudl increment the quantity if item inc art',) ()=>{
    const fakeCart = [
        { id: '1', qty: 3},
        { id: '3', qty: 2}
    ];
localStorage.setItem('Cart', JSON.stringify(fakeCart));
}
```

## Linking it all together - after all tests are passing
* adding a button to each item
    * using funciton addItem
* delete cart-data
    * getCart const replaces cart import

# adding a button
* onClick -- call addItem
* put in renderSoda function
    * new addButton const
    * shirt.id
    * classList.add('add-button');
* apps.js
    * loop through all add buttons
        * querySelectorAll('.add-button')
    * add evenet listner to each
        * for (let)
        * addItem(addBtn.id)
    * on click, call addItem witht he button's id
        * alert optional, shows a pop up once added
* index.html button = place order
    * cart JS, get elementById for order button
    * event listener, ends in window.location.replace
* placing the order
    * remove local storage and redirect back to home page




