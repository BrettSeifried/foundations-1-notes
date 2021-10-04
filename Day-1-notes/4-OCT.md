Notes for day one

### Website, vs Web App
## Views and States
* Button, span, ect is View
* Times it is pushed (counter) is the state

```
let counterSPan = document.getElementById('counter');
let button = document.getElementById('button');
// intiazlie global state
let counter = 0;
counterSPan.textConttent = counter;

// Listen for events.
button.addEventListener('click', () =>{
    // user interaction updates the state
    counter = counter + 1;
    // satte changes the view
    counterSPan.textContent = counter;
})
```

* const