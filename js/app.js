window.addEventListener("load", function() {
    var btn = document.getElementById("enviar");
    var cajaTexto = document.getElementById("contenedor");
    var contaCaracter = document.getElementById("contador");
    
    btn.addEventListener("click", function (e){
    	e.preventDefault();

    	mensajes(cajaTexto.value);
 		cajaTexto.value = "";
	});
    cajaTexto.addEventListener("keyup", function(){
    	validarBoton(cajaTexto);

    	contarTexto(cajaTexto);
    });
	function mensajes (texto) {
    	var contenedorMensaje = document.createElement("div");
		contenedorMensaje.innerHTML = texto;
    	var mensajes = document.getElementById("mensaje");
    	mensajes.insertBefore(contenedorMensaje, mensajes.childNodes[0]);

    	contenedorMensaje.classList.add("globoTexto");
	}

	function validarBoton(campo){
		if(campo.value.length==0 || campo.value.length > 140){
			btn.disabled=true;
		}
		else
			btn.disabled=false;
	}

	function contarTexto(caja){
		var caracteres = caja.value.length;
		contaCaracter.innerText = 140 - caracteres;
	}
});