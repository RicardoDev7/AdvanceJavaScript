import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {
    const id = '5d86371fd55e2e2a30fe1ccb2';
    console.log('Inicio del proceso');
    findHero(id)
        .then(name => {
            element.innerHTML = name;
            console.log(name);
        })
        .catch(error => element.innerHTML = `<h3>${error}</h3>`);
    console.log('Fin del proceso');
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find(x => x.id === id);
    if(!hero)
        throw `Hero with ID ${id} not found`;
    return hero?.name;
}