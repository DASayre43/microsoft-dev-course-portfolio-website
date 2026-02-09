document.addEventListener("navLoaded", () => {
    const banner = document.getElementById('banner');

    function swapBackground() {
        banner.classList.add("turn-page");

        // revert after 10s
        setTimeout(() => {
          banner.classList.remove("turn-page");
        }, 10000);
    }

    // run every 10s
    setInterval(swapBackground, 10000);
    
});
