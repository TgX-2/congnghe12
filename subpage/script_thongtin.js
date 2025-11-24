let isScrolling = false;
const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (isScrolling) return;

    isScrolling = true;

    const direction = e.deltaY > 0 ? 1 : -1;
    const height = window.innerHeight;

    wrapper.scrollBy({
        top: direction * height,
        behavior: "smooth"
    });

    setTimeout(() => {
        isScrolling = false;
    }, 700);
}, { passive: false });
