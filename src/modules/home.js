export default function loadHome() {
    const homePage = document.createElement('div');
    homePage.classList.add('home-page');

    const createHeroSection = (function() {
        console.log('hello there from IIFE!'); 

        const heroSection = document.createElement('div');
        heroSection.classList.add('hero-section');

        const heroLogo = document.createElement('div');
        heroLogo.classList.add('hero-logo');
        heroLogo.innerHTML = `<img src="/src/images/hero-logo.png" alt="Grits & Griddles logo">`

        const heroHeading = document.createElement('h1');
        heroHeading.classList.add('hero-heading');
        heroHeading.innerHTML = '<span>All Things</span> Breakfast,<br>Served <span>All Day</span>';
    
        heroSection.appendChild(heroLogo);
        heroSection.appendChild(heroHeading);
        homePage.appendChild(heroSection);
    })();


    return homePage;
}