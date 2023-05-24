import loadMenu from "./menu";
import { content, reset } from "./pageload"

export default function loadHome() {
    const homePage = document.createElement('div');
    homePage.classList.add('home-page');

    const createHeroSection = (function() {
        const heroSection = homePage.appendChild(document.createElement('div'));
        heroSection.classList.add('hero-section');

        const logo = heroSection.appendChild(document.createElement('div'));
        logo.classList.add('hero-logo');
        logo.innerHTML = `<img src="/src/images/hero-logo.png" alt="Grits & Griddles logo">`

        const h1 = heroSection.appendChild(document.createElement('h1'));
        h1.classList.add('hero-heading');
        h1.innerHTML = '<span>All Things</span> Breakfast,<br>Served <span>All Day</span>';
    })();

    const createCTA = (function() {
        const CTAContainer = homePage.appendChild(document.createElement('div'));
        CTAContainer.classList.add('cta-container');

        const h2 = CTAContainer.appendChild(document.createElement('h2'));
        h2.textContent = 'Hungry?';
        
        const p = CTAContainer.appendChild(document.createElement('p'));
        p.textContent = 'Come prepared! Pick out your order before dining with us.';

        const btn = CTAContainer.appendChild(document.createElement('button'));
        btn.id = 'view-menu-btn';
        btn.textContent = 'View Menu';

        btn.addEventListener('click', function() {
            reset();
            content.appendChild(loadMenu());
        });
    })();

    return homePage;
}