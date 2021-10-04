let counterSPan = document.getElementById('counter');
let button = document.getElementById('button');
// intiazlie global state
let counter = 0;
counterSPan.textConttent = counter;

// Listen for events.
// Everytime button is click, the entire function is run.
button.addEventListener('click', () =>{
    // user interaction updates the state
    counter = counter + 1;
    // satte changes the view
    counterSPan.textContent = counter;
})

// benny is the method?
const benny = {
    name: 'Benny',
    age: 6,
    sayHi: ()=>{
        console.log('woof!')
    }
}
benny.sayHi();