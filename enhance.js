// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Fade-in effect for images as the user scrolls
window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const imagePosition = img.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (imagePosition < screenPosition) {
            img.classList.add('fade-in');
        }
    });
});

// Fade-in class definition for images (Added directly in JS)
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 1;
            transition: opacity 1s ease-in-out;
        }
        img {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
});

// Set the dynamic year in the footer
const yearSpan = document.querySelector("#current-year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
});
