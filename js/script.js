{
    const welcome = () => {
        console.log("Hello!");
    };

    const toggleBackground = () => {
        const colorBody = document.querySelector(".js-body");
        const colorOfHeader = document.querySelector(".js-header");
        const oMnieDark = document.querySelector(".js-navigation__oMnie--dark");
        const zainteresowaniaDark = document.querySelector(".js-navigation__zainteresowania--dark");
        const kontaktDark = document.querySelector(".js-navigation__kontakt--dark");
        const sectionOMnieFontBright = document.querySelector(".js-section__oMnie--font-bright");
        const sectionZainteresowaniaFontBright = document.querySelector(".js-section__zainteresowania--font-bright");
        const sectionKontaktFontBright = document.querySelector(".js-section__kontakt--font-bright");
        const themeName = document.querySelector(".js-header__button--themeName");

        colorBody.classList.toggle("themeDark");
        colorOfHeader.classList.toggle("themeDark");
        oMnieDark.classList.toggle("navigation__item--font-bright");
        zainteresowaniaDark.classList.toggle("navigation__item--font-bright");
        kontaktDark.classList.toggle("navigation__item--font-bright");
        sectionOMnieFontBright.classList.toggle("section--font-bright");
        sectionZainteresowaniaFontBright.classList.toggle("section--font-bright");
        sectionKontaktFontBright.classList.toggle("section--font-bright");

        themeName.innerText = colorBody.classList.contains("themeDark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const buttonChangingTheme = document.querySelector(".js-header__button");
        buttonChangingTheme.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}