// Array of pizza data (same as Home Kitchen)
const pizzas = [
  {
    img: 'assets/new-1.jpg',
    name: 'Home made pizza',
    price: '₹190',
    rating: '4.7',
    time: '50-79 min'
  },
  {
    img: 'assets/new-2.jpg',
    name: 'Home made pizza',
    price: '₹184',
    rating: '4.7',
    time: '15-29 min'
  },
  {
    img: 'assets/new-3.jpg',
    name: 'Home made pizza',
    price: '₹116',
    rating: '4.7',
    time: '30-40 min'
  },
  {
    img: 'assets/pizza1.jpg',
    name: 'Home made pizza',
    price: '₹190',
    rating: '4.7',
    time: '50-79 min'
  },
  {
    img: 'assets/pizza2.jpg',
    name: 'Home made pizza',
    price: '₹123',
    rating: '4.7',
    time: '50-79 min'
  },
  {
    img: 'assets/pizza3.jpg',
    name: 'Home made pizza',
    price: '₹190',
    rating: '4.7',
    time: '50-79 min'
  },
  {
    img: 'assets/pizza4.jpg',
    name: 'Home made pizza',
    price: '₹190',
    rating: '4.7',
    time: '50-79 min'
  },
  {
    img: 'assets/pizza5.jpg',
    name: 'Home made pizza',
    price: '₹19',
    rating: '4.7',
    time: '50-79 min'
  },
  {
    img: 'assets/pizza6.jpg',
    name: 'Home made pizza',
    price: '₹190',
    rating: '4.7',
    time: '50-79 min'
  },
  {
    img: 'assets/pizza7.jpg',
    name: 'Home made pizza',
    price: '₹190',
    rating: '4.7',
    time: '50-79 min'
  },
  {
    img: 'assets/pizza8.jpg',
    name: 'Home made pizza',
    price: '₹190',
    rating: '4.7',
    time: '50-79 min'
  },
  {
    img: 'assets/pizza9.jpg',
    name: 'Home made pizza',
    price: '₹190',
    rating: '4.7',
    time: '50-79 min'
  }
];

const carouselTrack = document.getElementById('carousel-track');
const leftBtn = document.getElementById('carousel-left');
const rightBtn = document.getElementById('carousel-right');

let startIdx = 0;
const visibleCount = 3;

function renderCarousel() {
  carouselTrack.innerHTML = '';
  for (let i = 0; i < visibleCount; i++) {
    const idx = (startIdx + i) % pizzas.length;
    const pizza = pizzas[idx];
    const card = document.createElement('article');
    card.className = 'food-card';
    card.innerHTML = `
      <img src="${pizza.img}" alt="${pizza.name}">
      <div class="food-info">
        <h3>${pizza.name}</h3>
        <div class="food-meta">
          <span>${pizza.price}</span>
          <span>⭐ ${pizza.rating}</span>
          <span>⏱ ${pizza.time}</span>
        </div>
      </div>
      <button class="add-cart-btn">+</button>
    `;
    carouselTrack.appendChild(card);
  }
}

// leftBtn.addEventListener('click', () => {
//   startIdx = (startIdx - 1 + pizzas.length) % pizzas.length;
//   renderCarousel();
// });

// rightBtn.addEventListener('click', () => {
//   startIdx = (startIdx + 1) % pizzas.length;
//   renderCarousel();
// });
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    startIdx = (startIdx - 1 + pizzas.length) % pizzas.length;
    renderCarousel();
  } else if (event.key === 'ArrowRight') {
    startIdx = (startIdx + 1) % pizzas.length;
    renderCarousel();
  }
});


// Initial render
renderCarousel();
setInterval(() => {
  startIdx = (startIdx + 1) % pizzas.length;
  renderCarousel();
}, 5000);