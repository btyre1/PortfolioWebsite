// portfolio_site/main/static/main/script.js

/* =========================================
   MAIN SCRIPT
   Handles project filtering, lightbox gallery, and dark mode toggle (AI generated comment)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== PROJECT FILTER (AI generated comment) ===== */
  // Select all filter buttons and project cards
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  // Add click listener to each filter button
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {

      // Remove 'active' class from all buttons and add it to clicked button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Get filter from button data attribute (default to 'all')
      const filter = (btn.dataset.filter || 'all').toLowerCase();

      // Show/hide cards based on filter
      cards.forEach(card => {
        // Read comma-separated tech stack from dataset and normalize
        const techData = (card.dataset.tech || '').toLowerCase();
        const techs = techData.split(',').map(t => t.trim()).filter(Boolean);

        // Show card if filter matches or if filter is 'all'
        if (filter === 'all' || techs.includes(filter)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ===== LIGHTBOX (Got idea from Dynamic Web Fundamentals class) (AI generated comment) ===== */ 
  // Dynamically create lightbox element and append to body 
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

  // Clicking outside the image closes the lightbox
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightbox.innerHTML = '';
    }
  });

  // Select all card images and make them clickable
  const cardImages = document.querySelectorAll('.card-thumbnail img');
  cardImages.forEach(img => {
    img.style.cursor = 'pointer';

    img.addEventListener('click', () => {
      // Populate lightbox with clicked image and a close button
      lightbox.innerHTML = `
        <span class="close" style="position:absolute;top:20px;right:30px;font-size:2rem;color:#fff;cursor:pointer;">&times;</span>
        <img src="${img.src}" alt="" style="max-width:90%;max-height:80%;border-radius:8px;">
      `;
      lightbox.style.display = 'flex';

      // Close button inside lightbox
      const close = lightbox.querySelector('.close');
      if (close) close.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightbox.innerHTML = '';
      });
    });
  });

  /* ===== DARK MODE TOGGLE (AI generated comment) ===== */
  const toggleBtn = document.getElementById('theme-toggle');

  // Only run if toggle button exists
  if (toggleBtn) {
    // Apply saved theme on page load
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.body.classList.add('dark');
      toggleBtn.textContent = '☀️'; // sun icon if dark
    } else {
      toggleBtn.textContent = '🌙'; // moon icon if light
    }

    // Toggle dark mode on button click
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark'); // toggle class
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light'); // save preference
      toggleBtn.textContent = isDark ? '☀️' : '🌙'; // update icon
    });
  }
});