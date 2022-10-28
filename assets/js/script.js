var copyrightYear = document.querySelector("#copyright-year");

function renderCopyright () {
    const today = new Date();
    const year = today.getFullYear();
    copyrightYear.innerHTML = "<p>&copy; Copyright " + year + " • Ebeca Classic Vines LLC, All Rights Reserved • Built by <a href='https://highpower-design.com' target='_blank'>HighPower Web Design</a></p>";
};

window.onload = renderCopyright();