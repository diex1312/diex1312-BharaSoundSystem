// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close menu when clicking nav links
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mainNav.contains(e.target)) {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });
}

// Booking Form - WhatsApp Integration
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const nama = document.getElementById('nama').value;
        const tanggal = document.getElementById('tanggal').value;
        const lokasi = document.getElementById('lokasi').value;
        const jenisEvent = document.getElementById('jenisEvent').value;
        const pesan = document.getElementById('pesan').value;

        // Format date
        const dateObj = new Date(tanggal);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('id-ID', options);

        // Create WhatsApp message
        const message = `Halo Bhara Sound System,\n\nSaya ingin memesan layanan sound system:\n\nNama: ${nama}\nTanggal Acara: ${formattedDate}\nLokasi: ${lokasi}\nJenis Event: ${jenisEvent}\nCatatan Tambahan: ${pesan || '-'}\n\nMohon informasi lebih lanjut mengenai ketersediaan dan harga. Terima kasih!`;

        // WhatsApp number
        const whatsappNumber = '6281226509675';

        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');
    });
}

// Contact Form - Simple validation and WhatsApp redirect
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const nama = document.getElementById('contactNama').value;
        const email = document.getElementById('contactEmail').value;
        const subjek = document.getElementById('contactSubjek').value;
        const pesan = document.getElementById('contactPesan').value;

        // Create WhatsApp message
        const message = `Halo Bhara Sound System,\n\nPesan dari website:\n\nNama: ${nama}\nEmail: ${email}\nSubjek: ${subjek}\nPesan:\n${pesan}`;

        // WhatsApp number
        const whatsappNumber = '6281226509675';

        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Show confirmation
        alert('Terima kasih! Anda akan diarahkan ke WhatsApp.');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to elements
const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .booking-container, .contact-container');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});