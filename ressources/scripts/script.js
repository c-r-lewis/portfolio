document.querySelectorAll(".folder").forEach(folder => {
    let intervalId = null;

    folder.addEventListener("click", function() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            return;
        }

        const images = folder.querySelectorAll("img");
        let visibleIndex = -1;

        images.forEach((img, index) => {
            if (getComputedStyle(img).opacity === "1") {
                visibleIndex = index;
            }
        });

        intervalId = setInterval(() => {
            if (visibleIndex !== -1) {
                images[visibleIndex].style.opacity = "0";
            }

            visibleIndex = (visibleIndex + 1) % images.length;
            images[visibleIndex].style.opacity = "1";

            if (visibleIndex === images.length - 1) {
                clearInterval(intervalId);
                intervalId = null;
                const projectUrl = folder.getAttribute('data-project-url');
                if (projectUrl) {
                    window.location.href = `${window.location.origin}/${projectUrl}`;
                }
            }
        }, 35);
    });
});
