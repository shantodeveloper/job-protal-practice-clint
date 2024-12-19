import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      result => {
        return updateProfile(result.user, {
          displayName: name,
        }).then(() => {
          setUser({
            ...result.user,
            displayName: name,
          });
        });
      }
    );
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);

      console.log('current User', currentUser?.email);

      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post('http://localhost:5000/jwt', user, { withCredentials: true })
          .then(res => {
            console.log('login true', res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            'http://localhost:5000/logout',
            {},
            {
              withCredentials: true,
            }
          )
          .then(res => {
            console.log('logout true', res.data);
            setLoading(false);
          });
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
