const btn = document.querySelector(".boton button");
const ocultar = document.querySelector(".contenedor1");
const show = document.querySelector(".contenedor2")

btn.addEventListener("click", ocultarContenedor)
function ocultarContenedor(){
    console.log(ocultar);
ocultar.style.display = "none"
show.style.display = "flex"
};
