import './styles.css';
import loadHome from './modules/home';
import loadContact from './modules/contact';
import loadMenu from './modules/menu';

const content = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const contactBtn = document.getElementById('contact-btn');
const menuBtn = document.getElementById('menu-btn');
// const viewMenuBtn = document.getElementById('view-menu-btn');

const reset = () => {
    content.innerHTML = '';
}

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

// viewMenuBtn.addEventListener('click', function() {
//     reset();
//     content.appendChild(loadMenu());
// });

// DOESNT WORK?


