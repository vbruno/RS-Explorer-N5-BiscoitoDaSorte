// Variáveis
const btnOpenCookie = document.querySelector("#btnOpenCookie");
const btnTryAgain = document.querySelector("#btnTryAgain");

const cookieOpen = document.querySelector("#cookieOpen");
const cookieClosed = document.querySelector("#cookieClosed");

// Eventos
btnOpenCookie.addEventListener("click", handleOpenCookieClick);
btnTryAgain.addEventListener("click", handleTryAgainClick);

// Funções
function handleOpenCookieClick() {
  cookieOpen.classList.toggle("hidden");
  cookieClosed.classList.toggle("hidden");
}

function handleTryAgainClick() {
  cookieOpen.classList.toggle("hidden");
  cookieClosed.classList.toggle("hidden");
}
