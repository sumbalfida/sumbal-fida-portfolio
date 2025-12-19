// Smooth scrolling & active link
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Active link highlight on scroll
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 80;
    links.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
