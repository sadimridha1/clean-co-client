/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../ConfigFirebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const login = (email, password) => {
        setLoading(true)
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
        logout
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;