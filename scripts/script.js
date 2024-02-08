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
  } else {
    body.classList.add("dark");
    themeChanger.innerHTML = "Dark Mode";
    themeChanger.style.color = "white";
  }
};

async function getData() {
  const url = "https://moviesdatabase.p.rapidapi.com/titles";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "20aff73ed2msh0760b4e4e8501c2p139cb9jsn721fbaf10aba",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return JSON.parse(result);
  } catch (error) {
    console.error(error);
  }
}

async function displayMovies() {
  const result = await getData();
  console.log(result);
  console.log(result.results.map((movie) => movie.titleText.text));
  const moviesList = document.querySelector("#movies");
  moviesList.innerHTML = result.results
    .map(
      (movie) => `<ul>
    <li>
    ${movie.titleText.text}
    ${movie.releaseYear.year}
   
    </li>
    </ul>`
    )
    .join(" ");

  console.log();
}

displayMovies();
