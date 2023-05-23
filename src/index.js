import './styles.css';
import loadHome from './modules/home';
import loadContact from './modules/contact';



const content = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const contactBtn = document.getElementById('contact-btn');

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
