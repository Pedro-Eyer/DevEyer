document.querySelectorAll('section#certifications article').forEach(article => {
    article.addEventListener('mouseenter', () => {
        article.style.transform = 'scale(1.05)';
        article.style.transition = 'transform 0.3s ease';
    });
    article.addEventListener('mouseleave', () => {
        article.style.transform = 'scale(1)';
    });
});

//validacao do form
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Por favor, preencha todos os campos antes de enviar.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert('Por favor, insira um e-mail válido.');
    }
});

// animação de scroll para seções
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});

// scroll suave para seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Quando o usuário rolar a página
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});




