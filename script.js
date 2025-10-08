// Portfolio Website JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Highlight active navigation link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Simple animation for header text
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const title = document.querySelector('header h1');
    const subtitle = document.querySelector('header p');
    
    // Add a subtle animation to the header
    header.style.opacity = '0';
    title.style.transform = 'translateY(-20px)';
    subtitle.style.transform = 'translateY(20px)';
    
    // Animate in
    setTimeout(() => {
        header.style.transition = 'opacity 1s ease';
        title.style.transition = 'transform 1s ease';
        subtitle.style.transition = 'transform 1s ease';
        
        header.style.opacity = '1';
        title.style.transform = 'translateY(0)';
        subtitle.style.transform = 'translateY(0)';
    }, 300);
});

console.log("Portfolio website loaded and enhanced with professional features");
