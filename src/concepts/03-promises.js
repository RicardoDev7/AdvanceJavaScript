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
    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
        <h1>${hero1.name}</h1>
        <h1>${hero2.name}</h1>`;
    }
    const heroID1 = '5d86371f97c29d020f1e1f6d';
    const heroID2 = '5d86371fd55e2e2a30fe1cc4';
    findHero(heroID1).then(renderHero).catch(renderError);

    let hero1, hero2;
    findHero(heroID1).then((id1) => {
        hero1 = id1;
        findHero(heroID2).then((id2) => {
            renderTwoHeroes(id1, id2)
        }).catch(renderError)
    }).catch(renderError);
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