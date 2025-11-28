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

    //! Version 0 - Promesa tradicional y unica
    /*
    findHero(heroID1).then(renderHero).catch(renderError);
    */

    //! Version 1 - Promise Hell
    /*
    let hero1;
    findHero(heroID1).then((id1) => {
        hero1 = id1;
        findHero(heroID2).then((id2) => {
            renderTwoHeroes(id1, id2)
        }).catch(renderError)
    }).catch(renderError);
    */

    //! Version 2 - Promesas anidadas o en cadena
    /*
    let hero1;
    findHero(heroID1).then(hero => {
        hero1 = hero;
        return findHero(heroID2);
    }).then(x => {
        renderTwoHeroes(hero1, x);
    }).catch(renderError);
    */

    //! Version 3 - Promise All
    Promise.all([findHero(heroID1), findHero(heroID2)])
            .then(([hero1, hero2]) => {
                renderTwoHeroes(hero1, hero2);
            })
            .catch(renderError);
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