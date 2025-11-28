import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    const algo = findHero('5d86371f2343e37870b91ef1');
}

/**
 * 
 * @param {String} id 
 */
const findHero = (id) => {
    return new Promise((resolve, reject) =>{
        const hero = heroes.find(x => x.id == id);
        if(hero){
            resolve(hero);
            return;
        }
        reject(`No se encontro el heroe con el ID ${id}`);
    });
}