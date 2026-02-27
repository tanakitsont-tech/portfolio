window.addEventListener("scroll", () => {
    document.querySelectorAll(".fill").forEach(bar => {
        bar.style.transition = "width 1.5s ease-in-out";
    });
});