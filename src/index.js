import './styles.css';
import loadHome from './modules/home';

loadHome();


// not getting access to the index.html file for some reason 
// const content = document.getElementById('content');
// content.textContent = 'Hello world.'

// content.appendChild(loadHome());

console.log('Hello, webpack!!');
console.log('Hello, no main js!!');