import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User,
} from "firebase/auth";

import { ReactNode, createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


interface AuthContextType {
  user: User | null;
  loading: boolean;
  handleSignUp: (email: string, password: string) => Promise<object>;
  handleSignIn: (email: string, password: string) => Promise<object>;
  handleSignOut: () => Promise<void>;
  handleGoogleSignIn: () => Promise<object>;
}
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignUp = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const handleSignOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const contextValues = {
    loading,
    handleSignUp,
    handleSignIn,
    handleSignOut,
    handleGoogleSignIn,
    user,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
