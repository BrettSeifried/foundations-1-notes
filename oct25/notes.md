# Adventure Quest
* Notes on class gitHUb
## linking pages
* 3 quest pages
    * based on URl paramters
    * Very similiar pages, As easy to make 1 as it is 50 in data is consistant
    * VEry simliar just iddfernet names
        * TItle
        * Image
        * Quest description
        * Choices (radio)
### Quest Data
``` javascript
const mosnters = {
    id: //title in URL
    title: // Title of Quest
    map: {
        top: 'x%',
        left: 'Y%'
    }
    image: // image on quest
    Description: // story of quest
    Choices: [{ //nested array of choices. inclues radio buttons. 3 each
        id: action
        description: Descrition of action
        results: What happens after chosen.
        hp: X,
        gold: X
    }, {
        id
        description
        results
        hp: X,
        gold: X
    }, {
        id
        description
        results
        hp: X,
        gold: X
    }]
}
const quests = [ // all arrays inside one big array
    monaster,
    treasure,
    dragon
]
```

# URL Search paramters
* URLSearchParams on mdn.
* ?color=blue in URL to change color.
    * ?KEY=VALUE
        * Key = color
        * Value = blue
* Built in parameters
* creates a class, and CSS it is defined already.
* href with ?abc=xyz
    * Quest folder with index.html, and there is where it is changed.
``` javascript
console.log(window.location.search); 
const params = new URLSearchParams(window.location.search);

const color = params.get('color'); //grab from URL search parameter .get is class selector. // RIght side of ?abc=xyz
const id = params.get('id'); // right side of ?abc=xyz
console.log(color);
consolte.log(id);

const mySquare = document.getElementById('square'); // Find ID in HTML to change
mySquare.classList.add(color); // add class list to change class list on HTML
```

### Monster quest.
* adventure-quest/quest/?id=mosnter
* adventure-quest/quest?id=dragon

## Keeping track of which quests compelted, HP, and gold
* Info on notes page on class GitHub.

# WireFraming
* check Notebook

# Plan Time - DAY ONE
## HTML Elements
- [ ] Text input for user name
- [ ] Radio buttons for user Race
## Events
- [ ] On form submit
    - [ ] Generate a user object using the form data (generateUser)
    - [ ] Store user data in localStorage (setUser)
        * Always use for localStorage
    - [ ] Redirect to the map page

## Map Page
### HTML Elements
- [ ] List of links for each quest (genertaed fromt he quest-data)
    - [ ] Link should not be lcickable if the user has already compelted the quest
    - [ ]Link should contrian a URL search parameter containing the quest ID

### Events
- [ ] On page load -- a bunch of game logic that we're punting on (TBD)

## Quest Detail Page
### HTML elements
- [ ] Title
- [ ] Description
- [ ] Quest Image
- [ ] Quest Choices (radio buttons)

### Events
- [ ] On page load, get the quest ID from URL search parameters and load the quest data onto the page.
- [ ] On form submit 
    - [ ] update the user data
    - [ ] redirect to the map page