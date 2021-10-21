import { fruits } from '..'
import { getResults, findById } from '..'

const results = getResults();
//Give section and ID
const main= document.getElementById('main')
for (let item of results){
    const fruit = findById(fruits, item.id);
    console.log(item);
    console.log(fruit);
    const div = document.createElement('div');
    // relative path. pokemon should be good to hook `../${fruit.image}`
    const img = document.createElement('img');
    img.src = fruit.image
    const header = document.createElement('h2');
    header.textContetn = fruit.name
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `shown: ${item.shown}`;
    const resultsSpan2 = document.createElement('span2');
    resultsSpan2.textContent = `picked ${item.picked}`;

    div.append(header, img, resultsSpan1, resultsSpan2)
    main.append(div);
}