const dataSpan = document.getElementById("data");
const datoGuardado = localStorage.getItem("datoUsuario");

if (datoGuardado) {
    dataSpan.textContent = datoGuardado;
} else {
    dataSpan.textContent = "No hay datos guardados.";
}