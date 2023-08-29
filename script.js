let p_content = document.getElementById("header").innerHTML;

let header = {
  "background-color": "yellow",
  render: function () {
    const cevaCS = document.getElementById("menu-nav");

    if (p_content == "Home") {
      document.getElementById("header").innerHTML = "Marius Herlea HomePage.";

      cevaCS.style.backgroundColor = this["background-color"];
      document.getElementById("header").style.backgroundColor = "aqua";
    } else if (p_content == "CV") {
      document.getElementById("header").innerHTML = "HM Curricullum Vitae";

      cevaCS.style.backgroundColor = "cyan";
      document.getElementById("header").style.backgroundColor = "yellow";
    } else {
    }
  },
};

let content = {
  print: function () {
    var ul = document.getElementById("menu-nav");
    var Home = document.createElement("li");
    var CV = document.createElement("li");

    Home.appendChild(document.createTextNode("Home"));
    CV.appendChild(document.createTextNode("CV"));

    if (p_content == "Home") {
      ul.appendChild(CV);
    } else if (p_content == "CV") {
      ul.appendChild(Home);
    }

    Home.onclick = function () {
      window.location = "index.html";
    };
    CV.onclick = function () {
      window.location = "cv.html";
    };
  },
};

let ageCalculation = {
  addCurrentYear: function () {
    document.getElementById("curentYear").innerHTML = new Date().getFullYear();
  },
};

window.addEventListener("load", myInit, true);

function myInit() {
  header.render();
  content.print();
  ageCalculation.addCurrentYear();
}
