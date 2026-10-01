const toggle = document.querySelector('.mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggle.querySelector('span').textContent = document.body.classList.contains('light-mode') ? 'NIGHT' : 'MODE';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('revealed');
  });
}, { threshold: 0.12 });
document.querySelectorAll('section').forEach((section) => observer.observe(section));
