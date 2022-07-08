import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Components/Common/Form';
import './App.css';

function App() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleAction = (r) => {
    console.log(email, password, r);
  };
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
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
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
                handleAction={() => handleAction(2)}
              />
            )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
