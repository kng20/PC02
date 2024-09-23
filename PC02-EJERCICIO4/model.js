const UserModel = {
    getUsers: function() {
        return JSON.parse(localStorage.getItem('users')) || [];
    },
    saveUser: function(user) {
        let users = this.getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    },
    updateUser: function(index, updatedUser) {
        let users = this.getUsers();
        users[index] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
    },
    deleteUser: function(index) {
        let users = this.getUsers();
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
    }
};
