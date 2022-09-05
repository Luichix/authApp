import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          {!user && (
            <>
              <Route path="/login" element={<Login />} exact />
              <Route path="/signup" element={<Signup />} exact />
            </>
          )}
          <Route path="*" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
