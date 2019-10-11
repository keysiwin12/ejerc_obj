function getNthElement(arrreglo,entero)  {
    return arrreglo[entero];
}

var ultilesEscolares = ["colores","lapiz","cuaderno" , "libro" , "plumon"];

var vacio=[];

var result = getNthElement(ultilesEscolares,2);

var result2 = getNthElement(vacio,3);

console.log(result);

console.log(result2);



