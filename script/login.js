// console.log('check')
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('clicked button')
    const EmailField = document.getElementById('user-email');
    const EmailText = EmailField.value;
    EmailField.value = '';

    const PasswordField = document.getElementById('user-password');
    const PasswordText = PasswordField.value;
    PasswordField.value = '';

    // console.log(userEmailText, userPasswordText)
    if(EmailText === 'probir@gmail.com' && PasswordText === 'password'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Your Email And Password not Same');
    }
});