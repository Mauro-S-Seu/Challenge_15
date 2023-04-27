// *** Ejercicio N° 1 ***
// Realizar programa donde el usuario introduce 2 números y el ordenador responde
// sacando por pantalla la resta de ambos números y también su multiplicación.

let primerNumero = parseInt(prompt("Ingresar el 1er. número: "));
let segundoNumero = parseInt(prompt("Ingresar el 2do. número: "));

let resta = primerNumero - segundoNumero;
let multiplicacion = primerNumero * segundoNumero;

document.write('La resta de ambos números es: ', (resta));
document.write("<br>");
document.write("<br>");
document.write("La multiplicación de los 2 números da como resultado: ", (multiplicacion));


// *** Ejercicio N° 2 ***
// El usuario ingresa nombre y apellido, debemos verificar si los datos ingresados contienen
//la letra ('a' y 'm'). Mostrar x consola la respuesta (si contiene o no).

document.write("<br>");
let nombreYapellido = prompt("Ingresar nombre y apellido completo del usuario: ");
document.write(`<br>El nombre completo del usuario es: ${nombreYapellido}`);
document.write("<br>");

if(nombreYapellido.includes(`a`) || nombreYapellido.includes(`m`)){
    console.log(`El nombre completo del usuario, SI CONTIENE ("a" y "m")`);
    document.write(`<br> El nombre del usuario, SI CONTIENE ("a" y "m")`);
}else{
    console.log(`NO CONTIENE ("a" y "m")`);
    document.write(`NO CONTIENE ("a" y "m")`);
}
document.write("<br>");

// *** Ejercicio N° 3 ***
// Crear una variable y asignarle el sig. valor : (' Pablito-clavo-un-clavito')
// investigar a través de que método podemos quitar los guiones y reemplazar por espacios.

document.write("<br>");
let pablito = ('Pablito-clavo-un-clavito');
let pablitoModificado = pablito.replace(/-/g,' ');
document.write(pablitoModificado);