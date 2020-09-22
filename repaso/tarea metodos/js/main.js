/* 
    1. pedir al usuario una frase e imprimir en consola todas las vocales de la misma

    -> hola mundo -> o,a,u,o

    -> HolA MundO -> o,A,u,O
*/

let frase = prompt("coloca una frase")
let frass = frase.toLocaleLowerCase()
console.log('tu frase contiene las siguientes vocales')
for(let i = 0;i<frass.length;i++) {
    if ((frass.charAt(i)== 'a') || (frass.charAt(i)== 'e') || (frass.charAt(i)=='i') || (frass.charAt(i)=='o') || (frass.charAt(i)=='u'))
    console.log(frass[i])    

     }
 /*
    2. pedir al usuario una frase e imprimir en consola la frase capitalizada

        -> hola mUndo -> Hola Mundo

        -> Hola mundo -> Hola Mundo
​*/
console.log(frass)
let capi = frass.toLocaleUpperCase()
console.log(capi)
/*

    3. Estudiar los arrays en JS

    4. Investigar los metodos de array

        -> .map()

        -> .reduce()

        -> .filter()

        -> .length

        

        -> .concat()

        -> .forEach()

        -> .includes()

        -> .push()

        -> .pop()

        -> .reverse()

        -> .join()

*/







