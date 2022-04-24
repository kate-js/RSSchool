const pets = [
  {
    id: 1,
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 2,
    name: "Sophia",
    img: "../../assets/images/pets-sofia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 3,
    name: "Woody",
    img: "../../assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    id: 4,
    name: "Scarlett",
    img: "../../assets/images/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 5,
    name: "Katrine",
    img: "../../assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 6,
    name: "Timmy",
    img: "../../assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    id: 7,
    name: "Freddie",
    img: "../../assets/images/pets-freadi.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 8,
    name: "Charly",
    img: "../../assets/images/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

const startPage = document.querySelector("#start_page");
const previousPage = document.querySelector("#previous_page");
const currentPage = document.querySelector("#current_page");
const nextPage = document.querySelector("#next_page");
const lastPage = document.querySelector("#last_page");
let cards;
console.log(cards);

const ourPets = [];
let countCard;

function checkWidthWindow() {
  if (window.innerWidth >= 1280) {
    countCard = 8;
  }

  if (window.innerWidth < 1280 && window.innerWidth >= 768) {
    countCard = 6;
  }

  if (window.innerWidth < 768) {
    countCard = 3;
  }
}

let page = 1;
currentPage.innerText = page;
let array = [];
let number = 0;

const random = () => {
  checkWidthWindow();
  let i = 0;
  while (i < countCard) {
    number = Math.floor(Math.random() * 8);
    if (array.includes(pets[number])) {
      i--;
    } else {
      array.push(pets[number]);
    }
    i++;
  }
  ourPets.push(...array);
  array = [];
};

while (ourPets.length < 48) {
  random();
}

const petsCards = document.querySelector(".pets_cards");

let start = 0;
let end = countCard;
let arrayPain = [];
let last = 6;

function paintResult(arr) {
  petsCards.innerHTML = "";
  for (let k = 0; k < arr.length; k++) {
    petsCard(k);
  }
  checkPage();
  console.log(cards);
  cards = document.querySelectorAll(".card");
  cards.forEach((el) => el.addEventListener("click", petsPopup));
}

if (document.contains(petsCards)) {
  arrayPain = ourPets.slice(start, end);
  paintResult(arrayPain);
}

function checkPage() {
  if (page == 1) {
    startPage.disabled = true;
    previousPage.disabled = true;
    lastPage.disabled = false;
    nextPage.disabled = false;
  }
  if (page >= 2 && page <= 5) {
    startPage.classList.add("active");
    previousPage.classList.add("active");
    startPage.disabled = false;
    previousPage.disabled = false;
    lastPage.disabled = false;
    nextPage.disabled = false;
  }

  if (window.innerWidth < 1280 && window.innerWidth >= 768) {
    last = 8;
  }

  if (window.innerWidth < 768) {
    last = 16;
  }

  if (page == last) {
    lastPage.disabled = true;
    nextPage.disabled = true;
    startPage.disabled = false;
    previousPage.disabled = false;
  }
}

function nextPages() {
  start += countCard;
  end += countCard;
  page += 1;
  currentPage.innerText = page;
  arrayPain = ourPets.slice(start, end);
  paintResult(arrayPain);
}

nextPage.addEventListener("click", nextPages);

function previuosPages() {
  start -= countCard;
  end -= countCard;
  page -= 1;
  currentPage.innerText = page;
  arrayPain = ourPets.slice(start, end);
  paintResult(arrayPain);
}

previousPage.addEventListener("click", previuosPages);

function lastPages() {
  end = 48;
  page = last;
  start = (last - 1) * countCard;
  currentPage.innerText = page;
  arrayPain = ourPets.slice(start, end);
  paintResult(arrayPain);
}

lastPage.addEventListener("click", lastPages);

function startPages() {
  start = 0;
  end = countCard;
  page = 1;
  currentPage.innerText = page;
  arrayPain = ourPets.slice(start, end);
  paintResult(arrayPain);
}

startPage.addEventListener("click", startPages);

function petsCard(i) {
  const cardItem = document.createElement("li");
  cardItem.classList.add("card");
  cardItem.classList.add("animation");
  petsCards.append(cardItem);

  const cardImage = document.createElement("img");
  cardImage.src = arrayPain[i].img;
  cardItem.append(cardImage);

  const cardInfo = document.createElement("p");
  cardInfo.innerHTML = arrayPain[i].name;
  cardItem.append(cardInfo);

  const cardButton = document.createElement("button");
  cardButton.classList.add("button_cards");
  cardButton.innerHTML = "Learn more";
  cardItem.append(cardButton);
}

const nav_burger = document.querySelector(".nav_burger");
const navigation = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav_link");
const forBack = document.querySelector("#forBack");
const background = document.querySelector(".back");

const blockLogo = document.createElement("div");
const h1 = document.createElement("h1");
const span = document.createElement("span");
const backgroud = document.querySelector(".back");

function createLogo() {
  blockLogo.classList.add("header_logo");
  blockLogo.classList.add("header_logo_nav");
  h1.innerHTML = "Cozy House";
  span.innerHTML = "Shelter for pets in Boston";
  blockLogo.append(h1);
  blockLogo.append(span);
  navigation.append(blockLogo);
}

function toggleMenu() {
  nav_burger.classList.toggle("open");
  navigation.classList.toggle("open");

  if (navigation.classList.contains("open")) {
    createLogo();
    document.body.style.overflow = "hidden";
    backgroud.classList.add("background");
  } else {
    blockLogo.innerHTML = "";
    blockLogo.remove();
    document.body.style.overflow = "scroll";
    backgroud.classList.remove("background");
  }
}

nav_burger.addEventListener("click", toggleMenu);

function closeMenu(event) {
  if (event.target.classList.contains("nav_link")) {
    nav_burger.classList.remove("open");
    navigation.classList.remove("open");
    blockLogo.innerHTML = "";
    blockLogo.remove();
    document.body.style.overflow = "scroll";
    backgroud.classList.remove("background");
  }
}

navLinks.forEach((el) => el.addEventListener("click", closeMenu));

function closeBurger(event) {
  if (event.target.className === "back background") {
    nav_burger.classList.remove("open");
    navigation.classList.remove("open");
    blockLogo.innerHTML = "";
    blockLogo.remove();
    document.body.style.overflow = "scroll";
    backgroud.classList.remove("background");
  }
}

document.addEventListener("click", closeBurger);

const petsCardConteiner = document.querySelector(".pets");
const cardPopupLarge = document.createElement("div");

function petsPopup(event) {
  let cardtest = event.currentTarget.innerText;
  let nametest = cardtest.slice(0, -12);

  for (let i = 0; i < pets.length; i++) {
    const STATS = [
      {
        title: "Age: ",
        value: pets[i].age,
      },
      {
        title: "Inoculations: ",
        value: pets[i].inoculations,
      },
      {
        title: "Diseases: ",
        value: pets[i].diseases,
      },
      {
        title: "Parasites: ",
        value: pets[i].parasites,
      },
    ];

    if (nametest == pets[i].name) {
      cardPopupLarge.classList.add("popupLarge");
      petsCardConteiner.append(cardPopupLarge);

      const buttonClose = document.createElement("botton");
      buttonClose.classList.add("button_close");
      cardPopupLarge.append(buttonClose);

      const cardImage = document.createElement("img");
      cardImage.classList.add("popupImage");
      cardImage.src = pets[i].img;
      cardPopupLarge.append(cardImage);

      const popupInfo = document.createElement("div");
      popupInfo.classList.add("popupInfo");
      cardPopupLarge.append(popupInfo);

      const popupName = document.createElement("h3");
      popupName.classList.add("popuph3");
      popupName.innerHTML = pets[i].name;
      popupInfo.append(popupName);

      const popupBreed = document.createElement("h4");
      popupBreed.classList.add("popuph4");
      popupBreed.innerHTML = pets[i].type + " - " + pets[i].breed;
      popupInfo.append(popupBreed);

      const popupInformation = document.createElement("p");
      popupInformation.classList.add("popupDescription");
      popupInformation.innerHTML = pets[i].description;
      popupInfo.append(popupInformation);

      const popupMainInfo = document.createElement("ul");
      popupMainInfo.classList.add("popupMainInfo");
      popupMainInfo.style.listStyle = "inside";
      popupInfo.append(popupMainInfo);

      for (let k = 0; k < 4; k++) {
        const popupLi = document.createElement("li");
        popupLi.classList.add("popupLi");
        popupMainInfo.append(popupLi);
        const popupSpan = document.createElement("span");
        const popupSpan2 = document.createElement("span");
        popupLi.append(popupSpan);
        popupLi.append(popupSpan2);
        popupSpan.innerText = STATS[k].title;
        popupSpan2.innerHTML = STATS[k].value;
        popupLi.style.listStyle = "inside";
      }
    }
  }
  document.body.style.overflow = "hidden";
  background.classList.add("background");
  const buttonClose1 = document.querySelector(".button_close");
  buttonClose1.addEventListener("click", closePopup);
}

function closePopup() {
  cardPopupLarge.innerHTML = "";
  cardPopupLarge.remove();
  background.classList.remove("background");
  document.body.style.overflow = "scroll";
  nav_burger.classList.remove("open");
  navigation.classList.remove("open");
  blockLogo.innerHTML = "";
  blockLogo.remove();
  document.body.style.overflow = "scroll";
  backgroud.classList.remove("background");
}

background.addEventListener("click", closePopup);
