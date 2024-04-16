import html from './app.html?raw';
/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {
    // cuando la función app() se llama.
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).appendChild(app);
    })();
}