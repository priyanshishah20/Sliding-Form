let sliderEl = document.getElementsByClassName('slider')[0]
let loginEl = document.getElementsByClassName('login')[0]
let signEl = document.getElementsByClassName('signup')[0]
let formEl = document.getElementsByClassName('form-section')[0]
let loginBtn = document.getElementsByClassName('login-btn')[0]
let signupBtn = document.getElementsByClassName('signup-btn')[0]

signEl.addEventListener('click', () =>{
    sliderEl.classList.add('moveslider')
    formEl.classList.add('moveform-section')
});

loginEl.addEventListener('click', () =>{
    sliderEl.classList.remove('moveslider')
    formEl.classList.remove('moveform-section')
});

// signupBtn.addEventListener('click', () =>{
//     alert("Thank you for Sign-up!")
// });

// function clickBtn() {
//     alert("Thank you for Login!");
// };

// loginBtn.addEventListener('click', clickBtn);
