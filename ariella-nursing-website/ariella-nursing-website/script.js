const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
  lightboxImage.src = item.dataset.full;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}));
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
}
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Ariella Nursing website enquiry: ' + form.get('subject'));
  const body = encodeURIComponent(
    'Name: ' + form.get('name') + '\\n' +
    'Phone: ' + form.get('phone') + '\\n' +
    'Email: ' + (form.get('email') || 'Not provided') + '\\n\\n' +
    'Message:\\n' + form.get('message')
  );
  window.location.href = 'mailto:ariellanursing2026@gmail.com?subject=' + subject + '&body=' + body;
});
