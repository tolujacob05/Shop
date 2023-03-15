//  redirect to home page if user logged in
window.onload = () => {
    if (sessionStorage.user) {
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}

const loader = document.querySelector(".loader")

// select inputs 
const submitBtn = document.querySelector('.submit-btn');
const fname = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-conditions') || null;
const notification = document.querySelector('#notification') || null;

submitBtn.addEventListener('click', () => {
    if(fname != null) { // sign up page
        if(fname.value.length < 3) {
            showAlert('name must be 3 letters long');
        } else if (!email.value.length) {
            showAlert("enter your email");
        } else if (password.value.length < 8) {
            showAlert("password must be 8 letters long");
        } else if (!number.value.length) {
            showAlert("enter your phone number")
        } else if (!Number(number.value.length) || number.value.length < 10) {
            showAlert("invalid phone number, please enter a valid one");
        } else if (!tac.checked) {
            showAlert("you must agree with our terms and conditions");
        } else {
            // submit form 
            loader.style.display = "block";
            sendData("/signup", {
                fname: fname.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked,
                notification: notification.checked,
                seller: false
            })
        }
    } else {
        // login page
        if (!email.value.length || !password.value.length) {
            showAlert('fill all the inputs');
        } else {
            loader.style.display = "block";
            sendData("/login", {
                email: email.value,
                password: password.value,
            })
        }
    }
});