let currentIndex = 0;
const items = document.querySelectorAll('.apresentacao');
const totalItems = items.length;
const carrosselInner = document.querySelector('.text-pass');

// Função para atualizar a posição do carrossel
function updateCarousel() {
  const offset = -currentIndex * 100; // A largura de cada item é 100%
  carrosselInner.style.transform = `translateX(${offset}%)`;
}

// Navegar para o próximo item
document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems; // Ciclo através dos itens
  updateCarousel();
});

// Navegar para o item anterior
document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Ciclo através dos itens
  updateCarousel();
});



let currentIndex2 = 0;
const items2 = document.querySelectorAll('.apresentacao2');
const totalItems2 = items.length;
const carrosselInner2 = document.querySelector('.car_text');

// Função para atualizar a posição do carrossel
function updateCarousel2() {
  const offset = -currentIndex2 * 100; // A largura de cada item é 100%
  carrosselInner2.style.transform = `translateX(${offset}%)`;
}

// Navegar para o próximo item
document.getElementById('nextBtn2').addEventListener('click', () => {
  currentIndex2 = (currentIndex2 + 1) % totalItems2; // Ciclo através dos itens
  updateCarousel2();
});

// Navegar para o item anterior
document.getElementById('prevBtn2').addEventListener('click', () => {
  currentIndex2 = (currentIndex2 - 1 + totalItems2) % totalItems2; // Ciclo através dos itens
  updateCarousel2();
});


let currentIndex3 = 0;
const items3 = document.querySelectorAll('.apresentacao3');
const totalItems3 = items.length;
const carrosselInner3 = document.querySelector('.car_texts');

// Função para atualizar a posição do carrossel
function updateCarousel3() {
  const offset = -currentIndex3 * 100; // A largura de cada item é 100%
  carrosselInner3.style.transform = `translateX(${offset}%)`;
}

// Navegar para o próximo item
document.getElementById('nextBtn3').addEventListener('click', () => {
  currentIndex3 = (currentIndex3 + 1) % totalItems3; // Ciclo através dos itens
  updateCarousel3();
});

// Navegar para o item anterior
document.getElementById('prevBtn3').addEventListener('click', () => {
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
document.getElementById('BtnImgA').addEventListener('click', () => {
  Index = (Index + 1) % totalImage; // Ciclo através dos itens
  carrosselImagens();
});

// Navegar para o item anterior
document.getElementById('BtnImgV').addEventListener('click', () => {
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
document.getElementById('BtnImgA2').addEventListener('click', () => {
  Index2 = (Index2 + 1) % totalImage2; // Ciclo através dos itens
  carrosselImagens2();
});

// Navegar para o item anterior
document.getElementById('BtnImgV2').addEventListener('click', () => {
  Index2 = (Index2 - 1 + totalImage2) % totalImage2; // Ciclo através dos itens
  carrosselImagens2();
});



//formulario

// document.getElementById('siteForm').addEventListener("submit", function(event){
//   event.preventDefault();

//   var formData =  new FormData(this);


//   fetch("processa.php", {
//     method: "POST",
//     body: formData
//   })
//   .then(response=>response.text())
//   .then(data=>{
//     if (data.includes("sucesso")) {
//       document.getElementById("sucesso_mensagem").style.display = "block";
//       document.getElementById("erro_mensagem").style.display = "none";
//       this.reset();
      
//     }else{
//       document.getElementById("erro_mensagem").style.display = "block";
//       document.getElementById("sucesso_mensagem").style.display = "none";
//     }
//   })
//   .catch(error =>{
//     document.getElementById("erro_mensagem").style.display = "block";
//     document.getElementById("sucesso_mensagem").style.display = "none";
//   });

// });


