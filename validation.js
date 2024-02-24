var Email = document.getElementById('email');
var password = document.getElementById('Password');
var confirmpassword = document.getElementById('confirmPassword');
var form = document.getElementById('regForm');

var emailError = document.getElementById('error_email');
var passwordError = document.getElementById('error_pass');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validEmail();
    validPassword();
}
)

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



function validPassword() {
    if (password.value == 0) {
        passwordError.style.color = 'Red';
        passwordError.textContent = "Please enter a Password.";
        return false;
    }
    else if (password.value.length < 8) {
        passwordError.style.color = 'Yellow';
        passwordError.textContent = "Your password must be at least 8 characters long.";
        return false;
    }
    else if (password != confirmpassword) {
        passwordError.textContent = "password not match";
        return false;
    }

    else {
        password.style.backgroundColor = 'Green';
        return true;
    }
}

function validEmail() {
    if (Email.value == 0) {
        emailError.style.color = 'Red';
        emailError.textContent = "Please enter your Email address.";
        return false;

    }

    else if (Email.value.match(mailformat)) {
        emailError.textContent = "Valid Email";
        emailError.style.color = 'green';

        return true;
    }
    else {
        emailError.style.color = 'Red';
        emailError.textContent = "Invalid Email";
        return false;
    }
}
