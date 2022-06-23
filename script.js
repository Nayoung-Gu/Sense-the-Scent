const start = document.querySelector(".start");
const startBtn = document.querySelector(".start-btn");
const quoteCont = document.querySelector(".quote-container");
const questionCont = document.querySelector(".question");
const questionType = document.getElementById("type");
const progress = document.querySelector(".progress-bar");
const lightness = document.getElementById("lightness");
const sharpness = document.getElementById("sharpness");
const floral = document.getElementById("floral");
const title = document.getElementById("title");
const firstAnswer = document.getElementById("A");
const secondAnswer = document.getElementById("B");
const loading = document.querySelector(".result-loading");
const result = document.querySelector(".result");
const homeBtns = document.querySelectorAll(".home");

let lightnessVal = +lightness.value;
let sharpnessVal = +sharpness.value;
let floralVal = +floral.value;

const quotes = [
  {
    quote: "Perfume is like a new dress, it makes you quite simply marvellous.",
    author: "Estee Lauder",
  },
  {
    quote: "Perfume is a story in odour, sometimes poetry in memory.",
    author: "Jean-Claude Ellena",
  },
  {
    quote: "Perfume is the art that makes memory speak.",
    author: "Francis Kurkdjian",
  },
  {
    quote: "Fragrance makes us dream.",
    author: "Francois Nars",
  },
  {
    quote: "Your fragrance is your message, your scented slogan.",
    author: "Maurice Roucel",
  },
  {
    quote: "Nothing brings to life again a forgotten memory like fragrance.",
    author: "Christopher Poindexter",
  },
  {
    quote: "Fragrances fill the senses with the mysterious.",
    author: "Diana Vreeland",
  },
  {
    quote: "Perfume: a cocktail of memories and emotion.",
    author: "Jeffrey Stepakoff",
  },
  {
    quote: "Perfume is the key to our memories.",
    author: "Kate Lord Brown",
  },
  {
    quote: "Scent is the strongest tie to memory.",
    author: "Maggie Stiefvater",
  },
];

// Show random quote on start page
function getQuote() {
  const quote = quoteCont.querySelector(".quote");
  const quoteAuthor = quoteCont.querySelector(".quote-author");
  const index = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[index]["quote"];
  quoteAuthor.innerText = `- ${quotes[index]["author"]}`;
}

getQuote();

// Set first order of questions
let num = 1;

// Questions list
const questions = {
  1: {
    title: "내가 행복함을 느끼는 시간대는?",
    type: "lightness",
    A: "images/1_day.jpg",
    B: "images/1_night.jpg",
  },
  2: {
    title: "오랜만의 휴식! 어떻게 시간을 보낼까?",
    type: "lightness",
    A: "images/2_summer.jpg",
    B: "images/2_fall.jpg",
  },
  3: {
    title: "바다에 놀러 갔다. 인생샷은 언제?",
    type: "lightness",
    A: "images/3_whitesand.jpg",
    B: "images/3_sunset.jpg",
  },
  4: {
    title: "평소에 좋아하는 옷 스타일은?",
    type: "sharpness",
    A: "images/4_formal.jpg",
    B: "images/4_casual.jpg",
  },
  5: {
    title: "여가 시간을 즐기고 싶은 장소는?",
    type: "sharpness",
    A: "images/5_party.jpg",
    B: "images/5_family.jpg",
  },
  6: {
    title: "주말 오후 책을 읽는다면 그 장소는?",
    type: "sharpness",
    A: "images/6_library.jpg",
    B: "images/6_hotel.jpg",
  },
  7: {
    title: "산책을 한다면 그 장소는?",
    type: "floral",
    A: "images/7_flowerGarden.jpg",
    B: "images/7_garden.jpg",
  },
  8: {
    title: "꽃집에 들어가면 눈에 띄는 것은?",
    type: "floral",
    A: "images/8_floralBouquet.jpg",
    B: "images/8_singleFloral.jpg",
  },
  9: {
    title: "커피가 품절이다! 그럼 뭘 마시지?",
    type: "floral",
    A: "images/9_juice.jpg",
    B: "images/9_lemonade.jpg",
  },
};

// Result items list
let perfumes = {
  LsharpF: { product: "Miss Dior", img: "images/sample.jpg" },
  LsharpG: { product: "Miss Dior", img: "images/sample.jpg" },
  LsmoothF: { product: "Miss Dior", img: "images/sample.jpg" },
  LsmoothG: { product: "Miss Dior", img: "images/sample.jpg" },
  DsharpF: { product: "Miss Dior", img: "images/sample.jpg" },
  DsharpG: { product: "Miss Dior", img: "images/sample.jpg" },
  DsmoothF: { product: "Miss Dior", img: "images/sample.jpg" },
  DsmoothG: { product: "Miss Dior", img: "images/sample.jpg" },
};

// Start a test
startBtn.addEventListener("click", () => {
  start.classList.add("hide");
  questionCont.classList.remove("hide");
  next();
});

// Store result count
firstAnswer.addEventListener("click", () => {
  let type = questionType.value;
  if (type === "lightness") {
    lightnessVal += 1;
  } else if (type === "sharpness") {
    sharpnessVal += 1;
  } else if (type === "floral") {
    floralVal += 1;
  }
  next();
});

secondAnswer.addEventListener("click", next);

// Move to a next question
function next() {
  if (num === 10) {
    questionCont.classList.add("hide");
    loading.classList.remove("hide");
    setTimeout(() => {
      loading.classList.add("hide");
      result.classList.remove("hide");
    }, 2500);
    // Define preference
    let preference = "";
    lightnessVal > 1 ? (preference += "L") : (preference += "D");
    sharpnessVal > 1 ? (preference += "sharp") : (preference += "smooth");
    floralVal > 1 ? (preference += "F") : (preference += "G");

    // Show result
    const resultImg = result.querySelector(".result-img");
    const resultProduct = result.querySelector(".result-product");
    resultImg.src = perfumes[preference]["img"];
    resultProduct.innerText = perfumes[preference]["product"];
  } else {
    progress.style.width = ` calc(100 / 9 * ${num}%)`;
    title.innerText = questions[num]["title"];
    questionType.value = questions[num]["type"];
    firstAnswer.querySelector("img").src = questions[num]["A"];
    secondAnswer.querySelector("img").src = questions[num]["B"];
    num++;
  }
}

// Go back to home
homeBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    location.reload();
  })
);
