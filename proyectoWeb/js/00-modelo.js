/* 
JavaScript / jQuery
web o pagina:
autor:
fecha:
resumen:
*/

	
	$(document).ready(function() {
		if (sessionStorage.suma) {
		  // si existe el valor lo muestro
		  $("#total").text(sessionStorage.suma);
		} else {
			// si NO existe el valor lo seteo y lo muestro
		  sessionStorage.setItem("suma", 1);
		  $("#total").text(sessionStorage.suma);
		}
	});
	
	function sumar(){
		if (sessionStorage.suma) {
		  // si existe el valor le sumo 1
		  sessionStorage.suma = Number(sessionStorage.suma) + 1;
		} else {
		  sessionStorage.setItem("suma", 1);
		}
		$("#total").text(sessionStorage.suma);
	}
