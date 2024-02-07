const navElement = document.querySelector("nav");
const navBarLinks = document.querySelectorAll("a");
const sectionElements = document.querySelectorAll("section");

const removeActiveLinks = () => {
  navBarLinks.forEach((link) => {
    link.parentElement.classList.remove("active");
  });
};

const hideSection = () => {
  sectionElements.forEach((section) => {
    section.classList.add("hidden");
  });
};

navBarLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    removeActiveLinks();
    hideSection();
    link.parentElement.classList.add("active");
    const sectionElements = document.querySelector(link.hash);
    sectionElements.classList.remove("hidden");
  });
});

let ageCalculation = {
  addCurrentYear: function () {
    document.getElementById("curentYear").innerHTML = new Date().getFullYear();
  },
};

window.addEventListener("load", ageCalculation.addCurrentYear);
