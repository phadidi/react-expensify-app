import * as firebase from 'firebase';
import moment from 'moment';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(`Removed Expense ID${snapshot.key}: ${snapshot.val()}`);
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(`Modified Expense ID${snapshot.key}: ${snapshot.val()}`);
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(`Added Expense ID${snapshot.key}: ${snapshot.val()}`);
// });

// database
//   .ref('notes')
//   .push({ title: 'dummy note', body: 'example firebase entry' });

// database.ref('expenses').push(
// { description: 'PS5', amount: 50000, createdAt: moment(1) },
// {
//   description: 'PS3 Repairs',
//   amount: 27050,
//   note: 'cleaned out stray plastic bits, refreshed aging HDD',
//   createdAt: moment(2).subtract(1, 'days').valueOf(),
// },
// {
//   description: 'PS2 Repairs',
//   amount: 20025,
//   note: 'removed dust from fan, covered all open ports',
//   createdAt: moment(2),
// }
// );

// const firebaseNotes = {
//   notes: {
//     ase761: { title: 'dummy', body: 'example note' },
//     ab12: { title: 'wrap-up', body: 'finish the task' },
//   },
// };

// const notes = [
//   { id: '1', title: 'dummy', body: 'example note' },
//   { id: '12', title: 'wrap-up', body: 'finish the task' },
// ];

// database.ref('notes').set(notes);
// database.ref('notes/12').update({ body: 'it is finished' });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job} in ${val.location.state}`);
// });

// database
//   .ref('location/county')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log('Snapshot:', val);
//   })
//   .catch((error) => {
//     console.log('FETCH ERROR:', error);
//   });

// database.ref().on('value', (snapshot) => {
//   console.log('Snapshot:', snapshot.val());
// });

// const onValueChange = database.ref().on(
//   'value',
//   (snapshot) => {},
//   (error) => {
//     console.log('onValueChange ERROR:', error);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(27);
// }, 2500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 5000);

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 6000);

// database
//   .ref()
//   .set({
//     name: 'Parsa Hadidi',
//     age: 26,
//     isGamer: true,
//     location: {
//       state: 'California',
//       county: 'Orange',
//     },
//   })
//   .then(() => {
//     console.log('Confirm set entry operation');
//   })
//   .catch((error) => {
//     console.log('ENTRY ERROR:', error);
//   });

// database.ref.set('data goes here');
// database.ref('age').set(27);
// database.ref('location/county').set('Undisclosed');
// database.ref('attributes/height').set('5\' 11"');
// database.ref('attributes/weight').set('163 lbs');

// database
//   .ref('attributes')
//   .set({
//     height: 71,
//     weight: 163,
//   })
//   .then(() => {
//     console.log('Confirm set attributes operation');
//   })
//   .catch((error) => {
//     console.log('ATTRIBUTES ERROR:', error);
//   });

// firebase.database.ref().update({
//   name: 'Mike',
//   age: 40,
//   isGamer: null,
//   job: 'programmer',
//   'location/state': 'Pennsylvania',
//   'location/county': 'Unknown',
// });

// database
//   .ref('isGamer')
//   .set(null)
//   .then(() => {
//     console.log('Confirm attribute removal operation');
//   })
//   .catch((error) => {
//     console.log('REMOVE ERROR:', error);
//   });

// database
//   .ref('isGamer')
//   .remove()
//   .then(() => {
//     console.log('Confirm attribute removal operation');
//   })
//   .catch((error) => {
//     console.log('REMOVE ERROR:', error);
//   });
