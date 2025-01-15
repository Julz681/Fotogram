let all = [
    { src: "./img/Ape.jpg", category: "animals" },
    { src: "./img/2.jpg", category: "landscape" },
    { src: "./img/3.jpg", category: "landscape" },
    { src: "./img/Duck.jpg", category: "animals" },
    { src: "./img/12.jpg", category: "cars" },
    { src: "./img/7.jpg", category: "landscape" },
    { src: "./img/8.jpg", category: "landscape" },
    { src: "./img/Lion.jpg", category: "animals" },
    { src: "./img/17.jpg", category: "cars" },
    { src: "./img/18.jpg", category: "cars" },
    { src: "./img/Lynx.jpg", category: "animals" },
    { src: "./img/Owl.jpg", category: "animals" },
    { src: "./img/10.jpg", category: "landscape" },
    { src: "./img/Parrot.jpg", category: "animals" },
    { src: "./img/Penguin.jpg", category: "animals" },
    { src: "./img/Elephant.jpg", category: "animals" },
    { src: "./img/Elo.jpg", category: "animals" },
    { src: "./img/Goat.jpg", category: "animals" },
    { src: "./img/4.jpg", category: "landscape" },
    { src: "./img/5.jpg", category: "landscape" },
    { src: "./img/Bird.jpg", category: "animals" },
    { src: "./img/6.jpg", category: "landscape" },
    { src: "./img/11.jpg", category: "cars" },
    { src: "./img/13.jpg", category: "cars" },
    { src: "./img/Blader.jpg", category: "animals" },
    { src: "./img/Cat.jpg", category: "animals" },
    { src: "./img/Dog.jpg", category: "animals" },
    { src: "./img/14.jpg", category: "cars" },
    { src: "./img/15.jpg", category: "cars" },
    { src: "./img/1.jpg", category: "landscape" },
    { src: "./img/16.jpg", category: "cars" },
    { src: "./img/9.jpg", category: "landscape" },
];

let currentImages = all;
let currentIndex = 0;

function filterImages(category) {
    currentImages = category === "all" ? all : all.filter(image => image.category === category);
    render(currentImages);
}

function render(images) {
    let photos = document.getElementById("photos");
    photos.innerHTML = "";
    images.forEach((image, index) => {
        let imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.dataset.index = index;
        imgElement.addEventListener("click", () => openOverlay(index));
        photos.appendChild(imgElement);
    });
}

function openOverlay(index) {
    currentIndex = index;
    updateOverlay();
    document.getElementById("overlay").style.display = "flex";
}

function updateOverlay() {
    let overlayImage = document.getElementById("overlayImage");
    let imageCount = document.getElementById("imageCount");
    overlayImage.src = currentImages[currentIndex].src;
    imageCount.textContent = `${currentIndex + 1} / ${currentImages.length}`;
}

function showNext() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateOverlay();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateOverlay();
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}



function DarkmodeToggle() {
    document.getElementById("darkmode_toggle").classList.toggle("darkmode_off");
    document.getElementById("header").classList.toggle("lightmode_footer_header");
    document.getElementById("footer").classList.toggle("lightmode_footer_header");
    document.getElementById("photos").classList.toggle("lightmode_opener");
    document.getElementById("opener").classList.toggle("lightmode_opener");
}




