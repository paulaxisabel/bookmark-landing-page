let input = document.querySelector(".contact__input");
let icon = document.querySelector(".error-img");
let inputWrap = document.querySelector(".input--wrap");
let contactBtn = document.querySelector(".contact__btn");

let passwordRegex = /^\S+@\S+$/;

input.value = "";

contactBtn.addEventListener("click", function () {
    let result = passwordRegex.test(input.value);

    if (!result) {
        inputWrap.classList.add("error");
        input.classList.add("error");
        icon.classList.add("active");
        contactBtn.classList.add("mobile-active");
    } else {
        inputWrap.classList.remove("error");
        input.classList.remove("error");
        icon.classList.remove("active");
        contactBtn.classList.remove("mobile-active");
    }
});
