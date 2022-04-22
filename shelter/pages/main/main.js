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

const petsCards = document.querySelector(".pets_cards");
const LEFT_SLIDE = document.querySelector(".button_slider1");
const RIGHT_SLIDE = document.querySelector(".button_slider2");

function petsCard(i) {
  const cardItem = document.createElement("li");
  cardItem.classList.add("card");
  cardItem.classList.add("animation");
  petsCards.append(cardItem);

  const cardImage = document.createElement("img");
  cardImage.src = pets[i].img;
  cardItem.append(cardImage);

  const cardInfo = document.createElement("p");
  cardInfo.innerHTML = pets[i].name;
  cardItem.append(cardInfo);

  const cardButton = document.createElement("button");
  cardButton.classList.add("button_cards");
  cardButton.innerHTML = "Learn more";
  cardItem.append(cardButton);
}

function createThreeCards() {
  for (let i = 0; i < 3; i++) {
    petsCard(i);
  }
}

if (document.contains(petsCards)) {
  createThreeCards();
}

function deleteCards() {
  if (petsCards) {
    petsCards.innerHTML = "";
  }
}

let arrName = [];

function foundName() {
  const cardName = document.querySelectorAll(".card p");
  for (let i = 0; i < cardName.length; i++) {
    arrName.push(cardName[i].innerText);
  }
  console.log(arrName);
}

let cards = document.querySelectorAll(".card");

function createThreeRandomCards() {
  foundName();
  deleteCards();
  let i = 0;

  while (i < 3) {
    let number = Math.floor(Math.random() * 8);
    if (arrName.includes(pets[number].name)) {
      i--;
    } else {
      petsCard(number);
      arrName.push(pets[number].name);
    }
    i++;
  }
  arrName = [];
  cards = document.querySelectorAll(".card");
  cards.forEach((el) => el.addEventListener("click", petsPopup));
  console.log(arrName);
}

LEFT_SLIDE.addEventListener("click", createThreeRandomCards);
RIGHT_SLIDE.addEventListener("click", createThreeRandomCards);

const nav_burger = document.querySelector(".nav_burger");
const navigation = document.querySelector(".nav");
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
    console.log("ok");
    document.body.style.overflow = "hidden";
    backgroud.classList.add("background");
  } else {
    console.log("no");
    blockLogo.remove();
    h1.remove();
    span.remove();
    document.body.style.overflow = "scroll";
    backgroud.classList.remove("background");
  }
}

nav_burger.addEventListener("click", toggleMenu);

const navLinks = document.querySelectorAll(".nav_link");

function closeMenu(event) {
  if (event.target.classList.contains("nav_link")) {
    nav_burger.classList.remove("open");
    navigation.classList.remove("open");
    blockLogo.remove();
    h1.remove();
    span.remove();
    document.body.style.overflow = "scroll";
    backgroud.classList.remove("background");
  }
}

navLinks.forEach((el) => el.addEventListener("click", closeMenu));

function closeBurger(event) {
  if (event.target.className === "back background") {
    nav_burger.classList.remove("open");
    navigation.classList.remove("open");
    blockLogo.remove();
    h1.remove();
    span.remove();
    document.body.style.overflow = "scroll";
    backgroud.classList.remove("background");
  }
}

document.addEventListener("click", closeBurger);

const petsCardConteiner = document.querySelector(".pets");

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
      const cardPopupLarge = document.createElement("div");
      cardPopupLarge.classList.add("popupLarge");
      petsCardConteiner.append(cardPopupLarge);

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
}

cards.forEach((el) => el.addEventListener("click", petsPopup));
