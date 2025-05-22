document.addEventListener("DOMContentLoaded", function () {
    const section = document.getElementById("skills");
    if (!section) return;
    const bars = section.querySelectorAll(".exp-bar");
    let animated = false;

    function fillBars() {
        bars.forEach((bar) => {
            bar.classList.add("filled");
            bar.style.width = bar.dataset.width;
        });
    }

    // Only animate once, on first intersection after load
    const observer = new window.IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !animated) {
                    fillBars();
                    animated = true;
                    obs.disconnect();
                }
            });
        },
        { threshold: 0.3 },
    );

    observer.observe(section);
});