window.onload = init;

function init() {
  document.getElementById("mobile-menu-button").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  })
  console.log(document.getElementsByClassName("mobile-dropdown"))

  document.querySelectorAll(".mobile-dropdown").forEach(menuItem => {
    menuItem.addEventListener("click", (event) => {
      const submenu = event.target.nextElementSibling;
      console.log("submenu: ", submenu);
      if (submenu) {
        submenu.classList.toggle("hidden");
      }
      
    })
  })
}
