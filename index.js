var deadline = new Date("Jan 1, 2023 15:37:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("days").innerHTML = '0';
        document.getElementById("hours").innerHTML = '0';
        document.getElementById("minutes").innerHTML = '0';
        document.getElementById("seconds").innerHTML = '0';
    }
}, 1000);

