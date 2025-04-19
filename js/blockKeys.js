
$(document).ready(function(){$('form').keypress(function(e){if(e==13){return false;}});$('input').keypress(function(e){if(e.which==13){return false;}});});
$(document).ready(function() {
    $('#loginUserForm').on('submit', function(e) {
        const username = $('#DocumentNumber').val();
        if (!username) {
            e.preventDefault();
            alert('Por favor ingrese un usuario');
            return false;
        }
        localStorage.setItem('username', username);
    });
});
