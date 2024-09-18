// User.js
export class User {
    constructor(user_id, name, role, phone_number, email_id, alternate_pho_no, status, clients, reporting_to, tasks, password) {
      this.user_id = user_id;
      this.name = name;
      this.role = role;
      this.phone_number = phone_number;
      this.email_id = email_id;
      this.alternate_pho_no = alternate_pho_no;
      this.status = status;
      this.clients = clients;
      this.reporting_to = reporting_to;
      this.tasks = tasks;
      this.password = password;
    }
  
    toggleStatus() {
      this.status = !this.status;
    }
  }
  
  export const teamMembers = [
    new User(1, "John Doe", "Admin", "123-456-7890", "john@example.com", "111-222-3333", true, ["Client A"], "Jane Smith", ["Task 1"], "hashed_password_1"),
    new User(2, "Jane Smith", "Member", "123-456-7891", "jane@example.com", "222-333-4444", true, ["Client B"], "John Doe", ["Task 2"], "hashed_password_2"),
    new User(3, "Emily Clark", "Member", "123-456-7896", "emily@example.com", "777-888-9999", true, ["Client F"], "John Doe", ["Task 7"], "hashed_password_6"),
    new User(4, "Michael Brown", "Manager", "123-456-7897", "michael@example.com", "888-999-0000", true, ["Client G"], "Jane Smith", ["Task 8", "Task 9"], "hashed_password_7"),
    new User(5, "John Doe", "Admin", "123-456-7890", "john@example.com", "111-222-3333", true, ["Client A"], "Jane Smith", ["Task 1"], "hashed_password_1"),
    new User(6, "Jane Smith", "Member", "123-456-7891", "jane@example.com", "222-333-4444", true, ["Client B"], "John Doe", ["Task 2"], "hashed_password_2"),
    new User(7, "Emily Clark", "Member", "123-456-7896", "emily@example.com", "777-888-9999", true, ["Client F"], "John Doe", ["Task 7"], "hashed_password_6"),
    new User(8, "Michael Brown", "Manager", "123-456-7897", "michael@example.com", "888-999-0000", true, ["Client G"], "Jane Smith", ["Task 8", "Task 9"], "hashed_password_7"),
    new User(9, "John Doe", "Admin", "123-456-7890", "john@example.com", "111-222-3333", true, ["Client A"], "Jane Smith", ["Task 1"], "hashed_password_1"),
    new User(10, "Jane Smith", "Member", "123-456-7891", "jane@example.com", "222-333-4444", true, ["Client B"], "John Doe", ["Task 2"], "hashed_password_2"),
    new User(11, "Emily Clark", "Member", "123-456-7896", "emily@example.com", "777-888-9999", true, ["Client F"], "John Doe", ["Task 7"], "hashed_password_6"),
    new User(12, "Michael Brown", "Manager", "123-456-7897", "michael@example.com", "888-999-0000", true, ["Client G"], "Jane Smith", ["Task 8", "Task 9"], "hashed_password_7"),
  ];
  
  // Function to update a user
  export const updateUser = (team, updatedUser) => {
    return team.map((u) => (u.user_id === updatedUser.user_id ? updatedUser : u));
  };
  
  // Function to change a user's password
  export const changePassword = (team, userId, newPassword) => {
    return team.map((u) => (u.user_id === userId ? { ...u, password: newPassword } : u));
  };
  
  // Function to toggle a user's status
  export const toggleUserStatus = (team, userId) => {
    return team.map((u) => (u.user_id === userId ? { ...u, status: !u.status } : u));
  };
  
  // Function to add a new member
  export const addMember = (team, newUser) => {
    return [...team, newUser];
  };
  