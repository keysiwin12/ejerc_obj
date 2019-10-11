function numeroPropiedades(obejeto) {
    contador =0;
    for(i in obejeto){
        contador++;
    }
    return contador;
}

var pais = {
    nombre : "Peru",
    capital : "Lima",
    poblacion : 33000000,
    // continente: "America" 
};

console.log(numeroPropiedades(pais));