import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callBacksComponent = (element) => {
    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371fd55e2e2a30fe1ccb';
    findHero(id1, (error, hero1) => {
        if(error){
            element.innerHTML = error;
            return;
        }
        findHero(id2, (error, hero2) => {
            if(error){
                element.innerHTML = error;
                return;
            }
        element.innerHTML = `${hero1.name} - ${hero2.name}`;
        })
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