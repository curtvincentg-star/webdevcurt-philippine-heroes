const navbarToggle = document.querySelector('.navbar-toggle');
const navbarmenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarmenu.classList.toggle('active');




});
const images = ["image.folder/rizal.jpg","image.folder/antonio luna.jpg","image.folder/andresbonifacio.jpg","image.folder/apolinario mabini.jpg","image.folder/gabriela silang.jpg","image.folder/lapulapu.jpg"];
let currentIndex = 1;
const frameImage = document.getElementById("frameImage");

function changeFrameImage() {
    frameImage.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        frameImage.src = images[currentIndex];
        frameImage.style.opacity = 1;
    }, 1000);
}
frameImage.src = images[0];
frameImage.style.opacity = 1;
setInterval(changeFrameImage, 3000);