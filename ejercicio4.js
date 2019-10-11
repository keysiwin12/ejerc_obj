function computeSumOfAllElements(arreglo) {
    var suma=0;
    for(i in arreglo) {
        suma +=arreglo[i];
    }
    return suma;
}



var numerosPares = [2,4,6,8,10,12,14,16,18,20];

var summaArray =computeSumOfAllElements(numerosPares);

console.log(summaArray);
