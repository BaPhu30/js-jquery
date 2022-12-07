let orderSlide = 1

function moveSlide(n) {
    slideShow(orderSlide += n)
}

function slideShow(n) {
    let imgs = document.getElementsByClassName("img")
    console.log(imgs.length)
    if (n < 1) { orderSlide = imgs.length }

    if (n > imgs.length - 3) { orderSlide = 1 }

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none"
    }
    imgs[orderSlide - 1].style.display = "block"
    imgs[orderSlide].style.display = "block"
    imgs[orderSlide + 1].style.display = "block"
    imgs[orderSlide + 2].style.display = "block"
}