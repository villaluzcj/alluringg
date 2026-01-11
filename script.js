onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// Valentine card open/close
const card = document.getElementById("valCard");

card.addEventListener("click", () => {
  card.classList.toggle("open");
});
const valCard = document.getElementById('valCard');

card.addEventListener('click', () => {
  card.classList.toggle('open');
});

// Remove 'not-loaded' from body to trigger any entrance animations
window.onload = () => {
  document.body.classList.remove("not-loaded");
};

card.addEventListener('click', function() {
  this.classList.toggle('open');
});