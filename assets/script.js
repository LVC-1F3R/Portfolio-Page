var navLinks = document.querySelectorAll(".nav-link")
console.log(navLinks)


for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
      navLinks[i].classList.toggle("active");
    });
}