class Experience {
  date_start;
  date_end;
  position;
  company;
  workTown;
  fieldOfActivities;

  constructor(
    date_start,
    date_end,
    position,
    company,
    workTown,
    fieldOfActivities
  ) {
    this.date_start = new Date(date_start).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    this.date_end = new Date(date_end).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    this.position = position;
    this.company = company;
    this.workTown = workTown;
    this.fieldOfActivities = fieldOfActivities;
  }
}

const experienceList = {
  experience: [
    (forklift = new Experience(
      `${new Date("2016-01-10T14:00:00")}`,
      `${new Date("2019-11-10T14:00:00")}`,
      "Forklift operator",
      "KHUENE+NAGEL",
      "Sebes",
      "Logistics"
    )),
    (deputyBilla = new Experience(
      `${new Date("2018-01-10T14:00:00")}`,
      `${new Date("2019-11-10T14:00:00")}`,
      "Deputy Chief Shop",
      "Billa",
      "Sebes",
      "Sales"
    )),
    (chiefProfi = new Experience(
      `${new Date("2016-01-10T14:00:00")}`,
      `${new Date("2018-11-10T14:00:00")}`,
      "Chief Shop",
      "Profi",
      "Abrud",
      "Sales"
    )),
    (deputyPenny = new Experience(
      `${new Date("2013-01-10T14:00:00")}`,
      `${new Date("2014-11-10T14:00:00")}`,
      "Deputy Chief Shop",
      "Penny Market",
      "Sebes",
      "Sales"
    )),
    (workerKaufland = new Experience(
      `${new Date("2009-08-10T14:00:00")}`,
      `${new Date("2010-06-10T14:00:00")}`,
      "Commercial worker",
      "Kaufland",
      "Orastie",
      "Sales"
    )),
    (editorUniv = new Experience(
      `${new Date("2000-03-10T14:00:00")}`,
      `${new Date("2008-11-10T14:00:00")}`,
      "Copy Editor",
      "Alba Iulia University",
      "Alba Iulia",
      "Printing / Publishing"
    )),
  ],

  calculateTime(date_start, date_end) {
    let distance = Math.abs(date_end - date_start);

    const years = Math.floor(distance / (3600000 * 24 * 30 * 12));
    distance -= years * (3600000 * 24 * 30 * 12);
    const months = Math.floor(distance / (3600000 * 24 * 30));
    distance -= months * (3600000 * 24 * 30);
    const days = Math.floor(distance / (3600000 * 24));
    distance -= days * (3600000 * 24);
    const hours = Math.floor(distance / 3600000);
    distance -= hours * 3600000;
    const minutes = Math.floor(distance / 60000);
    distance -= minutes * 60000;
    const seconds = Math.floor(distance / 1000);
    return ` ${years} years ${months} month ${days} days `;
  },

  render() {
    const renderHook = document.getElementById("experience");
    const expList = document.createElement("ul");
    for (exp of this.experience) {
      const expEl = document.createElement("li");
      expEl.innerHTML = `
                <h3>${exp.position}</h3>
                <h4>${exp.date_start} - ${exp.date_end}</h4>
                <p>Company: ${exp.company}</p>
                <p>WorkTown: ${exp.workTown}</p>
                <p>Fields of activities: ${exp.fieldOfActivities}</p>
                <p>${this.calculateTime(
                  new Date(exp.date_start),
                  new Date(exp.date_end)
                )}</p>  
            
                    
            `;
      expList.append(expEl);
    }
    renderHook.append(expList);
  },
};

window.addEventListener("load", myInit);

function myInit() {
  experienceList.render();
  document.getElementById("age").innerHTML = new Date().getFullYear() - 1977;
}
