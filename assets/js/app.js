// app.js - Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelector('#scroll a').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#hello').scrollIntoView({ behavior: 'smooth' });
  });
  