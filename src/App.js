import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Tasks from './Pages/Tasks';
import Clients from './Pages/Clients';
import Vaults from './Pages/Vaults';
import Reminder from './Pages/Reminder';
import MyAccount from './Pages/MyAccount';
import Members from './Pages/Teams/Members'; // Importing the Members component
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Navbar />
          <div className="main-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/vaults" element={<Vaults />} />
              <Route path="/reminder" element={<Reminder />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/my-teams/members" element={<Members />} /> {/* Routing for Members */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
