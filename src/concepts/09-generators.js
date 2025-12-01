/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = (element) => {
    const myGenerator = myFirstGeneratorFunction();
    element.innerHTML += `${myGenerator.next().value} <br />`;
    element.innerHTML += `${myGenerator.next().value} <br />`;
    element.innerHTML += `${myGenerator.next().value} <br />`;
    element.innerHTML += `${myGenerator.next().value} <br />`;
    element.innerHTML += `${myGenerator.next().value} <br />`;
    element.innerHTML += `${myGenerator.next().value} <br />`;
}

/**
 * Funciones generadoras no se pueden escribir en función de flecha
 * Generan secuencias de valores para retornar en determinados momentos
 * Function* -> Sintaxis
 */

function* myFirstGeneratorFunction(){
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    return 'No hay más valores';
}