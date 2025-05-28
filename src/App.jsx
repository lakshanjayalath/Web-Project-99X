import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router> */}
      <Dashboard />
    </>
  );
}

export default App;