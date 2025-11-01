const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

buttonText.addEventListener("click", function () {
    const valor = inputText.value.trim();
    if (valor) 
        localStorage.setItem("datoUsuario", valor);
        inputText.value = "";
    }
);
