const openModal= document.querySelector(".main1");
const modal= document.querySelector(".modal");
const cerrar= document.querySelector(".modal_close");

const openModal2= document.querySelector(".main2");
const modal2= document.querySelector(".modal2");
const cerrar2= document.querySelector(".modal_close2");

const openModal3= document.querySelector(".main3");
const modal3= document.querySelector(".modal3");
const cerrar3= document.querySelector(".modal_close3");

const openModal4= document.querySelector(".main4");
const modal4= document.querySelector(".modal4");
const cerrar4= document.querySelector(".modal_close4");

//---------------------------------------------------------------------
openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal--show");
});

cerrar.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show");
});
//---------------------------------------------------------------------
openModal2.addEventListener("click", (e)=>{
    e.preventDefault();
    modal2.classList.add("modal--show2");
});

cerrar2.addEventListener("click", (e)=>{
    e.preventDefault();
    modal2.classList.remove("modal--show2");
});
//---------------------------------------------------------------------
openModal3.addEventListener("click", (e)=>{
    e.preventDefault();
    modal3.classList.add("modal--show3");
});

cerrar3.addEventListener("click", (e)=>{
    e.preventDefault();
    modal3.classList.remove("modal--show3");
});
//---------------------------------------------------------------------

openModal4.addEventListener("click", (e)=>{
    e.preventDefault();
    modal4.classList.add("modal--show4");
});

cerrar4.addEventListener("click", (e)=>{
    e.preventDefault();
    modal4.classList.remove("modal--show4");
});
//---------------------------------------------------------------------

const imgContainer = document.querySelector("#miHistoria .imgContainer");
const images = [
    "imagenes/yo.jpeg", 
    "imagenes/yo2.jpeg"
];
let currentIndex = 0;

function changeImage() {
    imgContainer.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Reinicia al llegar al final
}

// Cambia la imagen cada 5 segundos
setInterval(changeImage, 5000);

// Inicializa la primera imagen
changeImage();
