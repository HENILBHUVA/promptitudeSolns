import React, { useState } from 'react';
import './Members.css';
import { FaSearch, FaEllipsisV, FaTimes } from 'react-icons/fa';
import { User, teamMembers, updateUser, changePassword, toggleUserStatus, addMember } from '../../Drafts/User';

const Members = () => {
  const [team, setTeam] = useState(teamMembers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    role: '',
    phone_number: '',
    email_id: '',
    alternate_pho_no: '',
    reporting_to: '',
    tasks: [],
    clients: [],
  });
  const [error, setError] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isViewMoreModalOpen, setViewMoreModalOpen] = useState(false);
  const [viewMoreUser, setViewMoreUser] = useState(null);

  const filteredTeam = team.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewMore = (user) => {
    setViewMoreUser(user);
    setViewMoreModalOpen(true);
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setUpdateModalOpen(true);
  };

  const handlePasswordChange = (user) => {
    setSelectedUser(user);
    setPasswordModalOpen(true);
  };

  const handleToggleStatus = (user) => {
    const confirmed = window.confirm(
      `Are you sure you want to ${user.status ? 'disable' : 'enable'} this user?`
    );
    if (confirmed) {
      const updatedTeam = toggleUserStatus(team, user.user_id);
      setTeam(updatedTeam);
    }
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedTeam = updateUser(team, updatedUser);
    setTeam(updatedTeam);
    setUpdateModalOpen(false);
  };

  const handleChangePassword = () => {
    if (!newPassword || !confirmPassword) {
      setError('Password fields cannot be blank.*');
      return;
    }
    if (newPassword === confirmPassword) {
      const updatedTeam = changePassword(team, selectedUser.user_id, newPassword);
      setTeam(updatedTeam);
      setPasswordModalOpen(false);
      setError('');
      alert('Password updated successfully!');
    } else {
      setError('Passwords do not match.*');
    }
  };

  const handleAddMember = () => {
    const memberData = new User(
      team.length + 1, // Incremental ID
      newUser.name,
      newUser.role,
      newUser.phone_number,
      newUser.email_id,
      newUser.alternate_pho_no,
      true, // Default to active
      [], // Default clients
      newUser.reporting_to,
      [], // Default tasks
      'default_password' // Placeholder password
    );
    
    const updatedTeam = addMember(team, memberData);
    setTeam(updatedTeam);
    setAddModalOpen(false);
    setNewUser({
      name: '',
      role: '',
      phone_number: '',
      email_id: '',
      alternate_pho_no: '',
      reporting_to: '',
      tasks: [],
      clients: [],
    });
  };

  const handleAddButtonClick = () => {
    setAddModalOpen(true);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const userOptions = team.map(user => (
    <option key={user.user_id} value={user.user_id}>
      {user.name}
    </option>
  ));

  return (
    <div className="members-container">
      <h1 className='page-heading'>Team Members</h1>

      {/* Search Bar */}
      <div className="search-bar-container">
        <div className="input-wrapper">
          <FaSearch className="search-icon" />
          <input 
            type="text"
            placeholder="Search by name or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="add-member-btn" onClick={handleAddButtonClick}>Add Member</button>
      </div>

      <table className="team-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Clients</th>
            <th>Tasks</th>
            <th>Reporting To</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeam.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.role}</td>
              <td>{member.status ? 'Active' : 'Inactive'}</td>
              <td>{member.clients.length}</td>
              <td>{member.tasks.length}</td>
              <td>{member.reporting_to}</td>
              <td>
                <div className={`dropdown ${openDropdown === index ? 'active' : ''}`}>
                  <button className="kebab-menu" onClick={() => toggleDropdown(index)}>
                    {openDropdown === index ? <FaTimes /> : <FaEllipsisV />}
                  </button>

                  <ul className="dropdown-menu">
                    <li onClick={() => handleViewMore(member)}>View More</li>
                    <li onClick={() => handleUpdate(member)}>Update</li>
                    <li onClick={() => handlePasswordChange(member)}>Change Password</li>
                    <li onClick={() => handleToggleStatus(member)}>
                      {member.status ? 'Disable' : 'Enable'}
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isUpdateModalOpen && (
        <div className="modal">
          <h2>Update User</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdateUser(selectedUser); }}>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={selectedUser.name}
              onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
            />
            {/* <br /> */}
            <label>Role: </label>
            <select
              name="role"
              value={selectedUser.role}
              onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
            >
              <option value="Admin">Admin</option>
              <option value="Member">Member</option>
            </select>
            {/* <br /> */}
            <label>Reporting To: </label>
            <select
              value={selectedUser.reporting_to || ''}
              onChange={(e) => setSelectedUser({ ...selectedUser, reporting_to: e.target.value })}
            >
              <option value="">Select Reporting Person</option>
              {userOptions}
            </select>
            {/* <br /> */}
            <div className="button-container">
              <button className="update-btn" type="submit">Update</button>
              <button className="close-btn" type="button" onClick={() => setUpdateModalOpen(false)}>Close</button>
            </div>
          </form>
        </div>
      )}

      {isPasswordModalOpen && (
        <div className="modal">
          <h2>Change Password</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleChangePassword(); }}>
            <label>New Password: </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {/* <br /> */}
            <label>Confirm Password: </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* <br /> */}
            {error && <p className="error-message">{error}</p>}
            <div className="button-container">
              <button className="update-btn" type="submit">Change Password</button>
              <button className="close-btn" type="button" onClick={() => setPasswordModalOpen(false)}>Close</button>
            </div>
          </form>
        </div>
      )}

      {isAddModalOpen && (
        <div className="modal">
          <h2>Add New Member</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleAddMember(); }}>
            <label>Name: </label>
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            {/* <br /> */}
            <label>Role: </label>
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="styled-select"
            >
              <option value="Admin">Admin</option>
              <option value="Member">Member</option>
            </select>
            {/* <br /> */}
            <label>Email ID: </label>
            <input
              type="email"
              value={newUser.email_id}
              onChange={(e) => setNewUser({ ...newUser, email_id: e.target.value })}
            />
            {/* <br /> */}
           <div className='row-fields'>
          <div>
          <label>Phone Number: </label>
            <input
              type="text"
              value={newUser.phone_number}
              onChange={(e) => setNewUser({ ...newUser, phone_number: e.target.value })}
            />
          </div>
            {/* <br /> */}
          <div>
          <label>Alternate Phone Number: </label>
            <input
              type="text"
              value={newUser.alternate_pho_no}
              onChange={(e) => setNewUser({ ...newUser, alternate_pho_no: e.target.value })}
            />
          </div>
           </div>
            {/* <br /> */}
            <label>Reporting To: </label>
            <select
              value={newUser.reporting_to}
              onChange={(e) => setNewUser({ ...newUser, reporting_to: e.target.value })}
            >
              <option value="">Select Reporting Person</option>
              {userOptions}
            </select>
            {/* <br /> */}
            <div className="button-container">
              <button className="update-btn" type="submit">Add Member</button>
              <button className="close-btn" type="button" onClick={() => setAddModalOpen(false)}>Close</button>
            </div>
          </form>
        </div>
      )}

      {isViewMoreModalOpen && viewMoreUser && (
        <div className="modal">
          <h2>User Details</h2>
          <p><strong>Name:</strong> {viewMoreUser.name}</p>
          <p><strong>Role:</strong> {viewMoreUser.role}</p>
          <p><strong>Phone Number:</strong> {viewMoreUser.phone_number}</p>
          <p><strong>Email ID:</strong> {viewMoreUser.email_id}</p>
          <p><strong>Alternate Phone Number:</strong> {viewMoreUser.alternate_pho_no}</p>
          <p><strong>Clients:</strong> {viewMoreUser.clients.length}</p>
          <p><strong>Reporting To:</strong> {viewMoreUser.reporting_to}</p>
          <p><strong>Tasks:</strong> {viewMoreUser.tasks.length}</p>
          <button className="close-btn" onClick={() => setViewMoreModalOpen(false)}>Close</button>
        </div>
      )}

    </div>
  );
};

export default Members;
