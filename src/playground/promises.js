const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'Parsa', age: 26 });
  }, 1500);
});

console.log('before');

promise
  .then((data) => {
    console.log(data);
    return 'dummy data';
  })
  .then((output) => {
    console.log('Follow-up:', output);
  })
  .catch((error) => {
    console.log(error);
  });

console.log('after');
