var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Please enter your name';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Please enter your full name';
        return false;
    }

    nameError.innerHTML = 'Valid';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no. should be 10 digits';
        return false;
    }

    if (!phone.match(/^\d{10}$/)) {
        phoneError.innerHTML = 'Phone no. should be 10 digits';
        return false;
    }

    phoneError.innerHTML = 'Valid';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }

    emailError.innerHTML = 'Valid';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters left';
        return false;
    }

    if (message.length == 0) {
        messageError.innerHTML = 'Please enter your message';
        return false;
    }

    messageError.innerHTML = 'Valid';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(()=>{
            submitError.style.display = 'none';
        },3000);
        return false;
    }
}