// main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('A weboldal sikeresen betöltődött! 🚀');

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Megakadályozza a form alapértelmezett elküldését

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Itt küldhetnénk az adatokat egy szerverre (pl. fetch API-val)
            // Jelenleg csak kiírjuk a konzolra
            console.log('Kapcsolatfelvételi űrlap elküldve:');
            console.log(`Név: ${name}`);
            console.log(`E-mail: ${email}`);
            console.log(`Üzenet: ${message}`);

            alert('Köszönjük az üzenetet! Hamarosan felvesszük veled a kapcsolatot.');

            contactForm.reset(); // Visszaállítja az űrlapot
        });
    }
});