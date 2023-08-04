// step-1: add check event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password)

    // Danger: Do not verify email address on your clint side
    if(email === 'baap@sontan.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tui password vule gechos. Toke tejjo sontan kore dilam.');
    }
});