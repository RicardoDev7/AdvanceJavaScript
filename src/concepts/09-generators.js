/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = (element) => {
    /*
    const myGenerator = myFirstGeneratorFunction();
    element.innerHTML += `${myGenerator.next().value} <br />`;
    element.innerHTML += `${myGenerator.next().value} <br />`;
    element.innerHTML += `${myGenerator.next().value} <br />`;
    element.innerHTML += `${myGenerator.next().value} <br />`;
    element.innerHTML += `${myGenerator.next().value} <br />`;
    element.innerHTML += `${myGenerator.next().value} <br />`;
    */
   const genID = idGenerator();
   const button = document.createElement('button');
   button.innerText = 'Click Me';
   element.append(button);

   const renderButton = () => {
    const {value} = genID.next();
    button.innerText = `Click ${value}`;
   }
   button.addEventListener('click', renderButton);
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

function* idGenerator(){
    let currentID = 0;
    while(true){
        yield ++currentID;
    }
}