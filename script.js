function tebakUmur() {
    const tanggalLahir = 1;
    const bulanLahir = 6;
    const tahunLahir = 2004;

    const tanggal = parseInt(prompt("Masukkan tanggal lahir:"));
    const bulan = parseInt(prompt("Masukkan bulan lahir (dalam angka):"));
    const tahun = parseInt(prompt("Masukkan tahun lahir:"));

    const now = new Date();
    let umur = now.getFullYear() - tahun;

    if (now.getMonth() < bulan - 1 || (now.getMonth() === bulan - 1 && now.getDate() < tanggal)) {
        umur--;
    }

    if (tanggal === tanggalLahir && bulan === bulanLahir && tahun === tahunLahir) {
        alert(`Selamat! Kamu berhasil menebak umur saya, saya lahir pada tanggal ${tanggalLahir}/${bulanLahir}/${tahunLahir} dan saat ini berumur ${umur} tahun.`);
    } else {
        alert("Tebakanmu kurang tepat. Coba lagi!");
    }
}

tebakUmur();

function updateGreetings() {
    var today = new Date();
    var currentHour = today.getHours();
    var greetingsElement = document.getElementById('greetings');
    var currentTimeElement = document.getElementById('current-time');
    var greetings = '';

    if (currentHour < 12) {
        greetings = 'Good Morning';
    } else if (currentHour < 18) {
        greetings = 'Good Afternoon';
    } else {
        greetings = 'Good Night';
    }

    greetingsElement.innerText = greetings;
    currentTimeElement.innerText = 'Waktu Sekarang: ' + today.toLocaleTimeString();
}

updateGreetings();
setInterval(updateGreetings, 1000);

// JavaScript for carousel
var slideIndex = 0;


function showSlide() {
    var slides = document.querySelectorAll('.card');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    slideIndex++;
    showSlide();
}

function prevSlide() {
    slideIndex--;
    showSlide();
}

showSlide();
