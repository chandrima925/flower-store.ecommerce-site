// changing hero-section images
document.addEventListener("DOMContentLoaded", function () {
    var images = ["img/banner-img1.png", "img/banner-img2.png", "img/banner-imh3.png"]; // List of image URLs
    var currentIndex = 0;
    var imageContainer = document.getElementById("image-container");

    // Function to change the image
    function changeImage() {
        imageContainer.querySelector("img").src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Change image every 5 seconds (5000 milliseconds)
    setInterval(changeImage, 1000);
});
  
// data counter
(() => {
    const counter = document.querySelectorAll('.counter');
    // covert to array
    const array = Array.from(counter);
    // select array element
    array.map((item) => {
        // data layer
        let counterInnerText = item.textContent;

        let count = 1;
        let speed = item.dataset.speed / counterInnerText
        function counterUp() {
            item.textContent = count++
            if (counterInnerText < count) {
                clearInterval(stop);
            }
        }
        const stop = setInterval(() => {
            counterUp();
        }, speed);
    })
})();