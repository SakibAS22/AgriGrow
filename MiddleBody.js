const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    const page = card.getAttribute('data-page');
    alert(`Redirecting to ${page}.html...`);
    // window.location.href = `${page}.html`; // Uncomment for real redirect
  });
});

// Page button navigation
const pageButtons = document.querySelectorAll('.page-btn');
pageButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    alert(`Navigating to ${target}.html`);
    // window.location.href = `${target}.html`;
  });
});