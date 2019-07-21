//guardamos en una variable al boton
const burguerButtom = document.querySelector(".menu-icono");

//guardamos en una variable al menu
const menu = document.querySelector(".menu");

function queTal()
{
    //comprobamos primero que el menu no este visible
    if(menu.classList.contains("is-active"))
    {
        //quitamos la "X" al icono
        burguerButtom.classList.remove("icon-cancel-circle");
        //ocultamos el menu
        menu.classList.remove("is-active");
    }
    else
    {
        //agregamos la X al icono
        burguerButtom.classList.add("icon-cancel-circle");
        //mostramos el menu
        menu.classList.add("is-active");
    }
}

//optimizamos el JS

//cremoa la media query que queremos comprobar
const mobile = window.matchMedia("screen and (max-width: 480px)");

//creamos un escuchador
mobile.addListener(validacion)

//creamos la funcion que valida
function validacion()
{
    //comprobamos que la resolucion es la que queremos
    if (mobile.matches==true)
    {
        //creamos un escuchador de eventos cuando haga click en el menu y disparamos la funcion
        burguerButtom.addEventListener("click", queTal);
    }
    //en caso de no ser la resolucion que se requiera
    else
    {
        //quitamos un escuchador de eventos cuando haga click en el menu y disparamos la funcion
        burguerButtom.removeEventListener("click", queTal);
    }
}

//Ejecutamos la funcion mandandole en donde queremos comprobar
validacion(mobile)
