/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentComponent = (element) => {
    const env = import.meta.env;
    const html =`
        Variables: <br />
            DEV: ${env.DEV} <br />
            PRD: ${env.PROD} <br />
            KEY: ${env.VITE_API_KEY} <br />
    `;
    element.innerHTML = html;
    //Invocar variables de entorno desde Vite
    console.log(import.meta.env);
}