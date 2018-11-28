import {firebase, googleAuthProvider} from './../firebase/firebase';


export const login = (uid) =>({
    type: 'LOGIN',
    uid
});
export const logout = () =>({
    type: 'LOGOUT'
});
export const startLogin = () => {
    return () =>{
        return firebase.auth().signInWithPopup(googleAuthProvider).then((result) =>{
            console.log('hello login');
        }).catch((error) =>{

        });
    };
};

export const startLogout=  () =>{
    return () =>{
        return firebase.auth().signOut().then(()=>{
            console.log('sign out complete');
        })
    };
};