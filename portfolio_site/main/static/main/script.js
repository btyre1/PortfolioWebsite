// portfolio_site/main/static/main/script.js

// ===== PROJECT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter.toLowerCase();

        // Active button highlight
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show/hide cards
        cards.forEach(card => {
            const techs = card.dataset.tech.toLowerCase().split(',').map(t => t.trim());
            if (filter === 'all' || techs.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===== LIGHTBOX =====
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.style.display = 'none';
});

const cardImages = document.querySelectorAll('.card-thumbnail img');
cardImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.innerHTML = `<span class="close">&times;</span><img src="${img.src}" alt="">`;
        lightbox.style.display = 'flex';

        document.querySelector('#lightbox .close').addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    });
});
