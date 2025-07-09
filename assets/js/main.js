let themeSwitcher;

document.addEventListener("DOMContentLoaded", () => {
  themeSwitcher = document.getElementById("theme-switcher");
  if (themeSwitcher !== undefined) {
    if (localStorage.getItem("mode") === "true") {
      themeSwitcher.checked = true;
    }

    themeSwitcher.addEventListener("click", () => {
      localStorage.setItem("mode", themeSwitcher.checked);
    });  
  }
});
