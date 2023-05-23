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
        })();


        contactPage.appendChild(infoContainer);
    })();

    return contactPage;
}