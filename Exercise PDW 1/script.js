document.getElementById('alertBtn').addEventListener('click', function() {
    var userName = prompt("My Name Is Yafi Daffa Andriansyah\nMy Student Id Is 20220140083\nI'm in class B\nWhat's your name?");
    var currentTime = new Date().toLocaleTimeString();
    
    if (userName === null) {
        return;
    }
    
    alert('Hello, ' + userName + '! The current time is ' + currentTime + '.');
});
