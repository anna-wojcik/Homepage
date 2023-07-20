console.log("Hello!");

let buttonChangingTheme = document.querySelector(".js-header__button");
let themeDark = document.querySelector(".themeDark");
let themeName = document.querySelector(".js-header__button--themeName");
let colorBody = document.querySelector(".js-body");
let colorOfHeader = document.querySelector(".js-header");
let oMnieDark = document.querySelector(".js-navigation__oMnie--dark");
let zainteresowaniaDark = document.querySelector(".js-navigation__zainteresowania--dark");
let kontaktDark = document.querySelector(".js-navigation__kontakt--dark");
let sectionOMnieFontBright = document.querySelector(".js-section__oMnie--font-bright");
let sectionZainteresowaniaFontBright = document.querySelector(".js-section__zainteresowania--font-bright");
let sectionKontaktFontBright = document.querySelector(".js-section__kontakt--font-bright");



buttonChangingTheme.addEventListener("click", () => {
    colorBody.classList.toggle("themeDark"); // this instruction changes the class of body
    colorOfHeader.classList.toggle("themeDark");
    oMnieDark.classList.toggle("navigation__item--font-bright");
    zainteresowaniaDark.classList.toggle("navigation__item--font-bright");
    kontaktDark.classList.toggle("navigation__item--font-bright");
    sectionOMnieFontBright.classList.toggle("section--font-bright");
    sectionZainteresowaniaFontBright.classList.toggle("section--font-bright");
    sectionKontaktFontBright.classList.toggle("section--font-bright");

    if (colorBody.classList.contains("themeDark")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = "ciemny";
    }
})


