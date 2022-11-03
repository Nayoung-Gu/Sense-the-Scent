import quotes from "./quotes.js";
import questions from "./questions.js";
import perfumes from "./results.js";

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
        const resultBrand = result.querySelector(".result-brand");
        const resultProduct = result.querySelector(".result-product");
        const resultKeywords = result.querySelector(".result-keywords");
        const resultDesc = result.querySelector(".result-description");

        const korLink = result.querySelector(".kor-link");
        const engLink = result.querySelector(".eng-link");

        resultImg.src = perfumes[preference]["img"];
        resultBrand.innerText = perfumes[preference]["brand"];
        resultProduct.innerText = perfumes[preference]["product"];

        perfumes[preference]["keywords"].map((keyword) => {
            const keywordItem = document.createElement("li");
            keywordItem.innerText = `#${keyword}`;
            resultKeywords.appendChild(keywordItem);
        });
        resultDesc.innerText = perfumes[preference]["desc"];

        korLink.setAttribute("href", perfumes[preference]["korLink"]);
        engLink.setAttribute("href", perfumes[preference]["engLink"]);
    } else {
        progress.style.width = ` calc(100 / 9 * ${num}%)`;
        title.innerText = questions[num]["title"];
        questionType.value = questions[num]["type"];
        firstAnswer.querySelector("img").src = questions[num]["A"];
        firstAnswer
            .querySelector("img")
            .setAttribute("alt", questions[num]["A_des"]);
        secondAnswer.querySelector("img").src = questions[num]["B"];
        secondAnswer
            .querySelector("img")
            .setAttribute("alt", questions[num]["B_des"]);
        num++;
    }
}

// Go back to home
homeBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
        location.reload();
    })
);
