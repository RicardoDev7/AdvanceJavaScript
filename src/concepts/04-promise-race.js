/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {
    element.innerHTML = 'Loading...';
    const renderValue = (value) => {
        element.innerHTML = value;
    }
    //! Race - Resuelve la promesa que termina en menos tiempo
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]).then(renderValue);
}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 3000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise - 1 segundo');
    }, 3000);
});