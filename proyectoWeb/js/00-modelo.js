/* 
JavaScript / XML
web o pagina: ejercicios de XML y JavaScript
autor: Prof. Carlos Boni
fecha: 19 mayo 2021
resumen: lectura y carga en array bidimensional de un XML

sintesis:
la lógica se basa en el uso de tres variables de tipo sessionStorage
usuarioLogueado : si existe, su valor es el nombre de usuario en sesion
usuarioIntentando y claveIntentando: si existen significa que debemos
validarlas para crear usuarioLogueado si corresponde
*/

// variable global de la pagina
function leerXML() {
    // lee desde GitHub.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        miFuncion(this);
      }
    };
    xhr.open("GET", "https://ritta83.github.io/publico/proyectoWeb/registrados.xml", true);
    xhr.send();
  }

  function miFuncion(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("usuario");
    var checking = false;
    var nombreUsuario = document.getElementById("nombre-usuario").value;
    var passwordUsuario = document.getElementById("contraseña-usuario").value;
    for (i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == nombreUsuario) {
            if (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == passwordUsuario) {
                checking = true;
                if (typeof(Storage) !== 'undefined') {
                    sessionStorage.setItem("usuario",nombreUsuario);
                } else {
                    alert("El navegador no es compatible con SessionStorage.")
                }
                break;
            }
          }
        }
        if(checking==true){
            alert("Bienvenido, "+ nombreUsuario)
            window.history.go(-1)
        }
        }

        function checking(){
            if(sessionStorage.getItem("usuario").length>0){
              document.getElementById("login").style.display="none";
              document.getElementById("logout").style.display="inline-block";
              document.getElementById("usuariolog").innerHTML = sessionStorage.getItem("usuario");
            }
          }
          window.onload = function launch(){
            checking();
          }

          function logOut() {
            if (typeof (Storage) !== "undefined") {
        if(confirm("¿Estás seguro?")){
                sessionStorage.removeItem("usuario");
        location.reload();
            }
            return false;
        }
  }