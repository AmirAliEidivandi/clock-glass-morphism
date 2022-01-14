function clock() {
    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minute');
    let seconds = document.getElementById('second');
    let ampm = document.getElementById('ampm');

    let d = new Date();
    let h = d.getHours(),
        m = d.getMinutes();
        s = d.getSeconds();
    var am = "AM";

    if (h > 12) {
        h = h - 12;
        var am = "PM";
    }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = am;
}

let interval = setInterval(clock, 1000);