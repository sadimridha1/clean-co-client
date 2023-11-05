import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Children, createContext, useEffect, useState } from "react";
import { auth } from "../ConfigFirebase/firebase.config";

const AuthContext = createContext()

const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        loading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        loading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const subsCribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
           setLoading(false)
        });

        return () => {
            return subsCribe()
        }
    }, [])


    const values = {
        user,
        loading,
        createUser,
        login,
    }

    return (
        <AuthContext.Provider value={values}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;