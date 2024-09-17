import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTasks, FaUserFriends, FaBell, FaUsers, FaLock, FaUser, FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Importing icons
import './Navbar.css';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null); 

  
  const toggleDropdown = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleNonDropdownClick = () => {
    setActiveMenu(null); 
  };

  return (
    <div className="navbar">
      <ul>
        {/* Dashboard Link - No dropdown */}
        <li className="dashboard" onClick={handleNonDropdownClick}>
          <Link to="/"> Dashboard</Link>
        </li>

        {/* Tasks Section */}
        <li className="heading" onClick={() => toggleDropdown('tasks')}>
          <FaTasks className="icon" /> Tasks {activeMenu === 'tasks' ? <FaChevronUp /> : <FaChevronDown />}
        </li>
        {activeMenu === 'tasks' && (
          <ul className="dropdown">
            <li className="subheading"><Link to="/tasks/today">Today</Link></li>
            <li className="subheading"><Link to="/tasks/assigned">Assigned to Me</Link></li>
            <li className="subheading"><Link to="/tasks/reported">Reported by Me</Link></li>
            <li className="subheading"><Link to="/tasks/all">All Tasks</Link></li>
          </ul>
        )}

        {/* Clients Link - No dropdown */}
        <li className="heading" onClick={handleNonDropdownClick}>
          <FaUserFriends className="icon" /> <Link to="/clients">Clients</Link>
        </li>

        {/* Vaults Section */}
        <li className="heading" onClick={() => toggleDropdown('vaults')}>
         <FaLock className="icon" /> Vaults {activeMenu === 'vaults' ? <FaChevronUp /> : <FaChevronDown />}
        </li>
        {activeMenu === 'vaults' && (
          <ul className="dropdown">
            <li className="subheading"><Link to="/vaults/password">Password</Link></li>
            <li className="subheading"><Link to="/vaults/docs">Docs</Link></li>
          </ul>
        )}

        {/* Reminder Link - No dropdown */}
        <li className="heading" onClick={handleNonDropdownClick}>
          <FaBell className="icon"/> <Link to="/reminder">Reminder</Link>
        </li>

        {/* My Account Section */}
        <li className="heading" onClick={() => toggleDropdown('myAccount')}>
          <FaUser className="icon" /> My Account {activeMenu === 'myAccount' ? <FaChevronUp /> : <FaChevronDown />}
        </li>
        {activeMenu === 'myAccount' && (
          <ul className="dropdown">
            <li className="subheading"><Link to="/my-account/notifications">Notifications</Link></li>
            <li className="subheading"><Link to="/my-account/leaves">Leaves</Link></li>
          </ul>
        )}

        {/* My Teams Section */}
        <li className="heading" onClick={() => toggleDropdown('myTeams')}>
          <FaUsers className="icon" /> My Teams {activeMenu === 'myTeams' ? <FaChevronUp /> : <FaChevronDown />}
        </li>
        {activeMenu === 'myTeams' && (
          <ul className="dropdown">
            <li className="subheading"><Link to="/my-teams/members">Members</Link></li>
            <li className="subheading"><Link to="/my-teams/leaves">Leaves</Link></li>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
