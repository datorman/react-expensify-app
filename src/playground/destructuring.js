
// const person = {
//     age: 24,
//     location:{
//         city: 'Toronto',
       
//     }
// };

// const {name = 'Anon',age} = person;
// console.log(`${name} is ${age}.`);

// const {city, temp:temperature = 20} = person.location;
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// Array Destructor

const address = ['123 Street Name', 'City','State','12345'];
const [,city,state = 'undefined'] = address;
console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product,pSmall,pMedium,pLarge] = item;
console.log(`A medium ${product} costs ${pMedium}`);