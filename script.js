const body = document.body;
const inputMail = document.getElementById('email');
const inputPwd = document.getElementById('pwd');
const login = document.getElementById('log-in-btn');
let errorMessage = document.getElementById('errorMsg');
let errMsgII = document.getElementById('errorMsgII');
const gameController = document.getElementById('initial-control');
const signUp = document.getElementById('sign-up-btn');
const signIn = document.getElementById('link-signin');
const userName = document.getElementById('user');
const newEmail = document.getElementById('signin-email');
const newPwd = document.getElementById('create-pwd');
const confirmPwd = document.getElementById('confirm-pwd');
const listaCriteria = document.getElementById('password-criteria');
const criteria = {
    length: document.getElementById('length'),
    uppercase: document.getElementById('uppercase'),
    lowercase: document.getElementById('lowercase'),
    number: document.getElementById('number'),
    special: document.getElementById('special')
};
const modal = document.getElementById('success-modal');
const closeModal = document.getElementById('close-modal');

// // SIGN IN E TERCEIRA MUDANÇA DE TELA
function isValidMail(emailAddress) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailAddress);
}

newEmail.addEventListener('keyup', () => {
    errMsgII.textContent = '';
    if (!isValidMail(newEmail.value) && newEmail.value.length > 0) {
        errMsgII.textContent = 'Please, insert a valid e-mail address'
    } 
})

newPwd.addEventListener('keyup', function() {
    errMsgII.textContent = '';
    const newPassword = newPwd.value;
    listaCriteria.classList.remove('hidden');
    criteria.length.classList.toggle('valid', newPassword.length >= 8);
    criteria.uppercase.classList.toggle('valid', /[A-Z]/.test(newPassword));
    criteria.lowercase.classList.toggle('valid', /[a-z]/.test(newPassword));
    criteria.number.classList.toggle('valid', /\d/.test(newPassword));
    criteria.special.classList.toggle('valid', /[$*&@#]/.test(newPassword));
});

confirmPwd.addEventListener('keyup', () => {
    listaCriteria.classList.add('hidden');
    if (confirmPwd.value === newPwd.value) {
        errMsgII.classList.add('success');
        errMsgII.textContent = 'Thanks for confirming your password';
    } else {
        errMsgII.textContent = 'Passwords does not match';
        errMsgII.classList.remove('success');
    }
})

signUp.addEventListener('click', (event) => {
    event.preventDefault();

    modal.style.display = 'block';
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
})

// SEGUNDA MUDANÇA DE TELA
signIn.addEventListener('click', function () {
    body.classList.add('thi');
    document.getElementById('post-click').classList.add('hidden');
    document.getElementById('before-click').classList.remove('hidden');    
})

// LOGIN
const validMail = 'best.player@mail.com';
const rightPwd = 'tj4M@k58Qcs1';

function isValidPassword(password) {
    return password.length >= 8;
}

inputMail.addEventListener('keyup', () => {
    errorMessage.textContent = '';
    if (!isValidMail(inputMail.value) && inputMail.value.length > 0) {
        errorMessage.textContent = 'Please, insert a valid e-mail address'
    } 
})

inputPwd.addEventListener('keyup', () => {
    errorMessage.textContent = '';
    if (!isValidPassword(inputPwd.value) && inputPwd.value.length > 0) {
        errorMessage.textContent = 'Please, insert a valid password'
    }   
})

login.addEventListener('click', (event) => {
    event.preventDefault();        
    if (!inputMail.value || !inputPwd.value) {
        errorMessage.textContent = 'Please, insert your e-mail and password above';
        return;
    }    
    if (inputMail.value !== validMail || inputPwd.value !== rightPwd) {
        errorMessage.textContent = 'E-mail or password incorrect. Try again.';
        return;
    }     
    errorMessage.textContent = '';
})
