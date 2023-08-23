const binInput = document.querySelector("#bin-input");
const converterBtn = document.querySelector("#converter-btn");
const resultContainer = document.querySelector("#dec-result");
const errorMessage = document.querySelector(".error-message");

const converter = (binary) => {
  return parseInt(binary, 2);
};

converterBtn.addEventListener("click", () => {
  const verification = () => {
    for (let i = 0; i < binInput.value.length; i++) {
      if (binInput.value[i] !== "0" && binInput.value[i] !== "1") {
        return false;
      }
    }
    return true;
  };
  if (!verification()) {
    console.log(verification());
    errorMessage.style.display = "block";
    return;
  } else {
    errorMessage.style.display = "none";
  }

  const bin = Number(binInput.value);

  resultContainer.textContent = converter(bin);
});
