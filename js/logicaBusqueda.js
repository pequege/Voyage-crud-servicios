let campoDeBusqueda = document.getElementById("campoDeBusqueda");
let resultadosDeBusqueda = document.getElementById("resultadosDeBusqueda");
let formularioBusqueda = document.getElementById("formularioBusqueda"); 
let mensaje = document.getElementById("sincoincidencias")
let search = document.getElementById("campoDeBusqueda");

search.addEventListener("focus", () => {
  paquetes.scrollIntoView({ behavior: "smooth" }, true);
});

formularioBusqueda.addEventListener("submit", (e) => {
  e.preventDefault();
});

const articulosTotales = document.querySelectorAll(".articulo");

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") e.target.value = "";
  if (e.target.matches("#campoDeBusqueda")) {
    articulosTotales.forEach((articulo) => {
      articulo.children[1].children[0].innerHTML
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
        ? ((articulo.style.display = "flex"),
          articulo.classList.remove("articuloOculto"))
        : ((articulo.style.display = "none"),
          articulo.classList.add("articuloOculto"));
    });
    const articulosOcultos = document.querySelectorAll(".articuloOculto");
    articulosOcultos.length >= articulosTotales.length
      ? (mensaje.className = "fs-1 text-center text-light my-5")
      : (mensaje.className = "fs-2 d-none");
  }
});
