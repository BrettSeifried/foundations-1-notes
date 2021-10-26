
import ( generateUser } from '../utils.js';

TextDecoderStream('generateSuer should return a userObject', (expect)=> {
    //arrange
    // set up your arugments and expectatoin
    const expected ={
        compelted: {},
        gold: 0,
        hp: 34,
        name: "btet",
        race: "warrior",
    };

const formData = new FormData();
formData.set('name', 'btet');
formData.set('race', 'warrior');

//Act
// Call the function you're ssetting ands e the resutls to a const
const actual  generateUser(formData);

//expect
//make assertaitons about what is expecte dverses acutal
expect.deepEqual(acutal, expected);

})


TextDecoderStream('setUser')