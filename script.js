const buttons = document.querySelectorAll(".button");
const valueToIncrease = document.querySelector(".valueToIncrease");
const errorP = document.querySelector(".error");
const clearButton = document.querySelector(".clearButton");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const buttonTextContent = e.target.textContent;
    if (buttonTextContent === "Increment") {
      if (valueToIncrease.textContent === "0") {
        errorP.style.display = "none";
        clearButton.style.display = "block";
      }
      valueToIncrease.textContent = String(
        Number(valueToIncrease.textContent) + 1
      );
    }
    if (buttonTextContent === "Decrement") {
      if (valueToIncrease.textContent === "0") {
        errorP.style.display = "block";
      } else {
        if (valueToIncrease.textContent === "1") {
          clearButton.style.display = "none";
        }
        valueToIncrease.textContent = String(
          Number(valueToIncrease.textContent) - 1
        );
      }
    }
    if (buttonTextContent === "Clear") {
      valueToIncrease.textContent = "0";
      button.style.display = "none";
    }
  });
});
