import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} exact /> */}
          <Route path="/" element={<Login />} exact />
          <Route path="/signup" element={<Signup />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
