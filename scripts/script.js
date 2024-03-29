const navElement = document.querySelector("nav");
const navBarLinks = document.querySelectorAll("nav a");
const sectionElements = document.querySelectorAll("section");

navBarLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default action of following the link
    removeActiveLinks();
    hideSections();
    link.parentElement.classList.add("active");
    const targetSection = document.querySelector(link.hash); // Get the target section
    if (targetSection) {
      targetSection.classList.remove("hidden"); // Show the target section
    }
  });
});

const removeActiveLinks = () => {
  navBarLinks.forEach((link) => {
    link.parentElement.classList.remove("active");
  });
};

const hideSections = () => {
  sectionElements.forEach((section) => {
    section.classList.add("hidden");
  });
};

document.getElementById("currentYear").innerHTML = new Date().getFullYear();

const themeChanger = document.querySelector("#theme-changer");

const darkMode = () => {
  const body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    themeChanger.innerHTML = "White Mode";
    themeChanger.style.color = "black";
    themeChanger.style.backgroundColor = "white";
  } else {
    body.classList.add("dark");
    themeChanger.innerHTML = "Dark Mode";
    themeChanger.style.color = "white";
    themeChanger.style.backgroundColor = "black";
  }
};
