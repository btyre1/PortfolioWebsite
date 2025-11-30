// portfolio_site/main/static/main/script.js

/* ===== PROJECT FILTER ===== */
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // update active class on buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = (btn.dataset.filter || 'all').toLowerCase();

      cards.forEach(card => {
        // dataset.tech might be comma separated; normalize: remove extra spaces
        const techData = (card.dataset.tech || '').toLowerCase();
        const techs = techData.split(',').map(t => t.trim()).filter(Boolean);

        if (filter === 'all' || techs.includes(filter)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ===== LIGHTBOX ===== */
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.display = 'none';
  lightbox.style.position = 'fixed';
  lightbox.style.top = 0;
  lightbox.style.left = 0;
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.justifyContent = 'center';
  lightbox.style.alignItems = 'center';
  lightbox.style.background = 'rgba(0,0,0,0.8)';
  lightbox.style.zIndex = 2000;
  document.body.appendChild(lightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightbox.innerHTML = '';
    }
  });

  const cardImages = document.querySelectorAll('.card-thumbnail img');
  cardImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightbox.innerHTML = `
        <span class="close" style="position:absolute;top:20px;right:30px;font-size:2rem;color:#fff;cursor:pointer;">&times;</span>
        <img src="${img.src}" alt="" style="max-width:90%;max-height:80%;border-radius:8px;">
      `;
      lightbox.style.display = 'flex';

      const close = lightbox.querySelector('.close');
      if (close) close.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightbox.innerHTML = '';
      });
    });
  });

  /* ===== DARK MODE TOGGLE ===== */
  const toggleBtn = document.getElementById('theme-toggle');

  // safety: if toggleBtn not present, skip dark-mode setup
  if (toggleBtn) {
    // apply saved theme on load
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.body.classList.add('dark');
      toggleBtn.textContent = '☀️';
    } else {
      toggleBtn.textContent = '🌙';
    }

    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      toggleBtn.textContent = isDark ? '☀️' : '🌙';
    });
  }
});