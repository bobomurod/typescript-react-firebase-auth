import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Components/Common/Form';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Router>
      <div className="App">
        router
        <Routes>
          <Route
            path="/login"
            element={(
              <Form
                title="login"
              />
            )}
          />
          <Route
            path="/register"
            element={(
              <Form
                title="register"
              />
            )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
