# Day 3 of adventure game notes
- [ ] Write story
- [ ] place a links on map
- [ ] end game screen
    - [ ] health and all of that jazz.
- [ ] get hp and that on each page
- [ ] show results of engagement

### Profile on Quest page
* Copy map info to quest page.

### Placing links somewhere on the map
* mpas css. using [rellatively] absolute positioning
* 90vw is 90% of viewwidth
    * add map links on displayLink & displaySpan in maps.js
        * classList.add ('quest')
        * stile.top = quest.map.top;
        * stile.left = quest.map.left;