import loadHome from "./home";
import eggPan from '../images/egg-pan.svg';

const content = document.getElementById('content');

const resetContent = () => {
    content.innerHTML = '';
}

const loadPage = () => {
    const createNav = (function() {
        const nav = document.body.insertBefore(document.createElement('nav'), content);
        
        const createTopNav = (function() {
            const topNav = nav.appendChild(document.createElement('div'));
            topNav.classList.add('top-nav');

            const navLogo = topNav.appendChild(document.createElement('div'));
            navLogo.classList.add('nav-logo');
            const img = navLogo.appendChild(document.createElement('img'));
            img.src = eggPan;
            img.alt = 'egg pan logo';

            const ul = topNav.appendChild(document.createElement('ul'));
            ul.classList.add('nav-links-container');

            const homeBtn = ul.appendChild(document.createElement('li'));
            homeBtn.classList.add('nav-link');
            homeBtn.id = 'home-btn';
            homeBtn.textContent = 'Home';

            const menuBtn = ul.appendChild(document.createElement('li'));
            menuBtn.classList.add('nav-link');
            menuBtn.id = 'menu-btn';
            menuBtn.textContent = 'Menu';

            const contactBtn = ul.appendChild(document.createElement('li'));
            contactBtn.classList.add('nav-link');
            contactBtn.id = 'contact-btn';
            contactBtn.textContent = 'Contact';
        })();

        const createBanner = (function() {
            const banner = nav.appendChild(document.createElement('div'));
            banner.classList.add('banner');

            const h3 = banner.appendChild(document.createElement('h3'));
            h3.textContent = 'An All-American Breakfast Diner Experience';
        })();
    })();

    const createFooter = (function() {
        const footer = document.body.appendChild(document.createElement('footer'));

        const icon = footer.appendChild(document.createElement('a'));
        icon.href = 'https://github.com/grntco';
        icon.target = '_blank';
        icon.title = 'GitHub';
        icon.innerHTML = `<i class="fa-brands fa-github"></i>`;

        const name = footer.appendChild(document.createElement('div'));
        name.textContent = 'Grant Collins';
    })();

    content.appendChild(loadHome());
};

export { content, resetContent, loadPage }