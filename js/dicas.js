let currentIndex = 0;
const items = document.querySelectorAll('.dicas');
const totalItems = items.length;
const carrosselInner = document.querySelector('.dicas-pass');

// Função para atualizar a posição do carrossel
function updateCarousel() {
  const offset = -currentIndex * 100; // A largura de cada item é 100%
  carrosselInner.style.transform = `translateX(${offset}%)`;
}

// Navegar para o próximo item
document.getElementById('nextBtn4').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems; // Ciclo através dos itens
  updateCarousel();
});

// Navegar para o item anterior
document.getElementById('prevBtn4').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Ciclo através dos itens
  updateCarousel();
});


let currentIndex2 = 0;
const items2 = document.querySelectorAll('.dicas2');
const totalItems2 = items.length;
const carrosselInner2 = document.querySelector('.dicas-text');

// Função para atualizar a posição do carrossel
function updateCarousel2() {
  const offset = -currentIndex2 * 100; // A largura de cada item é 100%
  carrosselInner2.style.transform = `translateX(${offset}%)`;
}

// Navegar para o próximo item
document.getElementById('nextBtn5').addEventListener('click', () => {
  currentIndex2 = (currentIndex2 + 1) % totalItems2; // Ciclo através dos itens
  updateCarousel2();
});

// Navegar para o item anterior
document.getElementById('prevBtn5').addEventListener('click', () => {
  currentIndex2 = (currentIndex2 - 1 + totalItems2) % totalItems2; // Ciclo através dos itens
  updateCarousel2();
});


let currentIndex3 = 0;
const items3 = document.querySelectorAll('.dicas3');
const totalItems3 = items.length;
const carrosselInner3 = document.querySelector('.dicas-text2');

// Função para atualizar a posição do carrossel
function updateCarousel3() {
  const offset = -currentIndex3 * 100; // A largura de cada item é 100%
  carrosselInner3.style.transform = `translateX(${offset}%)`;
}

// Navegar para o próximo item
document.getElementById('nextBtn6').addEventListener('click', () => {
  currentIndex3 = (currentIndex3 + 1) % totalItems3; // Ciclo através dos itens
  updateCarousel3();
});

// Navegar para o item anterior
document.getElementById('prevBtn6').addEventListener('click', () => {
  currentIndex3 = (currentIndex3 - 1 + totalItems3) % totalItems3; // Ciclo através dos itens
  updateCarousel3();
});

//carrossel de imagens
let Index = 0;
const items10 = document.querySelectorAll('.imagem');
const totalImage = items10.length;
const carrosselImage = document.querySelector('.carrossel-i');

// Função para atualizar a posição do carrossel
function carrosselImagens() {
  const offset = -Index * 100; // A largura de cada item é 100%
  carrosselImage.style.transform = `translateX(${offset}%)`;
}

// Navegar para o próximo item
document.getElementById('BtnImgA4').addEventListener('click', () => {
  Index = (Index + 1) % totalImage; // Ciclo através dos itens
  carrosselImagens();
});

// Navegar para o item anterior
document.getElementById('BtnImgV4').addEventListener('click', () => {
  Index = (Index - 1 + totalImage) % totalImage; // Ciclo através dos itens
  carrosselImagens();
});



let Index2 = 0;
const items11 = document.querySelectorAll('.imagem2');
const totalImage2 = items11.length;
const carrosselImage2 = document.querySelector('.carrossel-i2');

// Função para atualizar a posição do carrossel
function carrosselImagens2() {
  const offset = -Index2 * 100; // A largura de cada item é 100%
  carrosselImage2.style.transform = `translateX(${offset}%)`;
}

// Navegar para o próximo item
document.getElementById('BtnImgA5').addEventListener('click', () => {
  Index2 = (Index2 + 1) % totalImage2; // Ciclo através dos itens
  carrosselImagens2();
});

// Navegar para o item anterior
document.getElementById('BtnImgV5').addEventListener('click', () => {
  Index2 = (Index2 - 1 + totalImage2) % totalImage2; // Ciclo através dos itens
  carrosselImagens2();
});

let Index3 = 0;
const items12 = document.querySelectorAll('.imagem3');
const totalImage3 = items12.length;
const carrosselImage3 = document.querySelector('.carrossel-i3');

// Função para atualizar a posição do carrossel
function carrosselImagens3() {
  const offset = -Index3 * 100; // A largura de cada item é 100%
  carrosselImage3.style.transform = `translateX(${offset}%)`;
}

// Navegar para o próximo item
document.getElementById('BtnImgA6').addEventListener('click', () => {
  Index3 = (Index3 + 1) % totalImage3; // Ciclo através dos itens
  carrosselImagens3();
});

// Navegar para o item anterior
document.getElementById('BtnImgV6').addEventListener('click', () => {
  Index3 = (Index3 - 1 + totalImage3) % totalImage3; // Ciclo através dos itens
  carrosselImagens3();
});