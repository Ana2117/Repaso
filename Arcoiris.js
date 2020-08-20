function arcoiris(colores) {
    for (var i = 0; i < colores.length; i++) {
        if ((colores[i] == "rojo") || (colores[i] == "rosa") || (colores[i] == "verde")
            || (colores[i] == "azul") || (colores[i] == "amarillo")) {
            console.log(colores[i] + " Si esta dentro");
        }
        else {
            console.log(colores[i] + " No pertenece al arcoiris");
        }
    }
}
var gamaDeColores = ["rojo", "rosa", "verde", "azul", "amarillo", "violeta"];
arcoiris(gamaDeColores);
