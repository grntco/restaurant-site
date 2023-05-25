import loadHome from "./home";

const content = document.getElementById('content');

const loadPage = () => {
    content.appendChild(loadHome());
};

const reset = () => {
    content.innerHTML = '';
}

export { loadPage, content, reset }