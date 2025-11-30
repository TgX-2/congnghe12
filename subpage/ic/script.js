const overlay = document.getElementById('pageTransition');
window.addEventListener('load', () => {
    setTimeout(() => {
        overlay.classList.add('hide'); 
    }, 2000);
});
