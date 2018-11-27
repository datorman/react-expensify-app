import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID
};
firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};














// //Child_removed
// database.ref('expenses').on('child_removed',(snapshot) =>{
//     console.log('Removed',snapshot.key, snapshot.val());
// });
// //Child_changed
// database.ref('expenses').on('child_changed',(snapshot) =>{
//     console.log('Changed',snapshot.key, snapshot.val());
// });
// //Child_added
// database.ref('expenses').on('child_added',(snapshot) =>{
//     console.log('Added',snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('value',(snapshot) =>{
//     const expenses = [];
//     snapshot.forEach( (childSnapshot)=> {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });
// database.ref('expenses').push({
//     description:'Rent',
//     note: 'My rent',
//     amount: 109500,
//     createdAt: 12345
// });
// database.ref('expenses').once('value').then((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach( (childSnapshot)=> {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });
// database.ref('notes/-LRMG3uiqLlXwq7ABnuj').remove();
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React, Angular Python'
// });
// const firebaseNotes = {
//     notes: {
//         asda:{
//             body:'note1',
//             title:'first'        
//         }
//     }
// };
// const notes = [
// {
//     id:'12',
//     body:'note1',
//     title:'first'
// },{
//     id:'25',
//     body:'note2',
//     title:'second'
// }];
// database.ref('notes').set(notes);
// const valueChange = database.ref().on('value',(snapshot) =>{
//     console.log(snapshot.val().name,'is a',snapshot.val().job.title,'at',snapshot.val().job.company);
// });
// const onValueChange = database.ref().on('value',(snapshot) =>{
//     console.log(snapshot.val());
// },(e) =>{
//     console.log('Error fetching data ',e);
// });

// setTimeout(()=>{
//     database.ref('age').set(27);
// },3500);

// setTimeout(()=>{
//     database.ref('age').set(28);
//     database.ref().off(onValueChange);
// },7000);

// setTimeout(()=>{
//     database.ref('age').set(29);
// },10500);
// database.ref('location/city').once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
// });
// database.ref().set({
//     name: 'Mike s',
//     age: 25,
//     stressLevel: 10,
//     job:{
//         title: 'soft dev',
//         company: 'google'
//     },
//     location: {
//         city: 'herp',
//         country:'canada'
//     },
//     isSingle: true
// }).then(()=>{
//     console.log('Saved');    
// }).catch((error)=>{
//     console.log('ERROR');
// });


// database.ref().update({
//     stressLevel:1,
//     'location/city':'Seattle'
// });

//database.ref().set('My Data');
// database.ref('age').set(27);
// database.ref('location/city').set('Toronto');

//attributes
// database.ref('attributes').set({
//     'weight': '85kg',
//     'height': '180cm',
// }).then(()=>{
//     console.log('Ran');

// }).catch((error) => {
//     console.log('Something went wrong', error);
// });

// database.ref().remove().then(()=>{
//     console.log('Removed');
// }).catch((error)=>{
//     console.log('Problem Removing',error);
// });