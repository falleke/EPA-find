// Theme toggle setup
const toggle = document.getElementById('dark-toggle');
toggle.checked = false; // force light theme on initial load

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', toggle.checked);
  localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
});

// Apply saved theme if any
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  toggle.checked = true;
}

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const roomCards = document.querySelectorAll('.room-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    roomCards.forEach(card => {
      const category = card.dataset.category;
      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Search input
document.querySelector('.search-input').addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  roomCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(term)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
});
