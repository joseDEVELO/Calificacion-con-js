
/* Funcion al darle submit */
const btn = document.querySelector(".boton button");
const ocultar = document.querySelector(".contenedor1");
const show = document.querySelector(".contenedor2")

btn.addEventListener("click", ocultarContenedor);

function ocultarContenedor(){
    console.log(ocultar);
ocultar.style.display = "none"
show.style.display = "flex"
};

/* Capturando los valores del puntaje */
const puntajes = document.querySelectorAll(".numero button");

/* for (let index = 0; index < puntajes.length; index++) {
    console.log(puntajes[index]);
} */

puntajes.forEach(i => {
    i.addEventListener("click", function(e) {
        let puntajebtn = i.innerHTML
        let valor = document.querySelector("#puntaje")
        valor.innerHTML = puntajebtn
        
    } )
});

