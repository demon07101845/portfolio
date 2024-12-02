var typed = new Typed('.text', {
  strings: ['Web Developer', 'Learner', 'YouTuber', 'Coder'],
  typeSpeed: 90,
  backSpeed: 90,
  backDelay: 1000,
  loop: true,
});
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('#menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
});

// document.querySelectorAll('.navbar a').forEach((link) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const targetId = this.getAttribute('href').substring(1);
//     const targetElement = document.getElementById(targetId);

//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop,
//         behavior: 'smooth',
//       });
//     }
//   });
// });

