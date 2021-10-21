import { getResults } from './storage-utils';

// get pokeDex
Test('getResults form local storage', (expect) => {
    const results = [
        {id: 'apple', shown: 2, picked: 2 },
        {id: 'banana', shown: 2, picked: 1 },
        {id: 'lemon', shown: 2, picked: 1 }
    ];
    localStorage.setItem('RESULTS', JSON.stringifyt(results));

    const actual = getResults()

    expect.deepEqual(actual, results);
});

test('getResults returns an empty array if there is no RESULTS key in storage', (expect)=> {
    // Arrange
    // set up arguments
    //remove everything from local storage
    localStorage.removeItem('RESULTS');
    //act
    // call the funciton you're testing
    const actual = getResults();

    //expect
    // make assertions about that is expected vs the actual result
    
})

test('showFruit increments th e shown key when the itme exists in restuls', (expect)=>{
    //arrange
    const results = [
        {id: 'apple', shown: 2, picked: 2 },
    ];
    localStorage.setItem('RESULTS', JSON.stringifyt(results));
    const expected = [
        {id: 'apple', shown: 3, picked: 2 },
    ];
    //set up arguments and expectations
    showFruit('apple');
    const resutls = getResults();
    //make sure we have something in local storage
    expect.deepEqual(results, expected);
})

test('showFruit adds a new item if its not in results', (expect)=>{
    //arrange
    localStorage.removeItem('RESULTS');
    const expected = [
        {id: 'apple', shown: 1, picked: 0 },
    ];
    //set up arguments and expectations
    showFruit('apple');
    const actual = getResults();
    //make sure we have something in local storage
    expect.deepEqual(actual, expected);
})

test('pickFruit increments th e shown key when the itme exists in restuls', (expect)=>{
    //arrange
    const results = [
        {id: 'apple', shown: 2, picked: 2 },
    ];
    localStorage.setItem('RESULTS', JSON.stringify(results));
    const expected = [
        {id: 'apple', shown: 2, picked: 3 },
    ];
    //set up arguments and expectations
    pickFruit('apple'); // THIS CHANGEDN TO PICK FRUIT
    const actual = getResults();
    //make sure we have something in local storage
    expect.deepEqual(actual, expected);
})