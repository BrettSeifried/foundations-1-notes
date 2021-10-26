# Day 2 Notes
- [ ] Add character, HP, Gold on pages (loadProfile)
    * demo branch has the function on how.
* ? in URL says ignore everything after this, this is search parmaeters
    * Key = Value
        * id = quest title
* Julies under quest.js
### rendering Quest Page
* 

## Todays goals
- [ ] Creat findById in utils.js
- [ ] Check julies quest.js for guide on URLsearchParams
- [ ] Create button for choosing in quest.js
    - [ ] event lisenter on quest page for submit.
        * get selected chocie from chocies array (findById)
        * get user data form localStorage
            - [ ] write (getUser)
        * Update the user (scoreQuest(choice, questId,user))
            * Update the gold, hp, completed
        * reset to localStorage (setUser)
        * display resul0t
        * give thema  link to go back to the map.

### New Functions
#### getUser
* use setUser in TDD
#### scoreQuest
* choiceObject, questId, userObject
* userObject is character stuff,
* choiceObject is id descrip and results, hp, gold
* questID is the title of the quest
* three test paramters
- [ ] finish event listenern on quest.js

### Doing quest page
* need CSS page to hide
    * Div id results to hide choices and description
        * div in HTML on quest index.html (quest-details)
    * hidden class on css page.
        * put in results id on HTML
* create a span for results

### Removing link when already completed - maps.js(?)
- [ ] on page load
    - [ ] if user has compelted all quests -- redirec to end results
    - [ ] if user has negative hp -- redirect to end results
- [ ] displayLink - shows link
    * changes above funtion into a sub function
- [ ] displaySpan - shows span (same text as link, but not a link)
* if displaLink, else displaySpan

## Game Logic - hp = 0 
* create an endGame folder.
    * index.html
    * gameover.js
* maps.js
    *if hp <= 0 go to endGame Screen

### Redirect after all quests completed
* hasCompeltedAllQuests(quserObject) - utils.js
    * create a TDD

### Create player info
* loadProfile for character, hp and gold