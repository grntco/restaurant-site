import loadHome from "./home";

const content = document.getElementById('content');

const init = () => {
    return loadHome();
};

const reset = () => {
    content.innerHTML = '';
}

export { init, content, reset }