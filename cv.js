class Experience {

    date_start;
    date_end;
    position;
    company;
    workTown;
    fieldOfActivities;

    constructor(date_start, date_end, position, company, workTown, fieldOfActivities){
        this.date_start=date_start;
        this.date_end=date_end;
        this.position=position;
        this.company=company;
        this.workTown=workTown;
        this.fieldOfActivities=fieldOfActivities;
    }
}

const experienceList={
    experience:[
        forklift=new Experience(`${new Date('2020-01-10T14:00:00')}`,`${new Date('2023-11-10T14:00:00')}`,'Forklift operator','KHUENE+NAGEL','Sebes','Logistics'),

        // deputyBilla=new Experience('Mar 2014 - Feb 2015','Deputy Chief Shop','Billa','Sebes','Sales'),

        // chiefProfi=new Experience('Feb 2013 - Aug 2013', 'Chief Shop', 'Abrud', 'Sales'),

        // deputyPenny=new Experience('Aug 2012 - Aug 2013','Deputy Chief Shop','Penny Market','Sebes','Sales'),

        // workerKaufland=new Experience('Feb 2010 - Aug 2011','Commercial worker','Kaufland','Orastie','Sales'),

        // editorUniv=new Experience('Mar 2000 - Oct 2008','Copy Editor','Alba Iulia University','Alba Iulia','Printing / Publishing')

    ],


    calculateTime(date_start,date_end){
        // Calculate the time difference in milliseconds
        const timeDifference = date_end - date_start;

        // Convert the time difference to days, hours, minutes, and seconds
        const millisecondsInSecond = 1000;
        const millisecondsInMinute = 60 * millisecondsInSecond;
        const millisecondsInHour = 60 * millisecondsInMinute;
        const millisecondsInDay = 24 * millisecondsInHour;

        const days = Math.floor(timeDifference / millisecondsInDay);
        const hours = Math.floor((timeDifference % millisecondsInDay) / millisecondsInHour);
        const minutes = Math.floor((timeDifference % millisecondsInHour) / millisecondsInMinute);
        const seconds = Math.floor((timeDifference % millisecondsInMinute) / millisecondsInSecond);

        return(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

    },


    render(){
        const renderHook=document.getElementById('experience');
        const expList=document.createElement('ol');
        for(exp of this.experience){
            const expEl=document.createElement('li');
            expEl.innerHTML=`
            <div>
                <h2>${exp.date_start} - ${exp.date_end}</h2>
                <h3>${exp.position}</h3>
                <p>Company: ${exp.company}</p>
                <p>WorkTown: ${exp.workTown}</p>
                <p>Fields of activities: ${exp.fieldOfActivities}</p>
                ${console.log(this.calculateTime(new Date(exp.date_start),new Date(exp.date_end)))}
            </div>
            
            `;
            expList.append(expEl);
        }
        renderHook.append(expList);
    },


};

window.addEventListener('load',myInit, true);

function myInit(){
    ageCalculation.addCurrentYear();
    experienceList.render();
}