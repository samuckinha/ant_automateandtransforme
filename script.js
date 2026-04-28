// Controle do Carrossel de Banner
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides[currentSlide].classList.add('active');
}

function moveSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}

// Auto-play do banner
setInterval(() => moveSlide(1), 5000);

// Geração dos 15 itens do Acordeon
const accordionContainer = document.getElementById('accordion');

for (let i = 1; i <= 15; i++) {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.innerHTML = `
        <div class="accordion-header" onclick="toggleAccordion(this)">
            Serviço #${i}: Gestão de ${['Financeiro', 'Estoque', 'Vendas', 'Pessoas'][i % 4]}
        </div>
        <div class="accordion-content">
            <p style="padding: 15px;">Este é um texto exemplo para o serviço ${i}. Oferecemos suporte completo para otimizar os processos da sua pequena empresa com tecnologia de ponta.</p>
        </div>
    `;
    accordionContainer.appendChild(item);
}

function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const allContents = document.querySelectorAll('.accordion-content');
    
    // Fecha outros itens (opcional)
    allContents.forEach(c => {
        if (c !== content) c.style.maxHeight = null;
    });

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

