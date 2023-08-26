// Variáveis
const btnOpenCookie = document.querySelector("#btnOpenCookie");
const btnTryAgain = document.querySelector("#btnTryAgain");

const cookieOpen = document.querySelector("#cookieOpen");
const cookieClosed = document.querySelector("#cookieClosed");

let numberLuck = Math.floor(Math.random() * 5) + 1;

let xTryAgain = 0;

console.log(`Seu numero da sorte: ${numberLuck}`);

// Eventos
btnOpenCookie.addEventListener("click", handleOpenCookieClick);
btnTryAgain.addEventListener("click", handleResetCookieClick);

// Funções
function handleOpenCookieClick() {
  animateCSS("#cookieOpen img", "shakeX");

  numberLuck === xTryAgain ? handleOpenCookie() : handleTryAgain();
}

function handleResetCookieClick() {
  xTryAgain = 0;
  numberLuck = Math.floor(Math.random() * 5) + 1;

  console.log(`Seu novo numero da sorte: ${numberLuck}`);

  cookieOpen.classList.toggle("hidden");
  cookieClosed.classList.toggle("hidden");
}

function handleOpenCookie() {
  cookieOpen.classList.toggle("hidden");
  cookieClosed.classList.toggle("hidden");
}

function handleTryAgain() {
  xTryAgain++;
}

/** Funções Utilitárias */

const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName, "animate__fast");

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });
