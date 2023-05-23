export default function loadHome() {
    const homePage = document.createElement('div');
    homePage.classList.add('home-page');

    const createHeroSection = (function() {
        const heroSection = document.createElement('div');
        heroSection.classList.add('hero-section');

        const logo = document.createElement('div')
        logo.classList.add('hero-logo');
        logo.innerHTML = `<img src="/src/images/hero-logo.png" alt="Grits & Griddles logo">`

        const h1 = document.createElement('h1');
        h1.classList.add('hero-heading');
        h1.innerHTML = '<span>All Things</span> Breakfast,<br>Served <span>All Day</span>';
    
        heroSection.appendChild(logo);
        heroSection.appendChild(h1);

        homePage.appendChild(heroSection);
    })();

    const createCTA = (function() {
        const CTAContainer = document.createElement('div')
        CTAContainer.classList.add('cta-container');

        const h2 = document.createElement('h2');
        h2.textContent = 'Hungry?';
        
        const p = document.createElement('p');
        p.textContent = 'Come prepared! Pick out your order before dining with us.';

        const btn = document.createElement('button');
        btn.id = 'view-menu-btn';
        btn.textContent = 'View Menu';

        CTAContainer.appendChild(h2);
        CTAContainer.appendChild(p);
        CTAContainer.appendChild(btn);

        // The Button may need an event listener here to open the menu page.
        homePage.appendChild(CTAContainer);
    })();

    return homePage;
}