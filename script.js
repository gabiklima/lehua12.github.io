const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>40)});

const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');
let menuOpen=false;
hamburger.addEventListener('click',()=>{menuOpen=!menuOpen;mobileMenu.classList.toggle('open',menuOpen);document.body.style.overflow=menuOpen?'hidden':''});
document.querySelectorAll('.mobile-link').forEach(l=>l.addEventListener('click',()=>{menuOpen=false;mobileMenu.classList.remove('open');document.body.style.overflow=''}));

const revealEls=document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right');
const revealObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
revealEls.forEach(el=>revealObs.observe(el));

const filterBtns=document.querySelectorAll('.filter-btn');
const portfolioItems=document.querySelectorAll('.portfolio-item');
filterBtns.forEach(btn=>{btn.addEventListener('click',()=>{filterBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;portfolioItems.forEach(item=>{if(f==='all'||item.classList.contains(f)){item.classList.remove('hidden')}else{item.classList.add('hidden')}})})});

function animateBars(){document.querySelectorAll('.bar').forEach(bar=>{bar.style.height=bar.dataset.value+'%'})}
const resultsSection=document.getElementById('results');
let barsAnimated=false;
const barsObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting&&!barsAnimated){barsAnimated=true;setTimeout(animateBars,300)}})},{threshold:0.3});
if(resultsSection)barsObs.observe(resultsSection);

const yearBtns=document.querySelectorAll('.year-btn');
yearBtns.forEach(btn=>{btn.addEventListener('click',()=>{yearBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const year=btn.dataset.year;document.querySelectorAll('.bar-wrap').forEach(wrap=>{const bar=wrap.querySelector('.bar');if(!bar)return;const is25=bar.classList.contains('bar-2025');const is26=bar.classList.contains('bar-2026');wrap.style.display=year==='comparison'?'flex':year==='2025'?is25?'flex':'none':is26?'flex':'none'})})});

const contactForm=document.getElementById('contactForm');
if(contactForm){contactForm.addEventListener('submit',e=>{e.preventDefault();const btn=contactForm.querySelector('button[type="submit"]');btn.textContent='sent! ✦';btn.style.background='#4ade80';btn.style.borderColor='#4ade80';btn.disabled=true;setTimeout(()=>{btn.textContent='send it →';btn.style.background='';btn.style.borderColor='';btn.disabled=false;contactForm.reset()},3000)})}

const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll',()=>{let current='';sections.forEach(s=>{if(window.scrollY>=s.offsetTop-100)current=s.getAttribute('id')});navLinks.forEach(l=>{l.style.color=l.getAttribute('href')==='#'+current?'var(--text)':''})});
