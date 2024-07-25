document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const links = document.querySelectorAll('a');
    links.forEach(link => link.classList.toggle('light-mode'));
    const header = document.querySelector('header');
    header.classList.toggle('light-mode');
    const footer = document.querySelector('footer');
    footer.classList.toggle('light-mode');

    if(document.body.classList.contains('light-mode')) {
        this.textContent = 'Modo Escuro';
    } else {
        this.textContent = 'Modo Claro';
    }
});
