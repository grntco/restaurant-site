import './styles.css';
import loadHome from './modules/home';

const content = document.getElementById('content');
content.appendChild(loadHome());