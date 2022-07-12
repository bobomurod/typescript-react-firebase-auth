import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential,
} from 'firebase/auth';
import { config } from './config';
import Form from './Components/Common/Form';
import Home from './Pages/Home';
import './App.css';
import Unverified from './Pages/Unverified';

initializeApp(config.firebaseConfig);

function App() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = sessionStorage.getItem('AuthToken');
    console.log(authToken);
    if (authToken) {
      navigate('/');
    }
  }, []);
  const handleAction = async (id) => {
    const authentication = getAuth();
    if (id === 'sign-up') {
      await createUserWithEmailAndPassword(authentication, email, password)
        .then(async (response) => {
          console.log(response);
          navigate('/unverified');
          const authToken = await response.user.getIdToken();
          sessionStorage.setItem('authToken', authToken);
          sessionStorage.setItem('refreshToken', response.user.refreshToken);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (id === 'sign-in') {
      await signInWithEmailAndPassword(authentication, email, password)
        .then(async (response: UserCredential) => {
          console.log(response);
          const jwt = await response.user.getIdToken();
          sessionStorage.setItem('authToken', jwt);
          if (response.user.emailVerified) {
            navigate('/');
          } else {
            navigate('/unverified');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (

    <div className="App">
      router
      <Routes>
        <Route
          path="/login"
          element={(
            <Form
              title="login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction('sign-in')}
            />
            )}
        />
        <Route
          path="/register"
          element={(
            <Form
              title="register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction('sign-up')}
            />
            )}
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/unverified"
          element={<Unverified />}
        />
      </Routes>
    </div>

  );
}

export default App;
