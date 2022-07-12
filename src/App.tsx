/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useNavigate,
} from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { config } from './config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import Form from './Components/Common/Form';
import Home from './Components/Home';
import './App.css';

initializeApp(config.firebaseConfig);

function App() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const navigate = useNavigate();
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 'sign-up') {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          console.log(response);
        // navigate('/home')
        // sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        });
    }
    if (id === 'sign-in') {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          console.log(response);
        // navigate('/home')
        // sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
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
          path="/home"
          element={<Home />}
        />
      </Routes>
    </div>

  );
}

export default App;
