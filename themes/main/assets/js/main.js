window.onload = init;

function init() {
  document.getElementById("mobile-menu-button").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  })
  console.log(document.getElementsByClassName("mobile-dropdown"))

  document.querySelectorAll(".mobile-dropdown").forEach(menuItem => {
    menuItem.addEventListener("click", (event) => {
      const submenu = event.target.nextElementSibling;
      const chevron = event.target.children[0];
      const downChevron = event.target.children[1]
      if (submenu) {
        submenu.classList.toggle("hidden");
        chevron.classList.toggle("hidden");
        downChevron.classList.toggle("hidden");
      }
    })
  })
}
