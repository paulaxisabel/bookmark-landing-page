const body = document.querySelector("body");
const hamburger = document.getElementById("nav__hamburger");
const xBtn = document.querySelector(".x-img");
const hamburgerImg = document.querySelector(".hamburger-img");
const navLinksWrap = document.querySelector(".nav__links--wrap");
const logo = document.querySelector(".nav__img");
const logoWhite = document.querySelector(".nav__img--white");
const navSocialLinks = document.querySelector(".nav-social-links--wrap");

const toggleMobileNav = () => {
    navLinksWrap.classList.toggle("active");
    hamburgerImg.style.display = "none";
    xBtn.style.display = "block";
    body.classList.toggle("active");
    logo.classList.toggle("display");
    logoWhite.classList.toggle("display");
    navSocialLinks.classList.toggle("display");

    if (!navLinksWrap.classList.contains("active")) {
        xBtn.style.display = "none";
        hamburgerImg.style.display = "block";
    }
};

hamburger.addEventListener("click", toggleMobileNav);
