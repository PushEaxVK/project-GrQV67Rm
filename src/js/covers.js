'use strict';

const refs = {
  marquee: document.querySelector('.marquee__inner'),
  covers: document.querySelector('.covers'),
};

const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log('✅ Елемент з’явився в полі зору!');
      refs.marquee.classList.add('animation-loop'); // Додаємо клас
    } else {
      // console.log('❌ Елемент зник з екрану!');
      refs.marquee.classList.remove('animation-loop'); // Видаляємо клас
    }
  });
};

// Налаштування: коли більше ніж 50% елемента видно – реагувати
const options = {
  root: null, // null = відстеження у всьому вікні
  threshold: 0.5, // Спрацьовує, коли 50% елемента видно
};

// Створюємо спостерігач
const observer = new IntersectionObserver(callback, options);

// Починаємо спостереження за елементом
observer.observe(refs.covers);
