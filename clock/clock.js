let fieldData;

function clock(){
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let period = "AM";

    //set yhe time period(AM/PM)
    if(hours >= 12) {
        period = "PM";
    }

    //set the 12-hour clock format
    hours = hours > 12 ? hours % 12 : hours;

    //add the 0 for the values lower than 10
    if(hours < 10) {
        hours = "0" + hours;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector(".period").innerHTML = period;
    document.querySelector('.seconds').innerHTML = seconds;
    
}

window.addEventListener('onWidgetLoad', function(obj) {
    fieldData = obj.detail.fieldData;
    clock();
    setInterval(clock,1000);
    
    //Get the date in javascript
    let datetoday = new Date();
    let dayNumber = datetoday.getDate();
    let days = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let dayName = days[datetoday.getDay()];
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"]
    let monthName = months[datetoday.getMonth()];
    console.log(dayNumber + " " + dayName + " " + monthName);
    document.querySelector(".day").innerHTML = dayName + " " + " " + dayNumber;
    document.querySelector(".date").innerHTML = dayNumber;
    document.querySelector(".month").innerHTML = monthName;
});