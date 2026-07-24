const modal = document.querySelector(".serviceModal");
const modalContent = document.querySelector(".serviceModalContent");

const modalTitle = document.querySelector(".modalTitle");
const modalImage = document.querySelector(".modalImage");
const modalBody = document.querySelector(".modalBody");

const openButtons = document.querySelectorAll(".openModal");
const closeButton = document.querySelector(".closeModal");

openButtons.forEach(button => {

    button.addEventListener("click", () => {

        const key = button.dataset.service;

        const service = services[key];

        if (!service) {

            console.warn(`Kein Eintrag für "${key}" gefunden.`);

            return;

        }

        modalTitle.textContent = service.title;

        const images = service.images || [service.image];
        let currentImage = 0;

        modalImage.src = images[currentImage];
        modalImage.alt = service.title;

        modalBody.innerHTML = service.content;

        if (window.modalImageInterval) {
            clearInterval(window.modalImageInterval);
        }

        if (images.length > 1) {
            window.modalImageInterval = setInterval(() => {

                modalImage.style.opacity = "0";

                setTimeout(() => {

                    currentImage++;

                    if (currentImage >= images.length) {
                        currentImage = 0;
                    }

                    modalImage.src = images[currentImage];
                    modalImage.style.opacity = "1";

                }, 300);

            }, 4000);
        }

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

    if (window.modalImageInterval) {
        clearInterval(window.modalImageInterval);
    }

}

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModal();

    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && modal.classList.contains("active")) {

        closeModal();

    }

});