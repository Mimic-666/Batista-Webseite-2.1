const sliders = document.querySelectorAll(".serviceSlider");

sliders.forEach(slider => {

    const images = slider.dataset.images.split(",");

    if (images.length <= 1) return;

    let current = 0;

    setInterval(() => {

        slider.style.opacity = "0";

        setTimeout(() => {

            current++;

            if (current >= images.length) {
                current = 0;
            }

            slider.src = images[current];

            slider.style.opacity = "1";

        }, 300);

    }, 4000);

});