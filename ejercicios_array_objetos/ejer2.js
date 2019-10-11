var juan = {
    nombre:"juan",
    edad:25,
    clase:true,
    cursos:["javascript","html","javascript avanzado","css","php"]
}

var ana = {
    nombre:"Ana",
    edad:35,
    clase:false,
    cursos:["javascript avanzado","css"]
}

var rosario = {
    nombre:"Rosario",
    edad:19,
    clase:false,
    cursos:["javascript","html","css"]
}


var mateo = {
    nombre:"Mateo",
    edad:28,
    clase:true,
    cursos:["javascript","php","javascript avanzado","css"]
}

var estudiantes = [juan,ana,rosario,mateo];


// // 1. Mostrar a todoas las estudiantes presentes en la consola 

// for(var i =0 ; i<estudiantes.length ; i++) {
//     if(estudiantes[i].clase) 
//         console.log(estudiantes[i].nombre);
// }


// // 2 mostrar la suma de las edades de todos los estudiantes 
// var sumaEdades = 0;

// for(i = 0 ; i<estudiantes.length ; i++) {  
//     sumaEdades += estudiantes[i].edad;
// }

// console.log(sumaEdades);


// 3. Mostar el nombre de los estudiantes que esten llevando php

for(var i = 0 ; i<estudiantes.length ; i++) {    
    if(estudiantes[i].cursos.indexOf("php") !== -1) 
        console.log(estudiantes[i].nombre);           
}





