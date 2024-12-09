import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendEmailVerification, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

import toast from "react-hot-toast";
import store from "./redux/store";
import { login as loginHandle, logout as logOutHandle } from "./redux/userSlice";
import { openModal } from "./redux/modal";
import { getFirestore, collection, addDoc } from "firebase/firestore";





const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)



export const register = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        toast.success("Hesap oluşturuldu.")
        return user
    } catch (error) {
        toast.error(error.message)

    }


}
export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        toast.success("giriş yapıldı")
        return user
    } catch (error) {
        toast.error(error.message)

    }
}
export const reAuth = async password => {
    try {
        const credential = await EmailAuthProvider.credential(
            auth.currentUser.email,
            password
        )
        const { user } = await reauthenticateWithCredential(auth.currentUser, credential)

        return user
    } catch (error) {
        toast.error(error.message)

    }
}




export const logout = async () => {
    try {
        await signOut(auth)
        toast.success("çıkış yapıldı")
        return true

    } catch (error) {
        toast.error(error.message)

    }


}

export const update = async (data) => {
    try {
        await updateProfile(auth.currentUser, data)
        toast.success("Profil güncellendi")
        return true


    } catch (error) {
        toast.error(error.message)


    }

}

export const resetPassword = async (password) => {
    try {
        await updatePassword(auth.currentUser, password)
        toast.success("Parolanız güncellendi")
        return true


    } catch (error) {
        if (error.message === "auth/requires-recent-login") {
            store.dispatch(openModal({
                name: "re-auth-modal"
            }))
        }
        toast.error(error.message)


    }

}
export const emailVerification = async () => {
    try {
        await sendEmailVerification(auth.currentUser)
        toast.success(`Doğrulama maili ${auth.currentUser.email} adresine gönerildi lütfen mailinizi kontrol edin
        `)

    } catch (error) {
        toast.error(error.message)

    }
}



onAuthStateChanged(auth, (user) => {
    if (user) {
        store.dispatch(loginHandle({
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
            uid: user.uid


        }))
    } else {
        store.dispatch(logOutHandle())

    }
})




export const addTodo = async (data) => {
    const result = await addDoc(collection(db, "todos"), data)
    console.log(result)
}

export default app;