const navBar = document.querySelector(".nav_menu_bars");
const navUl = document.querySelector(".nav_ul");
const navLinks = document.querySelectorAll(".nav_ul li");

function add_removeClass() {
  navBar.classList.toggle("nav_menu_bars_active");
  navUl.classList.toggle("nav_ul_active");
}

navBar.addEventListener("click", () => {
  add_removeClass();
});

navLinks.forEach((e) => {
  e.addEventListener("click", () => {
    add_removeClass();
  });
});

function widthSize() {
  let ancho = window.innerWidth;
  if (ancho > 750) {
    console.log("oi");
    navBar.classList.remove("nav_menu_bars_active");
    navUl.classList.remove("nav_ul_active");
  }
  console.log(ancho);
}

const botaoAlternarTema = document.getElementById("alternar-tema");
const corpo = document.body;

botaoAlternarTema.addEventListener("click", () => {
  corpo.classList.toggle("modo-escuro");
  // Salva a preferência do usuário no localStorage
  if (corpo.classList.contains("modo-escuro")) {
    localStorage.setItem("tema", "escuro");
  } else {
    localStorage.setItem("tema", "claro");
  }
});

// Verifica a preferência do usuário no localStorage e aplicar o tema correspondente
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "escuro") {
  corpo.classList.add("modo-escuro");
}


window.addEventListener("resize", widthSize);
