
// highlight active nav link based on current page
document.addEventListener('DOMContentLoaded',()=>{
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a=>{
    const href = a.getAttribute('href');
    if(href===path){ a.classList.add('active'); }
  });
});
