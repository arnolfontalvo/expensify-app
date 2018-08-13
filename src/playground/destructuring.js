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

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Hiliday',
  publisher: {
    name: undefined
  }
};

const { name: publisherName = 'Self-Publisher' } = book.publisher;

console.log(publisherName);