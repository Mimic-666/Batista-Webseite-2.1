const sliders = [

    {
        selector: ".leftSide .bg",
        images: [
            "images/landing/innen1.jpg",
            "images/landing/innen2.jpg",
            "images/landing/innen3.jpg"
        ]
    },

    {
        selector: ".rightSide .bg",
        images: [
            "images/landing/aussen1.jpg",
            "images/landing/aussen2.jpg",
            "images/landing/aussen3.jpg"
        ]
    }

];

sliders.forEach(slider => {

    const elements = document.querySelectorAll(slider.selector);

    let index = 0;

    elements.forEach((bg, i) => {

        bg.style.backgroundImage = `url(${slider.images[i]})`;

    });

    setInterval(() => {

        elements[index].classList.remove("active");

        index = (index + 1) % elements.length;

        elements[index].classList.add("active");

    }, 5000);

});