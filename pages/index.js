class Productos {
    constructor(tipologia, precio, habitaciones, banios, descuento, img) {
        this.tipologia = tipologia;
        this.precio = precio;
        this.habitaciones = habitaciones;
        this.banios = banios;
        this.descuento = descuento;
        this.img = img;
        this.vendido = false;
}

    selecionada() {
    console.log(`Bienvenido a tu vivienda ${this.tipologia} seleccionada`);
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
