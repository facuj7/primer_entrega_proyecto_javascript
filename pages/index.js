/* class Productos {
    constructor(tipologia, precio, habitaciones, baños,     descuento, img) {
        this.tipologia = tipologia;
        this.precio = precio;
        this.habitaciones = habitaciones;
        this.baños = baños;
        this.descuento = descuento;
        this.img = img;
        this.vendido = false;
}

}
    vender() {
    this.vendido = true; 
}
}
    const casa1 = new Productos("Thouse", 50000, 2, 1, 10000, "fotocasa1");
    const casa2 = new Productos("Tallhouse", 70000, 3, 2, 15000, "fotocasa2");

    console.log(casa1);
    console.log(casa2);

    function descuento(num1, num2){
        return num1 - num2;
    }

    let num1 = parseInt(prompt("ingrese el valor de su vivienda"));
    let num2 = parseInt(prompt("ingrese descuento pactado con vendedor"));
    let resultado = num1 - num2; 
    alert(resultado) 


    /*PROBANDO ALTERNATIVA */
    const productos = [
        {id: 1, tipologia: "THOUSE", precio: 50000, habitaciones: 2, baños: 1, descuento: 10000, foto: "fotocasa1"},
        {id: 2, tipologia: "TALLHOUSE", precio: 70000, habitaciones: 3, baños: 2, descuento: 15000, foto: "fotocasa2"},
        {id: 3, tipologia: "EVOHOUSE", precio: 100000, habitaciones: 4, baños: 3, descuento: 20000, foto: "foto casa3"},
    ]
    
    const modelo = [];
    let producto
    let entrada = prompt("Ingrese el nombre de su producto para ver detalles o escriba ESC para salir:\nTHOUSE\nTALLHOUSE\nEVOHOUSE").toUpperCase()
    
    while (entrada !="ESC"){
        producto = productos.find(item => item.tipologia === entrada);
        modelo.push(producto);
        entrada = prompt("Ingrese el nombre de su producto para ver detalles o escriba ESC para salir:\nTHOUSE\nTALLHOUSE\nEVOHOUSE").toUpperCase()
    }

    /*prueba con if*/
    
    alert(`Las características de su tipología:`)
    /*las caracteristicas figuran por consola*/
    const array =[];
    console.log(modelo)

    /*Evento Input*/
/*let saludo = document.getElementById("saludo");
let nombre = document.getElementById("nombre");
    
    nombre.addEventListener("input", () => {
        if(nombre.value.includes("tallhouse")){
             saludo.id2
        }
    }
    );
*/        

/*Funcion para descuento, operación*/

function descuento(num1, num2){
    return num1 - num2;
}
    
    let num1 = parseInt(prompt("ingrese el valor de su vivienda"));
    let num2 = parseInt(prompt("ingrese descuento pactado con vendedor"));
    let resultado = num1 - num2; 
    alert(resultado) 

/*Seccion*/    

let padre = document.getElementById("seccion");    
/* CREACION DIV SECCION */
let parrafo = document.createElement("p");

parrafo.innerHTML = "<h1>En esta sección, podrás ver los detalles de nuestras tipologías</h1>";

padre.append(parrafo);

/*tipologias*/
let contenedor = document.getElementById("container");
let tipos = [
    {id: 1, tipologia: "THOUSE", precio: 50000, habitaciones: 2, baños: 1, descuento: 10000, foto: "fotocasa1"},
    {id: 2, tipologia: "TALLHOUSE", precio: 70000, habitaciones: 3, baños: 2, descuento: 15000, foto: "fotocasa2"},
    {id: 3, tipologia: "EVOHOUSE", precio: 100000, habitaciones: 4, baños: 3, descuento: 20000, foto: "foto casa3"},
]; 

for(const producto of productos){
    let li = document.createElement("li");
    li.innerHTML = `<h3>ID: ${producto.id}</h3>
                    <p>Producto: ${producto.tipologia}</p>
                    <b>Precio: $${producto.precio}</b>
                    <p>Habitaciones: ${producto.habitaciones}</p>
                    <p>Baños: ${producto.baños}</p>
                    <b>Descuento: $${producto.descuento}</b>
                    <p>Foto: ${producto.foto}</p>
                    <img src="${producto.img}">
                    `;
    contenedor.append(li)
}

/*Descuento*/

let descu = document.getElementById("descuento");    
/* CREACION DIV DESCUENTO */
let calcu = document.createElement("h2");

calcu.innerHTML = "<h2>Calculadora para descuento</h2>";

descu.append(calcu);
