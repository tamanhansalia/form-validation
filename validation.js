var form = document.getElementById('regForm');



function validatepassword() {
    var password = document.getElementById('Password');
    var passwordError = document.getElementById('error_pass');

    var confirmpassword = document.getElementById('confirmpassword');
    var confirmpasswordError = document.getElementById('error_confirmpass');

    if (password.value == 0) {
        passwordError.textContent = "Please enter a Password.";
        passwordError.style.color = 'Red';
    }
    else if (password.value.length < 8 || confirmpassword.value.length < 8) {
        passwordError.textContent = "Your password must be at least 8 characters long.";
        passwordError.style.color = 'Yellow';
        confirmpasswordError.textContent = "password not match";
    }
    else if (password.value !== confirmpassword.value) {
        confirmpasswordError.textContent = "password not match";
        confirmpasswordError.style.color = 'Yellow';
    }

    else {
        confirmpasswordError.textContent = "Valid password";
        confirmpasswordError.style.color = 'Green';
    }
}

function validateemail() {
    var email = document.getElementById('email');
    var emailError = document.getElementById('error_email');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value == 0) {
        emailError.textContent = "Please enter your email address.";
        emailError.style.color = 'Red';
    }

    else if (!email.value.match(mailformat)) {
        emailError.textContent = "Invalid email";
        emailError.style.color = 'Red';
    }
    else {
        emailError.textContent = "Valid email";
        emailError.style.color = 'green';
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
});
