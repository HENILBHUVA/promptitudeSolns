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
    new User(1, "John Doe", "Admin", "987-654-3210", "john.doe@example.com", "555-444-3333", true, ["Client A"], "Sarah Lee", ["Task 3", "Task 5"], "hashed_password_3"),
    new User(2, "Jane Smith", "Member", "987-654-3211", "jane.smith@example.com", "666-555-4444", true, ["Client B"], "John Doe", ["Task 6"], "hashed_password_4"),
    new User(3, "Emily Clark", "Member", "987-654-3212", "emily.clark@example.com", "777-666-5555", true, ["Client C"], "Jane Smith", ["Task 4"], "hashed_password_5"),
    new User(4, "Michael Brown", "Manager", "987-654-3213", "michael.brown@example.com", "888-777-6666", true, ["Client D"], "Emily Clark", ["Task 9", "Task 10"], "hashed_password_8"),
    new User(5, "Sarah Lee", "Admin", "987-654-3214", "sarah.lee@example.com", "999-888-7777", true, ["Client E"], "Michael Brown", ["Task 12"], "hashed_password_9"),
    new User(6, "David Johnson", "Member", "987-654-3215", "david.johnson@example.com", "444-333-2222", true, ["Client F"], "Sarah Lee", ["Task 11"], "hashed_password_10"),
    new User(7, "Sophia Williams", "Member", "987-654-3216", "sophia.williams@example.com", "333-222-1111", true, ["Client G"], "David Johnson", ["Task 7"], "hashed_password_11"),
    new User(8, "Chris Evans", "Manager", "987-654-3217", "chris.evans@example.com", "222-111-0000", true, ["Client H"], "Sophia Williams", ["Task 8", "Task 15"], "hashed_password_12"),
    new User(9, "Olivia Davis", "Admin", "987-654-3218", "olivia.davis@example.com", "111-000-9999", true, ["Client I"], "Chris Evans", ["Task 14"], "hashed_password_13"),
    new User(10, "Ethan Thompson", "Member", "987-654-3219", "ethan.thompson@example.com", "999-888-7777", true, ["Client J"], "Olivia Davis", ["Task 16"], "hashed_password_14"),
    new User(11, "Liam Miller", "Member", "987-654-3220", "liam.miller@example.com", "777-666-5555", true, ["Client K"], "Ethan Thompson", ["Task 18"], "hashed_password_15"),
    new User(12, "Ava Moore", "Manager", "987-654-3221", "ava.moore@example.com", "555-444-3333", true, ["Client L"], "Liam Miller", ["Task 19", "Task 20"], "hashed_password_16"),
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
