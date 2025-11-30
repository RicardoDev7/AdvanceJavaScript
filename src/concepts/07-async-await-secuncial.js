/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitSecuncialComponent = async (element) => {
    //! Invocaciones secunciales
    /*
    console.time('Start');
    const value1 = await slowPromise();
    const value2 = await mediumPromise();
    const value3 = await fastPromise();
    element.innerHTML = `
    Value 1: ${value1} <br/> 
    Value 2: ${value2} <br/>
    Value 3: ${value3} <br/>`
    console.timeEnd('Start');
    */


    //! Invocaciones paralelas

    console.time('Start');
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]);
    element.innerHTML = `
    Value 1: ${value1} <br/> 
    Value 2: ${value2} <br/>
    Value 3: ${value3} <br/>`
    console.timeEnd('Start');
}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 4000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 2000);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise - 1 segundo');
    }, 1000);
});