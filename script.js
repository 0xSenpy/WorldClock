setInterval(calcTime, 1000)
function calcTime(city, offset) {

    d = new Date();

    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    nd = new Date(utc + (3600000 * offset));

    let hour = nd.getHours();
    let min = nd.getMinutes();
    let sec = nd.getSeconds();
    am_pm = "AM"

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let currentTime = hour + " : "
        + min + " : " + sec + " " + am_pm;
    return currentTime;

}
setInterval(setTime, 1000)
function setTime() {
    document.getElementById("India")
        .innerHTML = calcTime('Bombay', '+5.5');

    document.getElementById("Singapore")
        .innerHTML = calcTime('Singapore', '+8');

    document.getElementById("London")
        .innerHTML = calcTime('London', '+1');

}
