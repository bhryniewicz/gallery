const reviews = [
  {
    id: 1,
    name: "doggo1 byczek",
    job: "web-develeoper",
    img: "./images/corgi1.jpeg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet imperdiet egestas. Ut pretium ornare sagittis. Vestibulum imperdiet, velit et sagittis porta, sem turpis vehicula sapien, vel rutrum augue nisi a urna.",
  },
  {
    id: 2,
    name: "doggo2 kret",
    job: "web-develeoper",
    img: "./images/corgi2.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet imperdiet egestas. Ut pretium ornare sagittis. Vestibulum imperdiet, velit et sagittis porta, sem turpis vehicula sapien, vel rutrum augue nisi a urna.",
  },
  {
    id: 3,
    name: "doggo3 szachista",
    job: "web-develeoper",
    img: "./images/corgi3.jpeg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet imperdiet egestas. Ut pretium ornare sagittis. Vestibulum imperdiet, velit et sagittis porta, sem turpis vehicula sapien, vel rutrum augue nisi a urna.",
  },
  {
    id: 4,
    name: "doggo4 dwutakt",
    job: "web-develeoper",
    img: "./images/corgi4.jpeg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet imperdiet egestas. Ut pretium ornare sagittis. Vestibulum imperdiet, velit et sagittis porta, sem turpis vehicula sapien, vel rutrum augue nisi a urna.",
  },
];

const img = document.querySelector(".review__img");
const name = document.querySelector(".review__name");
const job = document.querySelector(".review__job");
const info = document.querySelector(".review__info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

function getRandomNumber() {
    return Math.floor(Math.random()*reviews.length);
}

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener('click', () => {
    showPerson(getRandomNumber());
})
