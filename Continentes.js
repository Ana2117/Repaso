function continentes(pais) {
    var conti;
    var europa = ["España", "Italia", "Portugal", "Sucia"];
    var america = ["RepublicaDominicana", "EEUU", "Mexico"];
    var africa = ["Libano", "marruecos", "Cabo Verde"];
    var asia = ["china", "Thailandia", "Corea", "Japon"];
    if (europa.includes(pais)) {
        conti = "Europa";
    }
    else if (america.includes(pais)) {
        conti = "America";
    }
    console.log(continentes);
}
console.log("Mexico");
