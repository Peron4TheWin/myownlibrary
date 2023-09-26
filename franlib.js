/** 
 * [Obtiene un elemento por el ID]
 * @param {[String]} id [El id del elemento a obtener]
 * @returns {[Object]} 
 */

function obtener(id=String){
    return document.getElementById(id);
}

/**
 * [Retorna si una casilla esta o no marcada]
 * @param {String} id 
 * @returns {Boolean}
 */
function estamarcada(id=String){
    return document.getElementById(id).checked;
}

/**
 * [Añade inline-block para que no haya espacios entre displays]
 * @param {String} id 
 */

function changezone(id=String){
    obtener(id).style.display="inline-block";
}

/**
 * [Retorna el valor de un espacio]
 * @param {String} id
 * @returns {String}
 */
function valorde(id=String){
    return document.getElementById(id).value;
}


/**
 * [Lee un txt y lo coloca en una cierta ID]
 * @param {String} elemento 
 * @param {String} archivo 
 */
function txt2html(elemento=String,archivo=String) {
    console.log(elemento,archivo);
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById(elemento).innerHTML =
      this.responseText;
    }
    xhttp.open("GET", archivo);
    xhttp.send();
    return
  }


/**
 * [Recibe una imagen y la pone en una cierta ID]
 * @param {String} src Source de la imagen 
 * @param {String} id Id donde se va a colocar
 */
function setimg(src=String,id=String){
    obtener(id).src=src;
    return
}
  
/**
 * [Cambia la visibilidad de un elemento con su id]
 * @param {Array} ids Un array con las ids de las cosas (Es una lista)
 * @param {Boolean} visibility La visibilidad
 */
function changevis(ids=Array,visibility=Boolean) {
    console.log(ids);
    for (x in ids){
        console.log(x);
        if (visibility==false){
            obtener(ids[x]).style.visibility="hidden";
            obtener(ids[x]).style.display="none";
        } else {
            obtener(ids[x]).style.visibility ="visible";
            obtener(ids[x]).style.display="block";
        }  
    }
    return
}

/**
 * [Una funcion que duerme el codigo durante X nilisegundos NECESITA QUE LA FUNCION DONDE SE EJECUTA SEA ASYNC] 
 * @param {Number} ms Milisegundos a dormir 
 */
var sleep = function(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
};
