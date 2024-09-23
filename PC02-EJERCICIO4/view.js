const UserView = {
    renderUsers: function(users) {
        const userTableBody = $('#userTableBody');
        userTableBody.empty();
        users.forEach((user, index) => {
            const userRow = `
                <tr>
                    <td>${user.fullName}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.country}</td>
                    <td>${user.age}</td>
                    <td>${user.gender}</td>
                    <td>${user.interests.join(', ')}</td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="UserController.editUser(${index})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="UserController.deleteUser(${index})">Eliminar</button>
                    </td>
                </tr>
            `;
            userTableBody.append(userRow);
        });
    },
    showMessage: function(message, isError = true) {
        const messageDiv = $('#message');
        messageDiv.html(`<p class="${isError ? 'error' : ''}">${message}</p>`);
    },
    clearForm: function() {
        $('#registrationForm')[0].reset();
        $('#submitButton').text('Registrar');
    },
    fillForm: function(user) {
        $('#fullName').val(user.fullName);
        $('#email').val(user.email);
        $('#phone').val(user.phone);
        $('#country').val(user.country);
        $('#age').val(user.age);
        $('#gender').val(user.gender);
        user.interests.forEach(interest => {
            if (interest === 'Deportes') $('#sports').prop('checked', true);
            if (interest === 'Música') $('#music').prop('checked', true);
            if (interest === 'Tecnología') $('#tech').prop('checked', true);
        });
        $('#submitButton').text('Actualizar');
    }
};
