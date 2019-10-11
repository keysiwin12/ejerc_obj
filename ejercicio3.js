function removeStringValuesLongerThan(numero,objeto) {
    for(i in objeto) {
        if(objeto[i].length > numero) 
            delete objeto[i];
    }
}

var persona = {
    nombre : "keysi" ,
    edad : 23,
    comida : "ceviche" , 
    genero : ["rock","cumbia"], 
    curso : ["javascript" , "html5" , "css3"]
}

removeStringValuesLongerThan(6,persona);
console.log(persona);

