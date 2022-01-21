window.addEventListener("scroll",() => {

    var bgImg = document.querySelector("section.banner");

    console.log(bgImg.clientHeight);

    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > bgImg.clientHeight);
})