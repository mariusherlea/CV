let p_content = document.getElementById("header").innerHTML;

let header = {
  "background-color": "yellow",
  render: function () {
    const cevaCS = document.getElementById("menu-nav");

    if (p_content == "Home") {
      document.getElementById("header").innerHTML = "Marius Herlea HomePage";

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

function weatherBalloon(cityID) {
  var key = "728d0c264572c8885e9253484a6de83b";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=" +
      cityID +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      console.log(data);
      drawWeather(data);
    })
    .catch(function () {
      // catch any errors
    });
}

window.onload = function () {
  weatherBalloon(679995);
};

function drawWeather(d) {
  let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  let fahrenheit = Math.round((parseFloat(d.main.temp) - 273.15) * 1.8 + 32);
  let description = d.weather[0].description;

  document.getElementById("humidity").innerHTML =
    d.main.humidity + " % humidity";
  document.getElementById("presure").innerHTML = d.main.pressure + " hPa";
  document.getElementById("description").innerHTML = d.weather[0].description;
  document.getElementById("temp").innerHTML = celcius + "&deg;";
  document.getElementById("location").innerHTML = d.name;
  document.getElementById(
    "icon"
  ).src = `http://openweathermap.org/img/w/${d.weather[0].icon}.png`;
}
