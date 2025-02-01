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
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const message = document.getElementById('message')?.value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos antes de enviar.');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            e.preventDefault();
            alert('Por favor, insira um e-mail válido.');
        }
    });
}

// animação de scroll para seções
const sections = document.querySelectorAll('section');
if (sections.length > 0) {
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
}

// scroll suave para seções
const navLinks = document.querySelectorAll('nav a');
if (navLinks.length > 0) {
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}