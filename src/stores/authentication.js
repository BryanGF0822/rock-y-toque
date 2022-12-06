import { defineStore } from "pinia";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        auth: auth,
    }),
    getters: () => ({
        getAuth(){}
    }),
    actions: {
        signIn(email, password){
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    //Singed in
                    const user = userCredential.user;
                    console.log('usuario logeado', user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                })
        },
        newUser(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('usuario creado', user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                }
            );
        },
        signOut(){
            signOut(auth).then(() => {
              console.log('Usuario fuera');
            }).catch((error) => {
              alert(error);
            })
        },
    },
});