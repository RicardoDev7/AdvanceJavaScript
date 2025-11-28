import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }
    const renderError = (error) => {
        element.innerHTML = `<h3>${error}</h3>`;
    }
    const heroID = '5d86371f97c29d020f1e1f6d';
    findHero(heroID).then(renderHero).catch(renderError);
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