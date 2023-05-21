let formReview = document.getElementById('agregar-review');
let nombreUsuario = document.getElementById('inputNombreUsuario'),
reviewBody = document.getElementById('textAreaReview'),
estrella1 = document.getElementById('estrella-1'),
estrella2 = document.getElementById('estrella-2'),
estrella3 = document.getElementById('estrella-3'),
estrella4 = document.getElementById('estrella-4'),
estrella5 = document.getElementById('estrella-5');

let puntajeReview = "";
let listaReviews = [];

formReview.addEventListener('submit', addReview);
estrella1.addEventListener('click', () => getPuntuacion(1));
estrella2.addEventListener('click', () => getPuntuacion(2));
estrella3.addEventListener('click', () => getPuntuacion(3));
estrella4.addEventListener('click', () => getPuntuacion(4));
estrella5.addEventListener('click', () => getPuntuacion(5));

function getPuntuacion(puntaje){
    switch (puntaje) {
        case 1:
            puntajeReview = "1";
            break;
        case 2:
            puntajeReview = "2";
            break;
        case 3:
            puntajeReview = "3";
            break;
        case 4:
            puntajeReview = "4";
            break;
        case 5:
            puntajeReview = "5";
            break;
        default:
            break;
    }
}

class Review{
    #nombreUsuario;
    #reviewBody;
    #puntajeReview;

    constructor( nombreUsuario, reviewBody, puntajeReview){
        this.#nombreUsuario = nombreUsuario;
        this.#reviewBody = reviewBody;
        this.#puntajeReview = puntajeReview;
    }

    get nombreUsuario() {
        return this.#nombreUsuario;
    }

    set nombreUsuario(nombreUsuario) {
        this.#nombreUsuario = nombreUsuario;
    }

    get reviewBody() {
        return this.#reviewBody;
    }

    set reviewBody(reviewBody) {
        this.#reviewBody = reviewBody;
    }

    get puntajeReview() {
        return this.#puntajeReview;
    }

    set puntajeReview(puntajeReview) {
        this.#puntajeReview = puntajeReview;
    }
}

function addReview(e){
    e.preventDefault();
    let review = new Review(nombreUsuario.value, reviewBody.value, puntajeReview)
    console.log(`hola ${review.nombreUsuario}`);
    console.log(`${review.reviewBody}`);
    console.log(`Puntuación: ${review.puntajeReview} estrellas`);
    listaReviews.push(review);
    dibujarCardReview(review)
    formReview.reset();
}

function dibujarCardReview(review){
    let cardsReviews = document.getElementById('cardsReview');
    cardsReviews.innerHTML += `
    <div class="carousel-item">
        <aside class="card mb-3">
            <div class="row">
            <div class="col-5 col-md-3 col-lg-2 pe-0">
                <img src="https://picsum.photos/200?random=5" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-7 col-md-9 col-lg-10 ps-0">
                <div class="card-body">
                <h5 class="card-title">${review.nombreUsuario}</h5>
                <p class="mb-0">
                    ${dibujarPuntuacion(review.puntajeReview)}
                </p>
                <p class="card-text d-inline-block text-truncate mb-0">
                    ${review.reviewBody}
                </p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </div>
        </aside>
    </div>
    `
}

function dibujarPuntuacion(puntaje){
    let puntajeHTML = '';
    for (let i = 1; i <= parseInt(puntaje); i++) {
        puntajeHTML += '<i class="bi bi-star-fill text-warning"></i>'
    }
    for (let j = 1; j <= (5 - parseInt(puntaje)); j++) {
        puntajeHTML += '<i class="bi bi-star-fill text-dark opacity-25"></i>'
    }
    return puntajeHTML;
}
