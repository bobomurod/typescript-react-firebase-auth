import React from 'react';
import './App.css';
import Form from './Components/Common/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        router
        <>
          <Routes>
            <Route path="/login" element={<Form title="login" />} />
            <Route path="/register" element={<Form title="register" />} />
          </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;
