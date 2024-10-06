document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed('#iam-a', {
        strings: ['Student', 'Web Developer', 'Content Creator'],
        typeSpeed: 75,
        backDelay: 3000,
        loop: true
    });

    const themeButton = document.getElementById('theme-button');
    const themeIcon = document.getElementById('theme-icon');
    const humbergerButton = document.getElementById('humberger-button');
    const navbarLinks = document.getElementById('navbar-links');

    const darkModeCookie = Cookies.get('darkMode');
    if (darkModeCookie === '1') {
        document.documentElement.classList.add('dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeButton.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.toggle('dark');
        themeIcon.classList.toggle('fa-moon', !isDarkMode);
        themeIcon.classList.toggle('fa-sun', isDarkMode);
        Cookies.set('darkMode', isDarkMode ? '1' : '', { secure: true, expires: 365 });
    });

    humbergerButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('hidden');
    });

    //hover card
    const hoverCards = document.querySelectorAll('.hover-card');
    hoverCards.forEach(card => {
        const linkHoverCard = card.querySelector('a.link-hover-card');
        const tooltip = card.querySelector('.tooltip');

        linkHoverCard.addEventListener('mousemove', (e) => {
            const rect = linkHoverCard.getBoundingClientRect();
            const tooltipWidth = 200;
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const adjustedX = (x + tooltipWidth > rect.width) ? rect.width - tooltipWidth - 10 : x;
            tooltip.style.top = `${y + 10}px`;
            tooltip.style.left = `${adjustedX + 10}px`;
        });

        linkHoverCard.addEventListener('mouseenter', () => {
            tooltip.classList.remove('hidden');
        });

        linkHoverCard.addEventListener('mouseleave', () => {
            tooltip.classList.add('hidden');
        });
    });

    Fancybox.bind();
    AOS.init();
});
