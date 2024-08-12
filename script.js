 // =================toggle icon navbar ================
 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 };

// ============scroll section active links==============
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // =================sticky navbar================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

      // =================remove toggle icon and navbar when click navbar links(scroll)================
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    //===================scroll-reveal=============
    ScrollReveal({ 
        reset: true,
        distance:'80px',
        duration:2000,
        delay:200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img,.skill-main, .project-box, .contact form', { origin: 'botom' });
    ScrollReveal().reveal('.home-content h1, home-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

 //===================typed js=============

const typed =new Typed('.multiple-text',{
    strings:['Frontend Developer','Backend Developer','FullStack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    const form = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };
  
    emailjs.send(
      'service_206ejpj', 
      'template_nmioud8', 
      {
        from_name: form.name,
        to_name: 'Anjali',
        from_email: form.email,
        to_email: 'anjaliroyrishra@gmail.com',
        message: form.message,
      },
      'WcB7B8h0t40x4YKeW'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you I will get back to you as soon as possible.');
      document.getElementById('contactForm').reset();
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    });
  };
  
  const setLoading = (isLoading) => {
    const submitBtn = document.getElementById('submitBtn');
    if (isLoading) {
      submitBtn.value = 'Sending...';
      submitBtn.disabled = true;
    } else {
      submitBtn.value = 'Send Message';
      submitBtn.disabled = false;
    }
  };
  


  