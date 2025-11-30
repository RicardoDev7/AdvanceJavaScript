import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {
    const id1 = '5d86371f233c9f2425f16916';
    const id2 = '5d86371f9f80b591f499df32';

    try {
        //! Invocacion secuncial de async await
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);
        element.innerHTML = `${hero1} / ${hero2}`;
    } catch (error) {
        element.innerHTML = error;
    }

}

const findHero = async (id) => {
    const hero = heroes.find(x => x.id === id);
    if(!hero) throw `Hero with ID '${id} not found`;
    return hero.name;
}