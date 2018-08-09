import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').once('value').then((snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// // setTimeout(()=>{
// //   database.ref('expenses/-LJIn0XsIDeg0YyHAS6u').update({
// //       description: 'Fuck off',
// //       amount: 452344623632
// //   });
// // }, 10000);

// // const expenses = [{
// //   description: 'Rent',
// //   amount: 1000,
// //   createdAt: 0
// // },{
// //   description: 'Coffee',
// //   amount: 2000,
// //   createdAt: 25000
// // },{
// //   description: 'Bills',
// //   amount: 5000,
// //   createdAt: -25000
// // }];

// // for(let i = 0; i < expenses.length; i++) {
// //   database.ref('expenses').push({...expenses[i]});
// // }








// // database.ref('notes/-LJIiix1zsZp3rOIbbQC').remove();

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python'
// // });

// // database.ref().on('value', (snapshot) => {
// //   const person = snapshot.val();
// //   console.log(`${person.name} is a ${person.job.title} at ${person.job.company}`);
// // });

// // setTimeout(() => {
// //   database.ref().update({
// //     name: 'Aleksey',
// //     'job/title': 'Web designer',
// //     'job/company': 'Google'
// //   });
// // }, 3000);

// // database.ref('location')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({
// //   name: 'Alex Monchik',
// //   age: 20,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Chernivtsy',
// //     country: 'Ukraine'
// //   }
// // }).then(() => {
// //   console.log('Data is saved!');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed!');
// //   })
// //   .catch((e) => {
// //     console.log('Data wan\'t removed!', e);
// //   });