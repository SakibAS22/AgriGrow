function highlightCard(card) {
  document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
}

let handleCardClick= (card)=>{
  highlightCard(card);
  window.location.href="https://en.wikipedia.org/wiki/Organic_farming";
}
