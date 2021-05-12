/* 
JavaScript / XML
web o pagina: ejercicios de XML y JavaScript
autor: Prof. Carlos Boni
fecha: 12 mayo 2021
resumen: lectura y carga en array bidimensional de un XML
*/

// variable global de la pagina
let registrados = [];

// las siguientes variables estarán como sessionStorage
let usrIntentando = "CANDIDO";
let claveIntentando = "vidal"

function validarXML() {
  // lee desde aquí.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this);
    }
  };
  xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados.xml", true);
  xhr.send();
}

function miFuncion(xml) {
  var i;
  var usrNom;
  var usrPsw;
  var usuario = [];
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("usuario");
  
  var tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
  for (i = 0; i <x.length; i++) { 
	// leo las etiquetas que me interesan del objeto
	usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
	usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
    // actualizo la tabla de visualización
	if ((usrNom == usrIntentando) && (usrPsw == claveIntentando)) {
      tabla += "<tr><td>***</td><td>";
    }
	tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
	// actualizo el array bidimensional con los usuarios registrados
	usuario = [usrNom,usrPsw];
	registrados.push(usuario);
  }
  tabla += "</table>"
  document.getElementById("contenidoXML").innerHTML = tabla;
  
  // muestro en consola el array de usuarios registrados
	registrados.forEach((usuario) => {
		usuario.forEach((datos) => {
			console.log(datos);
		});
	});
}
