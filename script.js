// Theme handling
const themeButtons = document.querySelectorAll('.theme-btn');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    const root = document.documentElement;
    const isDark = theme === 'dark' || 
                  (theme === 'system' && prefersDark.matches);
    
    if (isDark) {
        root.style.setProperty('--bg-color', '#000000');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--card-bg', '#111111');
        root.style.setProperty('--hover-color', '#222222');
    } else {
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
        root.style.setProperty('--card-bg', '#f5f5f5');
        root.style.setProperty('--hover-color', '#e5e5e5');
    }
    
    localStorage.setItem('theme', theme);
}

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.classList.contains('light') ? 'light' : 
                     btn.classList.contains('dark') ? 'dark' : 'system';
        setTheme(theme);
    });
});

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'system';
setTheme(savedTheme);

// Back to top functionality
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTop.style.opacity = '1';
    } else {
        backToTop.style.opacity = '0';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// scroll reveal
const header = document.querySelector('header');

// Function to add the sticky class when scrolling
function stickyHeader() {
    if (window.scrollY > 0) { // If the user has scrolled down
        header.classList.add('sticky');
    } else { // If the user is at the top of the page
        header.classList.remove('sticky');
    }
}

// Call the stickyHeader function when scrolling
window.addEventListener('scroll', stickyHeader);

// scroll theme
function setTheme(theme) {
    const root = document.documentElement;
    const isDark = theme === 'dark' || 
                  (theme === 'system' && prefersDark.matches);
    
    if (isDark) {
        root.style.setProperty('--bg-color', '#000000');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--card-bg', '#111111');
        root.style.setProperty('--hover-color', '#222222');
    } else {
        root.style.setProperty('--bg-color', '#ffffff'); // light background
        root.style.setProperty('--text-color', '#000000'); // dark text
        root.style.setProperty('--card-bg', '#f5f5f5'); // light card background
        root.style.setProperty('--hover-color', '#e5e5e5'); // lighter hover effect
    }
    
    localStorage.setItem('theme', theme);
}

// scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}