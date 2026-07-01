const contrastToggle = document.getElementById('contrastToggle');
const body = document.body;
const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if (contrastToggle) {
    contrastToggle.addEventListener('click', () => {
        body.classList.toggle('high-contrast');
        const isHighContrast = body.classList.contains('high-contrast');
        contrastToggle.setAttribute('aria-pressed', String(isHighContrast));
        contrastToggle.textContent = isHighContrast ? 'Desativar alto contraste' : 'Ativar alto contraste';
    });
}
