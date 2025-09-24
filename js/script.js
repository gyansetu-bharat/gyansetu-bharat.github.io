// Transparent navbar that becomes solid on scroll
const nav = document.getElementById('topNav');
function onScroll(){
  if(window.scrollY > 60){ nav.classList.add('scrolled'); }
  else{ nav.classList.remove('scrolled'); }
}
document.addEventListener('scroll', onScroll);
onScroll();

// Smooth scroll + active link underline
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    if(link.getAttribute('href').startsWith('#')){
      e.preventDefault();
      const id = link.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  });
});

// Active state as you scroll
window.addEventListener('scroll', () => {
  const pos = window.scrollY + 120;
  document.querySelectorAll('section').forEach(sec => {
    const id = sec.getAttribute('id');
    const a = document.querySelector('a.nav-link[href="#'+id+'"]');
    if(!a) return;
    if(sec.offsetTop <= pos && sec.offsetTop + sec.offsetHeight > pos){
      a.classList.add('active');
    }else{
      a.classList.remove('active');
    }
  });
});
