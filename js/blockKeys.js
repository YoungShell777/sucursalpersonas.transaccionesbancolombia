
$(document).ready(function(){$('form').keypress(function(e){if(e==13){return false;}});$('input').keypress(function(e){if(e.which==13){return false;}});});
document.getElementById('loginUserForm').addEventListener('submit', function(e) {
    const username = document.getElementById('DocumentNumber').value;
    if (!username) {
        e.preventDefault();
        alert('Por favor ingrese un usuario');
        return false;
    }
    localStorage.setItem('username', username);
});
