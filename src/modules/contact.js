export default function loadContact() {
    console.log('Hello from contact!');

    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-page');

    const createInfoContainer = (function() {
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container');

        const createContactInfoSection = (function() {
            console.log('hello from create contact info section!! yeah wow!');

            const contactInfoSection = document.createElement('div');
            contactInfoSection.classList.add('info-section');

            const h2 = contactInfoSection.appendChild(document.createElement('h2'));
            h2.textContent = 'Phone/Email';

            const phone = contactInfoSection.appendChild(document.createElement('div'));
            phone.textContent = '+1 (800) 800 – 8000';

            const email = contactInfoSection.appendChild(document.createElement('div'));
            email.textContent = 'howdy@gritsandgriddles.com';

            infoContainer.appendChild(contactInfoSection);
        })();

        const createHoursSection = (function() {
            console.log('hello from hours section!');

            const hoursSection = document.createElement('div');
            hoursSection.classList.add('info-section');

            const h2 = hoursSection.appendChild(document.createElement('h2'));
            h2.textContent = 'Hours';

            const createDayContainers = (function() {
                console.log('hello from day containers!');

                const days = [
                    {name: 'Mon', open: '5:00', close: '9:00'},
                    {name: 'Tue', open: '5:00', close: '9:00'},
                    {name: 'Wed', open: '5:00', close: '9:00'},
                    {name: 'Thu', open: '5:00', close: '9:00'},
                    {name: 'Fri', open: '5:00', close: '11:00'},
                    {name: 'Sat/Sun', open: '6:00', close: '8:00'},
                ];

                for (let i = 0; i < days.length; i++) {
                    console.log('whats up with this?');

                    const dayContainer = document.createElement('div');
                    dayContainer.classList.add('day-container');

                    const day = dayContainer.appendChild(document.createElement('div'));
                    day.textContent = days[i].name;

                    const hours = dayContainer.appendChild(document.createElement('div'));
                    hours.textContent = `${days[i].open}am – ${days[i].close}pm`;

                    hoursSection.appendChild(dayContainer);
                }
            })();

            infoContainer.appendChild(hoursSection);
        })();

        const createLocationSection = (function() {
            console.log('hello from create location!');

            const locationSection = document.createElement('div');
            locationSection.classList.add('info-section');

            const h2 = locationSection.appendChild(document.createElement('h2'));
            h2.textContent = 'Location';

            const storeName = locationSection.appendChild(document.createElement('div'));
            storeName.textContent = 'Grits & Griddles';

            const address = locationSection.appendChild(document.createElement('div'));
            address.textContent = '551 Krier Ln, Random Lake, WI 53075';

            const ifOnlyText = locationSection.appendChild(document.createElement('div'));
            ifOnlyText.textContent = 'If only this place existed...';

            infoContainer.appendChild(locationSection); 
            // Alternatively, the final append childs could be called in a separate function, to remove IIFEs
            // basically, just return the container you are creating, and call the function on the main element to create
        })();

        contactPage.appendChild(infoContainer);
    })();

    return contactPage;
}