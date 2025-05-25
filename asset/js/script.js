
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation for project cards when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = 0;
    observer.observe(card);
});



    // تأثير التمرير للنافبار
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });




    document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-player');
    const playButton = document.querySelector('.play-button');
    const playPauseBtn = document.querySelector('#play-pause');
    const rewindBtn = document.querySelector('#rewind');
    const forwardBtn = document.querySelector('#forward');
    const fullscreenBtn = document.querySelector('#fullscreen');
    const videoOverlay = document.querySelector('.video-overlay');
    
    // Play/Pause toggle
    function togglePlay() {
        if (video.paused) {
            video.play();
            playButton.style.opacity = '0';
            videoOverlay.style.opacity = '0';
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playButton.style.opacity = '1';
            videoOverlay.style.opacity = '1';
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }
    
    // Event Listeners
    playButton.addEventListener('click', togglePlay);
    videoOverlay.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);
    
    playPauseBtn.addEventListener('click', togglePlay);
    
    rewindBtn.addEventListener('click', function() {
        video.currentTime -= 10;
    });
    
    forwardBtn.addEventListener('click', function() {
        video.currentTime += 10;
    });
    
    fullscreenBtn.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
    
    // Update caption steps based on video time
    video.addEventListener('timeupdate', function() {
        const steps = document.querySelectorAll('.caption-step');
        const duration = video.duration;
        const currentTime = video.currentTime;
        
        steps.forEach((step, index) => {
            const stepTime = (duration / steps.length) * index;
            
            if (currentTime >= stepTime) {
                steps.forEach(s => s.classList.remove('active'));
                step.classList.add('active');
            }
        });
    });
    
    // Click on caption to seek to that part
    document.querySelectorAll('.caption-step').forEach((step, index) => {
        step.addEventListener('click', function() {
            const duration = video.duration;
            video.currentTime = (duration / document.querySelectorAll('.caption-step').length) * index;
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    document.querySelector('.year').textContent = new Date().getFullYear();
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            // Here you would typically send the email to your server
            alert(`Thank you for subscribing with ${email}!`);
            this.querySelector('input').value = '';
        });
    }
    
    // Add floating animation to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        icon.style.animation = `float 3s ease-in-out ${index * 0.1 + 1}s infinite`;
    });
});