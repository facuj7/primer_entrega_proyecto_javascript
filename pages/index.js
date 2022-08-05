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
    ];
    
    /* EJEMPLO PARA BUSCAR INFORMACIÓN DE LA TIPOLOGÍA DESEADA*/
    let productoEncontrado = productos.find(el => el.id === 3);
    console.log(productoEncontrado);

    const modelo = [];
    let producto
    let entrada = prompt("Ingrese el nombre de su producto para ver detalles o escriba ESC para salir:\nTHOUSE\nTALLHOUSE\nEVOHOUSE").toUpperCase();
    
    while (entrada !="ESC"){
        producto = productos.find(item => item.id === entrada);
        modelo.push(producto);
        entrada = prompt("Ingrese el nombre de su producto para ver detalles o escriba ESC para salir:\nTHOUSE\nTALLHOUSE\nEVOHOUSE").toUpperCase();
    }
    
    /*prueba con if*/
    
    alert(`A continuación, más detalles de la tipología seleccionada`)
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
let parrafo = document.createElement("h1");
parrafo.innerHTML = "<h4>Nuestras viviendas son desarroladas por excelentes profesionales, mano de obra calificada y materiales de primera calidad</h4>";

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
                    <p>Precio: $${producto.precio}</p>
                    <p>Habitaciones: ${producto.habitaciones}</p>
                    <p>Baños: ${producto.baños}</p>
                    <p>Descuento: $${producto.descuento}</p>
                    <p>Foto: ${producto.foto}</p>
                    <img src="${producto.img}">
                    `;
    contenedor.append(li)
}

/*Descuento*/

let descu = document.getElementById("descuento");    
/* CREACION DIV DESCUENTO */

let nombre = document.getElementById("nombre");
nombre.addEventListener("input", (e) =>{
}) 

let tipo = "THOUSE";

if(tipo === "THOUSE"){
    console.log("tipologia: THOUSE, precio: 50000, habitaciones: 2, baños: 1, descuento: 10000, foto: fotocasa1");
}else if(tipo === "TALLHOUSE"){
    console.log("tipologia: TALLHOUSE, precio: 70000, habitaciones: 3, baños: 2, descuento: 15000, foto: fotocasa2");
}else if(tipo === "EVOHOUSE"){
    console.log("tipologia: EVOHOUSE, precio: 100000, habitaciones: 4, baños: 3, descuento: 20000, foto: fotocasa3");
}else{
    console.log("ingresa una tipología existente")
} 


/* Probando Storage - JSON */

/* localStorage.setItem("casa1", {tipologia: "THOUSE", precio: 50000, habitaciones: 2, baños: 1}); */ 


/* let objeto = {tipologia: "THOUSE", precio: 50000, habitaciones: 2, baños: 1} 
localStorage.setItem("objeto", JSON.stringify(objeto)); */

let objeto = localStorage.getItem("objeto");
console.log(JSON.parse(objeto));

/*Aplicando libreria*/

let button = document.getElementById("boton1");

button.addEventListener("click", () => { 
    Swal.fire({
      icon: 'ok',
      title: 'TIPOLOGIA: TALLHOUSE',
      text: "Precio: $70.000, Habitaciones: 3, Baños: 2, Descuento: $15.000", 
      timer: 10000,
      imageUrl: 'https://placeholder.pics/svg/500x400',
      
    });

let button = document.getElementById("boton2");
button.addEventListener("click", () => { 
    Swal.fire({
        icon: 'ok',
        title: 'TIPOLOGIA: THOUSE',
        text: "Precio: $50.000, Habitaciones: 2, Baños: 1, Descuento: $10.000", 
        timer: 10000,
        imageUrl: 'https://placeholder.pics/svg/500x400',
          
        });
        let button = document.getElementById("boton3");
button.addEventListener("click", () => { 
    Swal.fire({
        icon: 'ok',
        title: 'TIPOLOGIA: EVOHOUSE',
        text: "Precio: $100.000, Habitaciones: 4, Baños: 3, Descuento: $20.000", 
        timer: 10000,
        imageUrl: 'https://placeholder.pics/svg/500x400',
          
            });
        });
    });
});
