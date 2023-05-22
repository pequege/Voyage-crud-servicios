import paquetes from '../db/paquetes.json' assert {type:'json'};

if (!localStorage.getItem("listaPaquetes")) {
    // Los datos no existen en el localStorage, guardarlos
    localStorage.setItem("listaPaquetes", JSON.stringify(paquetes));
}

let listaPaquetes = JSON.parse(localStorage.getItem('listaPaquetes')) || [];

listaPaquetes.map((paquete) =>{
    crearColumna(paquete);
});

function crearColumna(paquete){
    let containerPaquete = document.getElementById('container-paquetes');
    containerPaquete.innerHTML += `
    <div class="card m-3 px-0 col-lg-3 col-md-5 col-12 ocultarElementos articulo">
        <img src="${paquete.imagen}" class="card-img-top" alt="imagen de ${paquete.destino}" />
        <div class="card-body">
            <h5 class="card-title text-truncate d-block">
                <i class= "bi bi-geo-alt-fill text-danger"></i> ${paquete.nombre}
            </h5>
            <p class="card-text text-secondary">
                ${paquete.descripcion} 
            </p>
            <div class="d-flex justify-content-evenly">
                <i class="bi bi-calendar4-range"> ${paquete.dias}</i> 
                <i class="bi bi-currency-dollar"> ${paquete.precio}</i>
            </div>
        </div>
        <div class="card-footer">
            <div class="d-flex justify-content-around">
                <button class="btn btn-primary" onclick="navegarPaginaDetalle(${paquete.codigo})">
                    Ver Detalle
                </button>
            </div>
        </div>
    </div>
    `
}

window.navegarPaginaDetalle = (codigo) =>{
    window.location.href = window.location.origin + '/pages/detalle.html?codigo=' + codigo;
}
