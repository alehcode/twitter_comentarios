window.addEventListener("load", function() {
    var btn = document.getElementById("enviar");

    btn.addEventListener("click", function (e){
    	e.preventDefault();

    	var publicacion = document.getElementById("contenedor");
    	mensajes(publicacion.value);
 		publicacion.value = "";
	});

	function mensajes (texto) {
    	var contenedorMensaje = document.createElement("div");
		contenedorMensaje.innerHTML = texto;
    	var mensajes = document.getElementById("mensaje");
    	mensajes.insertBefore(contenedorMensaje, mensajes.childNodes[0]);

    	contenedorMensaje.classList.add("globoTexto");
	}
});