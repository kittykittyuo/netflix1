var peliculas = [ 
    { nombre: "Volver al futuro", genero: "Ciencia ficcion", año: "1985", imagen: "imagenes/volver.jpg", video: "https://www.youtube.com/embed/qvsgGtivCgs"}, 
    { nombre: "Cazafantasmas", genero: "Comedia", año: "1984", imagen: "imagenes/caza.png", video: "https://www.youtube.com/embed/6hDkhw5Wkas" }, 
    { nombre: "Terminator", genero: "Accion", año: "1984", imagen: "imagenes/terminator.jpg", video: "https://www.youtube.com/embed/nGrW-OR2uDk",  }, 
    { nombre: "E.T", genero: "Ciencia ficcion", año: "1982", imagen: "imagenes/ete.jpg", video: "https://www.youtube.com/embed/F8QgAwuxXtg" }, 
    { nombre: "El padrino", genero: "Crimen", año: "1972", imagen: "imagenes/elpadrino.jpg", video: "https://www.youtube.com/embed/gCVj1LeYnsc" }
];

var Romance = [

    {
        nombre: "10 cosas que odio de ti",
        genero: "Comedia/Romance",
        año: "1999",
        imagen: "imagenes/10cosas.jpg"
    },

    {
        nombre: "A el no le gustas tanto",
        genero: "Comedia/Romance",
        año: "2007",
        imagen: "imagenes/aelno.jpg"
    },

    {
        nombre: "Las ventajas de ser invisible",
        genero: "Drama/Romance",
        año: "2012",
        imagen: "imagenes/ventajas.jpg"
    }

];


var Comedias = [

    {
        nombre: "Click",
        genero: "Comedia",
        año: "2008",
        imagen: "imagenes/Click.webp"
    },

    {
        nombre: "Son como niños",
        genero: "Comedia",
        año: "2010",
        imagen: "imagenes/soncomoninos.jpg"
    },

    {
        nombre: "Los tres chiflados",
        genero: "Comedia",
        año: "2012",
        imagen: "imagenes/treschiflados.jpg"
    }

];


function mostrarPeliculas(lista, id) {

    var contenedor = document.getElementById(id);

    contenedor.innerHTML = "";

    for (var i = 0; i < lista.length; i++) {

        contenedor.innerHTML += `

            <div class="pelicula" onclick="seleccionarPelicula('${lista[i].nombre}')">

                <img class="imagen-pelicula" src="${lista[i].imagen}">

                <div class="info">

                    <h3>${lista[i].nombre}</h3>

                    <p>
                        ${lista[i].genero} - ${lista[i].año}
                    </p>

                </div>

            </div>

        `;
    }
}


function seleccionarPelicula(nombre) {

    for (var i = 0; i < peliculas.length; i++) {

        if (peliculas[i].nombre == nombre) {

            if (peliculas[i].video) {

                document.getElementById("tituloVideo").innerText =
                    peliculas[i].nombre;

                document.getElementById("video").src =
                    peliculas[i].video;

            } else {

                alert("Esta película no tiene video.");

            }
        }
    }
}


function irAPeliculas() {

    document.getElementById("peliculas").scrollIntoView();

}


mostrarPeliculas(peliculas, "listaPeliculas");

mostrarPeliculas(Romance, "listaRomance");

mostrarPeliculas(Comedias, "listaComedias");



var preguntas = [

    {
        pista: "En la película Volver al futuro, ¿que velocidad exacta debe alcanzar el DeLorean para activar el condensador de fluzo y viajar en el tiempo?",
        opciones: [
            "65 millas por hora",
            "120 millas por hora",
            "88 millas por hora"
        ],
        correcta: 2
    },

    {
        pista: "En Matrix, ¿Cual es el significado de la famosa eleccion que Morfeo le ofrece a Neo a traves de las dos pastillas?",
        opciones: [
            "La pastilla roja acelera el tiempo, la azul detiene a los agentes de la Matrix",
            "La pastilla roja revela la cruda realidad, la azul permite volver a la ilusion",
            "Ninguna es correcta"
        ],
        correcta: 1
    },

    {
        pista: "En El viaje de Chihiro, ¿en qué se transforman los padres de la protagonista?",
        opciones: [
            "Ranas",
            "Sombras oscuras",
            "Cerdos"
        ],
        correcta: 2
    },

    {
        pista: "En Mean Girls, ¿que dia de la semana las chicas populares usan ropa de color rosa obligatoriamente segun las reglas?",
        opciones: [
            "Miercoles",
            "Viernes",
            "No existe esa regla"
        ],
        correcta: 0
    }

];


var preguntaActual = 0;

var puntaje = 0;

var respondida = false;


function mostrarPregunta() {

    document.getElementById("pista").innerText =
        preguntas[preguntaActual].pista;

    document.getElementById("opcion0").innerText =
        preguntas[preguntaActual].opciones[0];

    document.getElementById("opcion1").innerText =
        preguntas[preguntaActual].opciones[1];

    document.getElementById("opcion2").innerText =
        preguntas[preguntaActual].opciones[2];

    document.getElementById("resultado").innerText = "";

    document.getElementById("puntaje").innerText =
        "Puntaje: " + puntaje;

    respondida = false;

}


function responder(opcion) {

    if (respondida == true) {

        return;

    }

    respondida = true;


    if (opcion == preguntas[preguntaActual].correcta) {

        puntaje++;

        document.getElementById("resultado").innerText =
            "¡Correcto! 🎉";

    } else {

        document.getElementById("resultado").innerText =
            "Incorrecto. La respuesta era: " +
            preguntas[preguntaActual].opciones[
                preguntas[preguntaActual].correcta
            ];

    }


    document.getElementById("puntaje").innerText =
        "Puntaje: " + puntaje;

}


function siguientePregunta() {

    preguntaActual++;

    if (preguntaActual >= preguntas.length) {

        preguntaActual = 0;

        puntaje = 0;

        alert("Terminaste el juego, GENIO");

    }

    mostrarPregunta();

}


mostrarPregunta();



var posicionCarrusel = 0;


function moverCarrusel(direccion) {

    var contenedor =
        document.getElementById("listaPeliculas");

    var cantidad =
        peliculas.length;


    posicionCarrusel =
        posicionCarrusel + direccion;


    if (posicionCarrusel < 0) {

        posicionCarrusel = 0;

    }


    if (posicionCarrusel >= cantidad) {

        posicionCarrusel = cantidad - 1;

    }


    var movimiento =
        posicionCarrusel * 210;


    contenedor.scrollLeft = movimiento;

}