const menubtn = document.querySelector("#menu-btn")
const navlist = document.querySelector(".nav-list")

menubtn.addEventListener("click", function() {
    navlist.classList.toggle("active");
})