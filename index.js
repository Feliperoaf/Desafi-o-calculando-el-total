const precio = 400000;
let contador = 0;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let btnMas = document.querySelector("#btnMas");
let btnMenos = document.querySelector("#btnMenos");

let cantidad = document.querySelector(".cantidad");
cantidad.innerHTML = contador;

let valorTotal = document.querySelector(".valor-total");

function actualizarTotal() {
    valorTotal.innerHTML = precio * contador;
}
btnMas.addEventListener("click", () => {
    contador += 1;
    cantidad.innerHTML = contador;
    actualizarTotal();
});
btnMenos.addEventListener("click", () => {
    contador -= 1;
    if (contador < 0) {
        contador = 0;
    }
    cantidad.innerHTML = contador;
    actualizarTotal();
});
