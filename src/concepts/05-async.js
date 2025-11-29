import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {
    const id = '5d86371fd55e2e2a30fe1ccb2';
    findHero(id)
        .then(name => element.innerHTML = name)
        .catch(error => element.innerHTML = `<h3>${error}</h3>`);
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find(x => x.id === id);
    return hero.name;
}