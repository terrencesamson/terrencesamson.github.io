// 1. Update footer year automatically
const footerYear = document.querySelector("footer span");

if (footerYear) {
    footerYear.textContent =
        `© ${new Date().getFullYear()} TERRENCE SAMSON`;
}


// 2. Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// 3. Reveal sections when scrolling
const revealElements = document.querySelectorAll(
    "section, .hero"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});


// 4. Project hover interaction
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
        project.style.transition = "0.3s ease";
    });
});


// 5. Display a message in the console
console.log("Welcome to Terrence Samson's Portfolio!");
Connect JavaScript to your HTML
Add this line just before the closing </body> tag:

<script src="script.js"></script>
Add this CSS to your style.css
This enables the scroll reveal animation:


css

/* SCROLL REVEAL ANIMATION */

.reveal {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.8s ease,
                transform 0.8s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}
