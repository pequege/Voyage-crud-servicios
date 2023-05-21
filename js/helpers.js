function validarCantidadDeCaracteres(texto,min,max){
    if(texto.length >= min && texto.length <= max){
        return true;
    }else{
        return false;
    }
}
function validarURLImagen(imagen){
    const patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|gif)$/;
    if(patron.test(imagen)){
        return true;
    }else{
        return false;
    }
}
function validarCategoria(categoria){
    if(categoria.length > 0 && (categoria == 'Local' || categoria == 'Nacional' || categoria == 'Internacional')){
        return true;
    }else{
        return false;
    }
}
function validarDias(dias){
    if(dias.length > 0 && (dias == '3 Dias' || dias == '5 Dias' || dias == '7 Dias' || dias == '10 Dias' || dias == '14 Dias')){
        return true;
    }else{
        return false;
    }
}
export function validacionesFinales(nombre,precio,categoria,imagen,descripcion,dias){
    let resumen = '';
    if(! validarCantidadDeCaracteres(nombre, 20 , 250)){
        resumen = 'El Nombre del Paquete de Viajes debe dar a conocer por lo menos el destino. <br>';
    };
    if(! validarCantidadDeCaracteres(precio, 4 , 10)){
        resumen += 'El Valor Ingresado como Precio no Cumple con las Condiciones de los Servicios Ofrecidos. <br>';
    }
    if(! validarCategoria(categoria)){
        resumen += 'La Categoria Ingresada <strong>NO</strong> Corresponde con las Disponibles Actualmente. <br>';
    }
    if(! validarURLImagen(imagen)){
        resumen += 'La URL debe Contener una Extension Valida(.jpg,.png o .gif). <br>';
    }
    if(! validarCantidadDeCaracteres(descripcion, 50 , 500)){
        resumen += 'La Descripcion debe Detallar el Contenido del Viaje y Llamar la Atencion del Cliente con las Actividades que se Ofrecen en el Paquete. <br>';
    }
    if(! validarDias(dias)){
        resumen += 'Los Dias Ingresados deben Corresponder a uno de los Disponibles que se Ofrecen Actualmente. <br>';
    }
    return resumen;
}