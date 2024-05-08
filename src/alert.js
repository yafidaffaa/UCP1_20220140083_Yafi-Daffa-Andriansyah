    function showWelcomeAlert() {
        alert("Selamat datang di Website Pancasila\nYafi Daffa Andriansyah\n20220140083\nB");
    }

    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        var timeString = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);

        document.getElementById("realtimeClock").innerHTML = timeString;

        setTimeout(updateClock, 1000);
    }

    function padZero(num) {
        return (num < 10 ? "0" : "") + num;
    }

    window.onload = function() {
        updateClock();
    };