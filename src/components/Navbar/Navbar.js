import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null); // Store the active menu

  // Toggle the dropdown for the clicked menu or close it if clicked again
  const toggleDropdown = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // Function to close the dropdown when a non-dropdown menu item is clicked
  const handleNonDropdownClick = () => {
    setActiveMenu(null); // Close any open dropdowns
  };

  return (
    <div className="navbar">
      <ul>
        {/* Dashboard Link - No dropdown */}
        <li className="dashboard" onClick={handleNonDropdownClick}>
          <Link to="/">Dashboard</Link>
        </li>

        {/* Tasks Section */}
        <li className="heading" onClick={() => toggleDropdown('tasks')}>
          Tasks {activeMenu === 'tasks' ? '▲' : '▼'}
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
          <Link to="/clients">Clients</Link>
        </li>

        {/* Vaults Section */}
        <li className="heading" onClick={() => toggleDropdown('vaults')}>
          Vaults {activeMenu === 'vaults' ? '▲' : '▼'}
        </li>
        {activeMenu === 'vaults' && (
          <ul className="dropdown">
            <li className="subheading"><Link to="/vaults/password">Password</Link></li>
            <li className="subheading"><Link to="/vaults/docs">Docs</Link></li>
          </ul>
        )}

        {/* Reminder Link - No dropdown */}
        <li className="heading" onClick={handleNonDropdownClick}>
          <Link to="/reminder">Reminder</Link>
        </li>

        {/* My Account Section */}
        <li className="heading" onClick={() => toggleDropdown('myAccount')}>
          My Account {activeMenu === 'myAccount' ? '▲' : '▼'}
        </li>
        {activeMenu === 'myAccount' && (
          <ul className="dropdown">
            <li className="subheading"><Link to="/my-account/notifications">Notifications</Link></li>
            <li className="subheading"><Link to="/my-account/leaves">Leaves</Link></li>
          </ul>
        )}

        {/* My Teams Section */}
        <li className="heading" onClick={() => toggleDropdown('myTeams')}>
          My Teams {activeMenu === 'myTeams' ? '▲' : '▼'}
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

