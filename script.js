const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container"); // Fixed selector
const gifResult = document.querySelector(".gif-result");
const butterflyLoader = document.querySelector(".butterfly-loader"); // Changed from heart
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// No button moves away
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes button - shows butterfly animation
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  butterflyLoader.style.display = "block"; // Changed from heartLoader

  const timeoutId = setTimeout(() => {
    butterflyLoader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
  }, 3000); // Same 3 second timing
});
