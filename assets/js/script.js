var copyrightYear = document.querySelector("#copyright-year");

function renderCopyright () {
    const today = new Date();
    const year = today.getFullYear();
    copyrightYear.innerHTML = "<p>Copyright &copy; " + year + " • Built by <a href='https://highpower-design.com' target='_blank'>HighPower Web Design</a></p>";
};

window.onload = renderCopyright();