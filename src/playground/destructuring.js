// const add = ({ a, b}, c) => {
//   return a + b +c;
// }

// console.log(add({ a: 1, b: 12 }, 100));


// const person = {
//   name: 'Arnol',
//   age: 37,
//   location: {
//     city: 'Barranquilla',
//     temp: 35
//   }
// }

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (person.location.temp && person.location.city) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Hiliday',
//   publisher: {
//     name: undefined
//   }
// };

// const { name: publisherName = 'Self-Publisher' } = book.publisher;

// console.log(publisherName);


//Array destructuring

// const address = ['Calle 53#52-68', 'Barranquilla', 'Atlantico', '0180010']

// const [, city, state] = address

// console.log(`You are in ${city} ${state}.`)

const item = ['Cofee (iced)','$3.00','$3.50','$3.75'];
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);