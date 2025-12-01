import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async (element) => {
    const heroGenerator = genHeroGenerator();
    let hasHeroes = false;
    do{
        const {value, done} = await heroGenerator.next();
        hasHeroes = done;
        if(hasHeroes) break;
        element.innerHTML = value;
    }while(!hasHeroes)
}

async function* genHeroGenerator(){
    for (const hero of heroes){
        await sleep();
        yield hero.name;
    }
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}