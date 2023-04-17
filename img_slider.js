const nextImgEl = document.querySelector(".next");

const allImgsEl = document.querySelectorAll("img");
const prevImgEl = document.querySelector(".prev");

const imgcontainerEl = document.querySelector(".img-container");

let currentImg = 1 ;
let timeout;

nextImgEl.addEventListener("click" , ()=> {
    currentImg++;
    clearTimeout(timeout)
    updateImage();
});


prevImgEl.addEventListener("click" , ()=> {
    currentImg--;
    clearTimeout(timeout)
    updateImage();
});

updateImage();

function updateImage() {
    if (currentImg > allImgsEl.length) {
        currentImg = 1
    }

    else if (currentImg < 1) {
        currentImg = allImgsEl.length
    }
    imgcontainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`

    timeout = setTimeout(() => {
        currentImg++
        updateImage()
    }, 3000);
}