import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callBacksComponent = (element) => {
    const id = '5d86371f9f80b591f499df32';
    findHero(id, (hero) => {
        element.innerHTML = `${hero.name} - ${hero.about}`;
    });
}

/**
 * 
 * @param {String} id 
 * @param {(hero: Object) => void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(x => x.id === id);
    if(!hero) return;
    callback(hero);
}