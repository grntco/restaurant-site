import './styles.css';
import loadHome from './modules/home';
import loadContact from './modules/contact';
import loadMenu from './modules/menu';
import { content, loadPage, reset } from './modules/pageload';

const init = (function() {
    loadPage();
    
    const homeBtn = document.getElementById('home-btn');
    const contactBtn = document.getElementById('contact-btn');
    const menuBtn = document.getElementById('menu-btn');

    homeBtn.addEventListener('click', function() {
        reset();
        content.appendChild(loadHome());
    });

    contactBtn.addEventListener('click', function() {
        reset();
        content.appendChild(loadContact());
    });

    menuBtn.addEventListener('click', function() {
        reset();
        content.appendChild(loadMenu());
    });
})();



