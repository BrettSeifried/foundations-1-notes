export function generateUser(formData){
    //take in formData object
    //  return 
    // {
    //     completed: {

    return {
    completed:{}
    gold: 0,
    hp: 35,
    name: formData.get('name'), //coems from formData
    race: formData.get('race'), //comes from fromData
    }
}
