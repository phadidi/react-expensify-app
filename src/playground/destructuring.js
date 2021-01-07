// const person = {
//   name: 'Parsa',
//   age: 26,
//   location: {
//     region: 'SoCal',
//     temperature: 72,
//   },
// };

// const { name = 'anon', age } = person;
// console.log(`${name} is ${age} years old.`);

// const { region, temperature } = person.location;
// if (region && temperature) {
//   console.log(
//     `It's ${person.location.temperature} in ${person.location.region}.`
//   );
// }

// const book = {
//   title: 'The Informant',
//   author: 'Kurt Eichenwald',
//   publisher: {
//     name: 'Broadway Books',
//     location: 'New York',
//   },
// };
// const { title, author } = book;
// console.log(
//   `${author} wrote ${title} and then he spent the rest of his life turning himself into the main character`
// );

// const { name: publisherName = 'REDACTED', location: publisherLocation = 'unknown' } = book.publisher;
// if (name && location) {
//   console.log(`The book was published by ${publisherName} in ${publisherLocation}`);
// }

const address = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pennsylvania',
  '19147',
];
const [, city, state = 'New York'] = address;
console.log(`You are currently in ${city}, ${state}.`);

const item = ['coffee (served hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , , largePrice = '$2.65'] = address;
console.log(
  `A large cup of ${itemName} is currently being discounted at a price of ${largePrice}`
);
