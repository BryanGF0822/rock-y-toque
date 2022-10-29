import { defineStore } from "pinia";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const useInstrumentStore = defineStore("instruments", {
    state: () => ({

    }),
    actions: {
        singIn(email, password){
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
                })
        }
    },
});