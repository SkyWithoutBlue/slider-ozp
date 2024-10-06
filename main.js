const images = ['./assets/slider_1.jpg', './assets/slider_2.jpg', './assets/slider_3.jpg'];

let currentIndex = 0;

const currentImage = document.getElementById('currentImage');
const imageCounter = document.getElementById('imageCounter');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Функция обновления изображения и счетчика
function updateImageAndCounter() {
    currentImage.src = images[currentIndex];
    imageCounter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

// Событие для кнопки "Назад"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImageAndCounter();
});

// Событие для кнопки "Вперед"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImageAndCounter();
});

// Инициализация: обновляем счетчик при первой загрузке страницы
updateImageAndCounter();
