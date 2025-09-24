// Smooth scrolling and nav active link highlight
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 80;
  document.querySelectorAll('section').forEach(section => {
    let id = section.getAttribute('id');
    let link = document.querySelector('a.nav-link[href="#' + id + '"]');
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});