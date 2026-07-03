// ============================
// Scroll Progress Bar
// ============================

window.addEventListener("scroll", () => {
    const progress = document.getElementById("progress-bar");

    if (progress) {
        const scrollTop = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const percent = (scrollTop / height) * 100;
        progress.style.width = percent + "%";
    }
});

// ============================
// Cursor Glow
// ============================

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
    if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    }
});

// ============================
// Reveal Animation
// ============================

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});
