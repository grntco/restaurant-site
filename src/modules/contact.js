export default function loadContact() {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-page');

    const h1 = contactPage.appendChild(document.createElement('h1'));
    h1.textContent = 'Contact Us';

    const createInfoContainer = (function() {
        const infoContainer = contactPage.appendChild(document.createElement('div'));
        infoContainer.classList.add('info-container');

        const createContactInfoSection = (function() {
            const contactInfoSection = infoContainer.appendChild(document.createElement('div'));
            contactInfoSection.classList.add('info-section');

            const h2 = contactInfoSection.appendChild(document.createElement('h2'));
            h2.textContent = 'Phone/Email';

            const phone = contactInfoSection.appendChild(document.createElement('div'));
            phone.textContent = '+1 (800) 800 – 8000';

            const email = contactInfoSection.appendChild(document.createElement('div'));
            email.textContent = 'howdy@gritsandgriddles.com';
        })();

        const createHoursSection = (function() {
            const hoursSection = infoContainer.appendChild(document.createElement('div'));
            hoursSection.classList.add('info-section');

            const h2 = hoursSection.appendChild(document.createElement('h2'));
            h2.textContent = 'Hours';

            const createDayContainers = (function() {
                const days = [
                    {name: 'Mon', open: '5:00', close: '9:00'},
                    {name: 'Tue', open: '5:00', close: '9:00'},
                    {name: 'Wed', open: '5:00', close: '9:00'},
                    {name: 'Thu', open: '5:00', close: '9:00'},
                    {name: 'Fri', open: '5:00', close: '11:00'},
                    {name: 'Sat/Sun', open: '6:00', close: '8:00'},
                ];

                for (let i = 0; i < days.length; i++) {
                    const dayContainer = hoursSection.appendChild(document.createElement('div'));
                    dayContainer.classList.add('day-container');

                    const day = dayContainer.appendChild(document.createElement('div'));
                    day.textContent = days[i].name;

                    const hours = dayContainer.appendChild(document.createElement('div'));
                    hours.textContent = `${days[i].open}am – ${days[i].close}pm`;
                }
            })();
        })();

        const createLocationSection = (function() {
            const locationSection = infoContainer.appendChild(document.createElement('div'));
            locationSection.classList.add('info-section');

            const h2 = locationSection.appendChild(document.createElement('h2'));
            h2.textContent = 'Location';

            const storeName = locationSection.appendChild(document.createElement('div'));
            storeName.textContent = 'Grits & Griddles';

            const address = locationSection.appendChild(document.createElement('div'));
            address.textContent = '551 Krier Ln, Random Lake, WI 53075';

            const ifOnlyText = locationSection.appendChild(document.createElement('div'));
            ifOnlyText.textContent = 'If only this place existed...';
        })();
    })();

    const createMap = (function() {
        const map = contactPage.appendChild(document.createElement('div'));
        map.classList.add('map');

        const embed = map.appendChild(document.createElement('iframe'));
        embed.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.4408197792063!2d-87.96818272283411!3d43.555696871106875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88049171727724d5%3A0x741e66e429a56866!2s551%20Krier%20Ln%2C%20Random%20Lake%2C%20WI%2053075!5e0!3m2!1sen!2sus!4v1684798541675!5m2!1sen!2sus'
        embed.style.border = "none";
        embed.referrerPolicy = 'no-referrer-when-downgrade';
    })();

    return contactPage;
}