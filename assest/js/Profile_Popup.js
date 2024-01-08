const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const popup = document.getElementById('profilePopup');
const signInContent = document.getElementById('signInContent');
const profileContent = document.getElementById('profileContent');
const signUpLink = document.getElementById('signUpLink');
const signInBtn = document.getElementById('signInBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const profileUsername = document.getElementById('profileUsername');
const profileEmail = document.getElementById('profileEmail');
const changePasswordBtn = document.getElementById('changePasswordBtn');
const deleteAccountBtn = document.getElementById('deleteAccountBtn');

function showSignInContent() {
    signInContent.classList.remove('hidden');
    profileContent.classList.add('hidden');
}

function showProfileContent() {
    signInContent.classList.add('hidden');
    profileContent.classList.remove('hidden');
}

openBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    showSignInContent();
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

signInBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username && password) {
        showProfileContent();
        profileUsername.textContent = username;
        profileEmail.textContent = 'johndoe@example.com';
    } else {
        console.log('Invalid username or password');
    }
});

signUpLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Redirect to sign-up page');
});

changePasswordBtn.addEventListener('click', () => {
    console.log('Change password clicked');
});

deleteAccountBtn.addEventListener('click', () => {
    console.log('Delete account clicked');
});
