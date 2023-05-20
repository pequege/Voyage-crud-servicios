const container = document.getElementById('container-404');
let videoRandomId = (Math.floor(Math.random() * 3) + 1);

container.innerHTML = `
    <video src="../video/bg-404-0${videoRandomId}.mp4" autoplay muted loop></video>
    <div class="p-3">
        <h1>ERROR 404</h1>
        <h2>Lo sentimos algo salio mal!</h2>
    </div>
    <a href="../index.html" class="boxBtn">Volver al Inicio</a>
    `;