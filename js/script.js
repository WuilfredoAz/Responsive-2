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
const mobile = window.matchMedia("screen and (max-width: 767px)");

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


//configuramos el lazy loading
var bLazy = new Blazy({
    selector: 'img'
});

//configuramos los gestos

//declaramos en una variable al elemento que queremos que resiva los gestos
var body = document.body;

//configuramos la varible para que resiva gestos
var gestos = new Hammer(body);

//declaramos un escuchador de eventos tipo HammerJS para cuando dezlice a la derecha y quiera ver el menu
gestos.on("swiperight", mostrarMenu);

//declaramos un escuchador de eventos tipo HammerJS para cuando dezlice a la izquierda y quiera ocultar el menu
gestos.on("swipeleft", ocultarMenu);

//creamos la funcion para mostrar el menu y cambiar el icono
function mostrarMenu()
{
    burguerButtom.classList.add("icon-cancel-circle");
    menu.classList.add("is-active");
}

//creamos la funcion para ocultar el menu y restaurar el icono
function ocultarMenu()
{
    burguerButtom.classList.remove("icon-cancel-circle");
    menu.classList.remove("is-active");
}
