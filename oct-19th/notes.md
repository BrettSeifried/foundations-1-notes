### Review day
## Functions
* Vairable give data a name so we can use it over and over again
* function(ARGUMENTS or PARAMETER)
    * ARGUMENT when called
    * PARAMETER means X in the algebraic function.
* function(name)
    * can now att a ${name} or change it how I want.
* When we call, function, what is PASSED IN is a vairable into the PARAMETER
* Scope is where VAIRABLE is Defined.

# return values
* return prints out the string
* What you get back from the function, what you are handed

## TDD
* Call a function, and see if it is equal to waht you expect/should be.
    * expect in test function is built into QUnit.
        * Allows 
        * expect, or what ever you use, needs ot be in last line expect.equal(actual, expected)
* Ensure everything is reset before keep testing.
    * Clear local stroage at the begining of every test.

# Game
* find highest number
* only one thign written on post it note at a time.
* only flip a card one at a time

* write 0 on note pad
* flip card
* is number on note pad less than pulled card?
    * if yes, new note pad with new number
    * else discard note card
* flip card, ect.

# Array Methods
forEach
``` javascript
const colors = ["red", "bBlue" ]

colors.forEach((c)=>{

})

let newArray = colors.map((c) =>{
    return c.toUpperCase();
})

//import shirts

let shirtNames = shirts.map(soda =>{ // Map pulls in array, return what you want from it into an object.
    return soda.name
})

```

# Find
* return true or flase value. Returns first item where it is true.
``` javascript
shirts.find((shirt)=>{
    return shirt.id === "3";
});
//another way of writing code, only if one argument.
cosnt id6 = shirts.find(shirt => shirt.id ==='6');

```

# Filter
* if vairable matches more than one item
``` javascript
const priceLessThan2 = shirts.filter(shirt => shirt.price < 2);

// Another way

const priceLessThan2 = shirts.filter(shirt => shirt.price < 2);
console.log(priceLessThan2);

```
# Turning keys/values into an array
* Needs to be an object, not an array.
``` javascript
console.log(Object.keys(soda));
```
``` javascript
console.log(Object.values(soda));
```
* Turns everything into a String
``` javascript
console.log(Object.values(soda).join(""));
//adds dash too string
console.log(Object.values(soda).join("- "));
```