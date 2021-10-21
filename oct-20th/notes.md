# Yesterday challeneges
* used as gate keeper jobs
* codeWars and leetcode.
    * leetcode is a little bit past us.

## Follow up on yesterdays mapping problems
* figure out how to do it in the console int her terminal,
    * directly translate that to function.
        * Can use 2 functions, but both have to return.
* Using a spread, can be used in any object.
    * Used for copy of an object
    * ... puts them all on the same level, without it they are on different levels.
    * use for foundations 2.

* Map for creating a new array
* Objects - doing something to each item in the array

# Pokemon Catcher
* 1st part due friday
* 2nd part due Monday
- [ ] check box
- [x] check box

## Lecture
* picker
* results page on how many times it was picked and preferred
    * encountered (shown) & captured (clicked on)

* two pages
    * home page
        * 2 random pieces of fruit (Cards?)
        * button to pick which one we prefer
        * Use radio buttons - like Rock paper scissors 
    * results page
        * list all options - for each item:
            * times shown
            * times preferred
        * display state/looping through
        * eventually add a chart (day 2)
### HTML Elements
* Main page
    * Radio buttons
    * pick button
        * will have an event listener
    * header or something.
* State - Results page
    * Total Plays
    * what has been picked
    * what has been shown.
* User Events
    * Page Load - happen when we load, and when button is clicked. a Function, so its not repeated
        * generate 2 random fruit
        * update shown
        * render fruit on page
    * Button Click
        * update picked
        * Increment total plays
        * Generate new fruit & render
## DATA
* Total plays is a number (integer)
    * Use ID for objects (similar to the cart)
``` javascript
// we need to make, similar to the cart.
results [{
id: apple,
shown: 2,
preferred: 1,
}]

// below will feed into the above
// Data file - like products ie. fruits.js
// provided
fruits [
const apple = {
    id: 'apple'
    img: 'apple.png'
},
]
```
### functions storage-utils.js
* look to e-commerce that interacted iwth local storage
    * findById
    * getProducts => getResults
        * gets data from local storage
    * showFruit(id) - encounter pokemon
        * increment the shown
    * pickFruit(id) - capture pokemon
        * increment picked fruit

---------------------------------------------

# Planning time

## HTML elements
* make hgome page with
    * two images as radio buttons
    * button with and id of select-fruit
* make an empty results page (as a holder)
    * index.html
    * results.js
* storage-utils.js -- hold our localStorage functions
* fruits.js (pokemon.js) -- holds the data

## Local Storage functions - like the ecommerce products

* What is stored in local storage
``` javascript
const results = [
    {id: 'apple', shown: 2, picked: 2 }
    {id: 'banana', shown: 2, picked: 1 }
    {id: 'lemon', shown: 2, picked: 1 }
]
```
# functions & TDD
* getResults -- return the results array or empty array
* showFruit -- increment the shown key for a fruit
* pickFruit -- increment the picked key for a fruit

## app.js logic
* make function called generateFruit() - know we will sue mutliple times, want to isolate into own function
    * generate 2 rnadom fruit 
    * While loop incase 2 numbers repeat
    * call showFruit for each
    * render the fruit on the page

### ON PAGE LOAD
* set toalPlays to 0
* call generateFruit 
### ON BUTTON CLICK
* increment totalPlays
* call pickFruit with chosen fruit
* logic gate
    * if totalPlays >= 10
        * redirect to results
    * else
        * call generateFruit

## Results Page
# HTML
* for each item in results
    * Image
    * Header witht he name of the fruit
    * show many times shown, how many times picked.

# Results.js
* get the data from local storage
* loop throuhg each item in results
* get its data from fruits.js (using findById)
* render the results (img, header, data)

## Notes on her work
# results.js
* link it to results page
* 