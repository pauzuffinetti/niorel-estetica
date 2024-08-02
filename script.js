document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let index = 0;

    document.querySelector('.carousel-button.next').addEventListener('click', function() {
        index = (index + 1) % totalItems;
        updateCarousel();
    });

    document.querySelector('.carousel-button.prev').addEventListener('click', function() {
        index = (index - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }
});
