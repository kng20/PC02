const UserController = {
    editingIndex: null,
    
    init: function() {
        this.renderUsers();
        $('#registrationForm').on('submit', this.handleFormSubmit.bind(this));
    },
    
    renderUsers: function() {
        const users = UserModel.getUsers();
        UserView.renderUsers(users);
    },
    
    handleFormSubmit: function(e) {
        e.preventDefault();

        const user = {
            fullName: $('#fullName').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            country: $('#country').val(),
            age: $('#age').val(),
            gender: $('#gender').val(),
            interests: []
        };

        if ($('#sports').is(':checked')) user.interests.push('Deportes');
        if ($('#music').is(':checked')) user.interests.push('Música');
        if ($('#tech').is(':checked')) user.interests.push('Tecnología');

        if (!user.fullName || !user.email || !user.phone || !user.country || !user.age || !user.gender || user.interests.length === 0) {
            UserView.showMessage('Todos los campos son obligatorios y debe seleccionar al menos un interés.');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(user.email)) {
            UserView.showMessage('El formato del correo electrónico es incorrecto.');
            return;
        }

        if (this.editingIndex !== null) {
            UserModel.updateUser(this.editingIndex, user);
            UserView.showMessage('Usuario actualizado exitosamente.', false);
            this.editingIndex = null;
        } else {
            UserModel.saveUser(user);
            UserView.showMessage('Usuario registrado exitosamente.', false);
        }

        UserView.clearForm();
        this.renderUsers();
    },
    
    editUser: function(index) {
        const users = UserModel.getUsers();
        const user = users[index];
        UserView.fillForm(user);
        this.editingIndex = index;
    },
    
    deleteUser: function(index) {
        UserModel.deleteUser(index);
        this.renderUsers();
    }
};

$(document).ready(function() {
    UserController.init();
});
