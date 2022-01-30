const email = document.querySelector('#email');
const age = document.querySelector('#age');
email.addEventListener('input', validate);
age.addEventListener('input', validate);
function validate() {
    if (!validate_email(email.value)) email.classList.add('fail')
    else email.classList.remove('fail')

    if (!validate_age(age.value)) age.classList.add('fail')
    else age.classList.remove('fail')
}

function validate_email(value) {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.exec(value);
}

function validate_age(value) {
    if (value <= 0 || value > 200) return false;
    return true;
}