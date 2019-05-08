


var eventos = ["Pesca", "Desayuno con compañeros", "Charla sobre Bootstrap", "Conferencia de HTML5"];

document.addEventListener("DOMContentLoaded", function(event) {
    continua = true;
    const $source = document.querySelector('#inputTexto');
    const $result = document.querySelector('#inputTexto');

	const typeHandler = function(e) {
	  Busqueda();
	}

	$source.addEventListener('input', typeHandler) // register for oninput
	$source.addEventListener('propertychange', typeHandler) // for IE8
});


function Busqueda() {
    var inputTexto = document.getElementById("inputTexto").value;
    var busqueda = [];

    if(inputTexto.length > 0){
    	for(let i = 0; i < eventos.length; ++i){
	    	if(eventos[i].toLowerCase().includes(inputTexto.toLowerCase())){
	    		busqueda.push(eventos[i]);
	    	}
    	}

    	var eventoNoBuscado = eventos.filter(
		    function(e) {
		      return this.indexOf(e) < 0;
		    },
		    busqueda
		)


    	if(eventoNoBuscado.length > 0){
			for(let i = 0; i < eventoNoBuscado.length; ++i){
				var content = document.getElementById(eventoNoBuscado[i]);
				//if (content.style.display === "flex") {
				  content.style.display = "none";
				//}
	    	}
    	}
    	else{
    		MuestraTodos();
    	}
    }
    else{
    	MuestraTodos();
    }
}

function MuestraTodos(){
	for(let i = 0; i < eventos.length; ++i){
		var content = document.getElementById(eventos[i]);
		content.style.display = "flex";
			
	}	
}