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
- [ ] Form Submit button
## Events
- [ ] On form submit
    - [x] Generate a user object using the form data (generateUser)
        - [x] write TDD
        - [x] Write function - utils.js

        * User Object in lab notes.
    - [ ] Store user data in localStorage (setUser)
        * Always use for localStorage
        * Not as complex as e-commerce. More like pokeDex LS.
    - [ ] Redirect to the map page

## Map Page
### HTML Elements
- [ ] List of links for each quest (genertaed fromt he quest-data)
    - [ ] Link should not be clickable if the user has already compelted the quest
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
 
# Julies order
* Create Map Folder & Quest Folder
    * add index.html and JS to each folder
    * Set up HTML with
        * Html 5
        * script to that folders JS
    * console.log('hello') each page to test JS is working.
* utils.js utils-tests.js
* set up gnereateUSer
    * utils.js
        * write function in utils,
        * set up TDD
        * genrateUSer in utils.js
        * formData.get('X')

* setUser
    * set up test for setUSer
        * dont forget to remoItem('USER') at start of test.
        * dont forget to parse
    * utils.js
        * stringfy userObject
        * 
* apps.js
    * call user-form from HTml
    * event listener

### Map page
* Crate quests before this step.
#### Steps
* import the quest data
* get the map=links element form Html
* loop through each quest
* generate an <a> for ewach quest with hred = "/quest?id=<questID>"
    * <a href="./quest?id=dragon">Dragons</a>
    * <a href="./quest?id=muppets">Muppets</a>
    * <a href="./quest?id=trolls">Trolls</a>
* append the link to the map-links element
#### Julie's work
* Generate a link for each quest listed in quest-data.js
    * Create location on HTML in Maps html page
        * section id map-links

#### Remove completed quests as link and just text -- Day2

### Get quest page to work -- Pull info from quest into questData
* quest index.html
* set up the idnex.html as a sample  of what it will look like but with genreric info.
#### quests.js
* import quests
* set params const, and log it to test.
* Create findbyId in utils.js
* update quests.js will all the elements from what you set up in the quest index.html
#### Choices
* For reach choice make a radio button.
    * same name.
    * Turn into a for loop -- questChoices const in julie's note.
        * <label>
            {questData.choices[0].description}
            <input type="radio" name="choices" value={questData.choices[0].id} />