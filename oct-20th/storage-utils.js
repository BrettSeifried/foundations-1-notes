export function getResults() {
    // Goal is to make sure we have an empty array if nothing. Null would return and fail(?)
    const resultsString =localStorage.getItem('RESULTS') || '[]';
                               // null      ||      '[]'
                               // '[]'
    const results = JSON.parse(resultsString);
    return results;
}

export function showFruit(id) {
    // GET - resutls form localStorage
    let results = getResults(); // array of reults
    let item = findById(results, id);
    // MODIFY -- results
    // get the results formn localStorage
    //if the id exists in the results in localStorage.
    if(item){
        //  increment the shown attribute
        item.shown++;
        //else
    } else {
        //   create a new object and push it onto the results array
        //{ id: 'apple', shown: 1, picked: 0 }
        const newItem = { id: id, shown: 1, picked: 0 };
        results.push(newItem);
    }
    // set the new results to the localStorage
    // SET -- results back to localStorage
    localStorage.setItem('RESULTS', JSON.stringify(results));
}

export function pickFruit(id){
    // GET
    let results = getResults();
    let item = findById(results, id);
    //MODIFY
    item.picked++;
    //SET
    localStorage.setItem('RESULTS', JSON.stringify(results));
}