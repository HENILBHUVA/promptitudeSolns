import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTasks, FaUserFriends, FaBell, FaUsers, FaLock, FaUser, FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Importing icons
import './Navbar.css';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation(); // Get the current route location

  const toggleDropdown = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleNonDropdownClick = () => {
    setActiveMenu(null); 
  };

  // Determine if the current route matches any of the menu items
  const isActive = (path) => {
    if(location.pathname === path){
      console.log(path)
    }

    return location.pathname === path};
  console.log('psdpa')

  // console.log(path)
  console.log(location.pathname)
  // console.log(isActive)
  return (
    <div className="navbar">
      <ul>
        {/* Dashboard Link - No dropdown */}
       

        {/* Tasks Section */}
        <li className={`heading ${activeMenu === 'tasks' ? '' : ''}`} onClick={() => toggleDropdown('tasks')}>
          <div>
            <FaTasks className="icon" /> Tasks
          </div>
          {activeMenu === 'tasks' ? <FaChevronUp /> : <FaChevronDown />}
        </li>
        {activeMenu === 'tasks' && (
          <ul className="dropdown">
            <li className={`subheading ${isActive('/tasks/today') ? 'active' : ''}`}><Link to="/tasks/today">Today</Link></li>
            <li className={`subheading ${isActive('/tasks/assigned') ? 'active' : ''}`}><Link to="/tasks/assigned">Assigned to Me</Link></li>
            <li className={`subheading ${isActive('/tasks/reported') ? 'active' : ''}`}><Link to="/tasks/reported">Reported by Me</Link></li>
            <li className={`subheading ${isActive('/tasks/all') ? 'active' : ''}`}><Link to="/tasks/all">All Tasks</Link></li>
          </ul>
        )}

        {/* Clients Link - No dropdown */}
        <li className={`heading ${isActive('/clients') ? 'active' : ''}`} onClick={handleNonDropdownClick}>
          <div style={{display:'flex'}}>
              <FaUserFriends className="icon" style={{marginRight:'20px'}}/> <Link to="/clients">Clients</Link>
          </div>
        </li>

        {/* Vaults Section */}
        <li className={`heading ${activeMenu === 'vaults' ? '' : ''}`} onClick={() => toggleDropdown('vaults')}>
          <div>
            <FaLock className="icon" /> Vaults
          </div>
          {activeMenu === 'vaults' ? <FaChevronUp /> : <FaChevronDown />}
        </li>
        {activeMenu === 'vaults' && (
          <ul className="dropdown">
            <li className={`subheading ${isActive('/vaults/password') ? 'active' : ''}`}><Link to="/vaults/password">Password</Link></li>
            <li className={`subheading ${isActive('/vaults/docs') ? 'active' : ''}`}><Link to="/vaults/docs">Docs</Link></li>
          </ul>
        )}

        {/* Reminder Link - No dropdown */}
        <li className={`heading ${isActive('/reminder') ? 'active' : ''}`} onClick={handleNonDropdownClick}>
          <div style={{display:'flex'}}>
            <FaBell className="icon" style={{marginRight:'20px'}}/> <Link to="/reminder">Reminder</Link>
          </div>
        </li>

        {/* My Account Section */}
        <li className={`heading ${activeMenu === 'myAccount' ? '' : ''}`} onClick={() => toggleDropdown('myAccount')}>
          <div> <FaUser className="icon" /> My Account</div>
          {activeMenu === 'myAccount' ? <FaChevronUp /> : <FaChevronDown />}
        </li>
        {activeMenu === 'myAccount' && (
          <ul className="dropdown">
            <li className={`subheading ${isActive('/my-account/notifications') ? 'active' : ''}`}><Link to="/my-account/notifications">Notifications</Link></li>
            <li className={`subheading ${isActive('/my-account/leaves') ? 'active' : ''}`}><Link to="/my-account/leaves">Leaves</Link></li>
          </ul>
        )}

        {/* My Teams Section */}
        <li className={`heading ${activeMenu === 'myTeams' ? '' : ''}`} onClick={() => toggleDropdown('myTeams')}>
          <div>
            <FaUsers className="icon" /> My Teams
          </div>
          {activeMenu === 'myTeams' ? <FaChevronUp /> : <FaChevronDown />}
        </li>
        {activeMenu === 'myTeams' && (
          <ul className="dropdown">
            <li className={`subheading ${isActive('/my-teams/members') ? 'active' : ''}`}><Link to="/my-teams/members">Members</Link></li>
            <li className={`subheading ${isActive('/my-teams/leaves') ? 'active' : ''}`}><Link to="/my-teams/leaves">Leaves</Link></li>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
