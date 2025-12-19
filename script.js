// Smooth scroll & active link highlight
const links = document.querySelectorAll('#sidebar nav ul li a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 100;
    links.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
