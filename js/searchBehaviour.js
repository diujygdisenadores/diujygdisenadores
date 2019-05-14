


var eventos = ["Pesca", "Desayuno con compañeros", "Charla sobre Bootstrap", "Conferencia de HTML5"];
var precios = [5, 3, 0, 0];
var etiqueta = ["Deporte", "Comunidad", "Comunidad", "Comunidad"];
var lugar = ["Pantano de Cubillas", "ETSIIT", "ETSIIT", "ETSIIT"];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];





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
    var inputFecha = document.getElementById("inputFecha").value;
    var inputPrecio = document.getElementById("inputPrecio").value;
    var inputLugar = document.getElementById("inputPrecio").value;
    var d = new Date();

    if(inputTexto.length > 0){
    	FiltraPorTexto(inputTexto);
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

function FiltraPorTexto(inputTexto){
	var busqueda = [];
	for(let i = 0; i < eventos.length; ++i){
		if(eventos[i].toLowerCase().includes(inputTexto.toLowerCase())){
			busqueda.push(eventos[i]);
		}
	}

	var eventoNoBuscado = eventos.filter(
	    function(elemento) {
	      return this.indexOf(elemento) < 0;
	    },
	    busqueda
	)


	if(eventoNoBuscado.length > 0){
		for(let i = 0; i < eventoNoBuscado.length; ++i){
			var content = document.getElementById(eventoNoBuscado[i]);
		  	content.style.display = "none";
		}
	}
	else{
		MuestraTodos();
	}
}

function filterSelection(valor) {
  var elementos;
  elementos = document.getElementsByClassName("etiqueta");
  if (valor == "Ninguna") valor = "";
  for (let i = 0; i < elementos.length; i++) {

  }
}
