//id de html
const carrito = document.querySelector("#carrito");

//del html
const template = document.querySelector("#template");

//para evitar el refloww
const fragment = document.createDocumentFragment();

//selecionamos nuestros botones 
const agregar = document.querySelectorAll(".card button");

//Con todo esto de lo que est arriba ya capturamos todos los elementos y es bueno probarlo si ya lo tenemos con console.log

//creamos un arreglo donde almacenaremos los objetos dependiendo de lo que se vaya a agregar y esto lo almacenara
const carritoObjeto = {};


//creamos una funcion que se encarga de hacer el llenado de nuestro arreglo cuando hagamos la eleccion de las frutas
const agregarCarrito = (e) => {
    // console.log(e.target.dataset);
    // console.log(e.target.dataset.fruta); con esto puedo visualizar en la consola que si se este seleccionando
    //esto es una propiedad de Boostrap que al poner dataset selecciona rapido lo que se este señalando en html y .fruta especificalo que se tomo

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    if (carritoObjeto.hasOwnProperty(producto.id)) {
        producto.cantidad = carritoObjeto[producto.id].cantidad + 1;
    }

    carritoObjeto[producto.id] = producto;

    pintarCarrito();
};

agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));

const pintarCarrito = () => {
    carrito.textContent = "";

    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
};