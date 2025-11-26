import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callBacksComponent = (element) => {
    const id = '5d86371f9f80b591f499df32';
    findHero(id, (error, hero) => {
        if(!error) element.innerHTML = `${hero.name} - ${hero.about}`;
        else element.innerHTML = error;
    });
}

/**
 * 
 * @param {String} id 
 * @param {(error?: String|null, hero: Object) => void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(x => x.id === id);
    if(!hero){
        callback(`El heroe con el ID '${id}' no existe`);
        return;
    }
    callback(null, hero);
}