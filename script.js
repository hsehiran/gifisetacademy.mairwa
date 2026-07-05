const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuBtn){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));}
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));


const whatsappBtn = document.getElementById('sendWhatsapp');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    const name = document.getElementById('enquiryName')?.value || '';
    const phone = document.getElementById('enquiryPhone')?.value || '';
    const course = document.getElementById('enquiryCourse')?.value || '';
    const message = document.getElementById('enquiryMessage')?.value || '';

    const text = `New Website Enquiry - GIFISET Academy Mairwa%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(phone)}%0ACourse: ${encodeURIComponent(course)}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/919934266073?text=${text}`, '_blank');
  });
}
