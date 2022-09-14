/* Validate option */
const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".btn-n-primary");

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    button.disabled = false;
  });
});

/* Media querie */
const textsBold = document.querySelectorAll(".txt-purple");
const textsHidden = document.querySelectorAll(".hidden");
const textPrice = document.querySelectorAll(".item-voucher-detail.fw-700");
const textsSubtitleBlod = document.querySelectorAll(
  ".item-voucher-detail:nth-child(odd):not(.item-voucher-detail.fw-700)"
);

const mediumDp = matchMedia("(min-width: 768px)");
const changeSize = (mql) => {
  if (mql.matches) {
    textsBold.forEach((txt) => {
      txt.classList.toggle("txt-purple");
    });
    textsHidden.forEach((txt) => {
      txt.classList.toggle("hidden");
    });
    textPrice.forEach((txt) => {
      txt.classList.add("h4");
    });
    textsSubtitleBlod.forEach((txt) => {
      txt.classList.add("fw-700");
    })
    textsBold[1].classList.add("fw-700");
    textsBold[2].classList.add("fw-700");
    textsBold[1].children[0].style.display = "none";
    textsBold[2].children[0].style.display = "none";
  } else {
    textsBold.forEach((txt) => {
      txt.classList.add("txt-purple");
    });
    textsHidden.forEach((txt) => {
      txt.classList.add("hidden");
    });
    textPrice.forEach((txt) => {
      txt.classList.remove("h4");
    });
    textsBold[1].classList.remove("fw-700");
    textsBold[2].classList.remove("fw-700");
    textsBold[1].children[0].style.display = "initial";
    textsBold[2].children[0].style.display = "initial";
  }
};

mediumDp.addEventListener("change", changeSize);
changeSize(mediumDp);
