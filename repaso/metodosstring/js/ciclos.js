
//clase metodos string
let name = prompt("¿Cual es tu nombre completo?")
if (name.toLowerCase().includes("leyva")){
    console.log('hola fanny')
}else {
    console.log('hola desconocido')
}
// template literals
console.log(`
    <div>
        <p>Hola ${name} ipsum dolor sit amet consectetur ${2 * 3} elit. Odit </p>
    </div>
`)

// ciclos
// for, while, do while
// for(inicio;fin; aumento / decremento ){
    // sentencias
// }
let age = prompt('¿cuál es tu edad?')
for(let i = 1; i<= age; i++){

    console.log(i)

}

let counter = 1
while(counter <= age){
    // sentencias
    console.log(counter)
    counter++
}
let counterdo = 1
do {
    console.log(counterdo)
    counterdo++
} while (counterdo <= age)

// Métodos de string
// concat
let string1 = 'hola '
let string2 = 'koder'
console.log('hola '+ string2+ 'que hace')
console.log(string1.concat(string2))

// substring / slice
let varSubtring = 'lorem ipsum'
console.log(varSubtring.substring(0,5))
console.log(varSubtring.slice(0,5))
console.log(varSubtring.slice(-7))

// length propiedad tamaño del string de 1 a N

let strlength = 'Hola'
console.log(strlength.length)

// split()
let str = "How are you doing today?";
let res = str.split("")

// join()
let joinArray = [2, 3, 7, 'hola']
console.log(joinArray.join(''))
console.log(joinArray)

// camelCase, PascalCase
// toLowerCase / toUpperCase 
let upperLowerString = 'Hola Que Hace x2'
console.log(upperLowerString)
console.log(upperLowerString.toLowerCase())
console.log(upperLowerString.toUpperCase())

// replace
let school = 'Kodemia es la mejor...'
console.log(school.replace('Kodemia','otro'))
​
// solucion
let name = promt('¿cuál es tu nombre?')
let nameLower = name.toLowerCase()

// if ( nameLower.includes('leyva') === true ){
if ( nameLower.includes('leyva') ){
    console.log('Bienvenida')
} else {
    console.log('Hola desconocido')
}
​
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