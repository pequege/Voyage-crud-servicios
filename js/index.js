import paquetes from '../db/paquetes.json' assert {type:'json'};
localStorage.setItem('listaPaquetes', JSON.stringify(paquetes));

let listaPaquetes = JSON.parse(localStorage.getItem('listaPaquetes')) || [];

listaPaquetes.map((paquete) =>{
    crearColumna(paquete);
});

function crearColumna(paquete){
    let containerPaquete = document.getElementById('container-paquetes');
    containerPaquete.innerHTML += `
    <div class="card m-2 col-lg-3 col-md-5 col-12 ocultarElementos articulo">
        <img src="${paquete.imagen}" class="card-img-top pt-2" alt="pareja en la playa" />
        <div class="card-body">
            <h5 class="card-title">${paquete.nombre}</h5>
            <p class="card-text">
                ${paquete.descripcion}
            </p>
        </div>
        <div class="card-footer">
            <p class="dias">${paquete.dias}</p>
            <div class="d-flex justify-content-around">
                <button class="btn btn-primary" onclick="navegarPaginaDetalle(${paquete.codigo})">
                    Ver Detalle
                </button>
                <button class="btn btn-outline-light precio">$ ${paquete.precio}</button>
            </div>
        </div>
    </div>
    `
}

window.navegarPaginaDetalle = (codigo) =>{
    window.location.href = window.location.origin + '/pages/detalle.html?codigo=' + codigo;
}
