const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>40)});
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');
let menuOpen=false;
hamburger.addEventListener('click',()=>{menuOpen=!menuOpen;mobileMenu.classList.toggle('open',menuOpen);document.body.style.overflow=menuOpen?'hidden':''});
document.querySelectorAll('.mobile-link').forEach(link=>{link.addEventListener('click',()=>{menuOpen=false;mobileMenu.classList.remove('open');document.body.style.overflow=''})});
const phrases=['memorable brands.','real results.','powerful content.','visual stories.'];
let phraseIndex=0,charIndex=0,isDeleting=false;
const typedEl=document.querySelector('.typed-text');
function type(){if(!typedEl)return;const current=phrases[phraseIndex];if(isDeleting){typedEl.textContent=current.substring(0,charIndex-1);charIndex--}else{typedEl.textContent=current.substring(0,charIndex+1);charIndex++}let delay=isDeleting?60:100;if(!isDeleting&&charIndex===current.length){delay=1800;isDeleting=true}else if(isDeleting&&charIndex===0){isDeleting=false;phraseIndex=(phraseIndex+1)%phrases.length;delay=400}setTimeout(type,delay)}
setTimeout(type,800);
const revealEls=document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right');
const revealObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
revealEls.forEach(el=>revealObserver.observe(el));
const statNums=document.querySelectorAll('.stat-num');
function animateCounter(el){const target=parseInt(el.dataset.target,10);const step=target/(1800/16);let current=0;const timer=setInterval(()=>{current=Math.min(current+step,target);el.textContent=Math.floor(current);if(current>=target)clearInterval(timer)},16)}
const counterObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){animateCounter(entry.target);counterObserver.unobserve(entry.target)}})},{threshold:0.5});
statNums.forEach(el=>counterObserver.observe(el));
const filterBtns=document.querySelectorAll('.filter-btn');
const portfolioItems=document.querySelectorAll('.portfolio-item');
filterBtns.forEach(btn=>{btn.addEventListener('click',()=>{filterBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;portfolioItems.forEach(item=>{if(filter==='all'||item.classList.contains(filter)){item.classList.remove('hidden')}else{item.classList.add('hidden')}})})});
function animateBars(){document.querySelectorAll('.bar').forEach(bar=>{bar.style.height=bar.dataset.value+'%'})}
const resultsSection=document.getElementById('results');
let barsAnimated=false;
const barsObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting&&!barsAnimated){barsAnimated=true;setTimeout(animateBars,300)}})},{threshold:0.3});
if(resultsSection)barsObserver.observe(resultsSection);
const yearBtns=document.querySelectorAll('.year-btn');
yearBtns.forEach(btn=>{btn.addEventListener('click',()=>{yearBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const year=btn.dataset.year;document.querySelectorAll('.bar-wrap').forEach(wrap=>{const bar=wrap.querySelector('.bar');if(!bar)return;const is2025=bar.classList.contains('bar-2025');const is2026=bar.classList.contains('bar-2026');if(year==='comparison'){wrap.style.display='flex'}else if(year==='2025'){wrap.style.display=is2025?'flex':'none'}else if(year==='2026'){wrap.style.display=is2026?'flex':'none'}})})});
const contactForm=document.getElementById('contactForm');
if(contactForm){contactForm.addEventListener('submit',(e)=>{e.preventDefault();const btn=contactForm.querySelector('button[type="submit"]');btn.textContent='Message Sent!';btn.style.background='linear-gradient(135deg,#4ade80,#22d3ee)';btn.disabled=true;setTimeout(()=>{btn.textContent='Send Message';btn.style.background='';btn.disabled=false;contactForm.reset()},3000)})}
const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll',()=>{let current='';sections.forEach(section=>{if(window.scrollY>=section.offsetTop-100)current=section.getAttribute('id')});navLinks.forEach(link=>{link.style.color=link.getAttribute('href')==='#'+current?'var(--text)':''})});
