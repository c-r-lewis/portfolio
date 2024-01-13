document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('fireworks-container');

    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'dot';
        container.appendChild(firework);

        const colors = ['#ff5733', '#ffcc33', '#33ff57', '#3349ff', '#cc33ff'];
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';

        setTimeout(() => {
            container.removeChild(firework);
            explode(firework);
        }, 2000);
    }

    function explode(parentDot) {
        const explosionCount = 50;

        for (let i = 0; i < explosionCount; i++) {
            createExplosion(parentDot);
        }
    }

    function createExplosion(parentDot) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        container.appendChild(dot);

        const colors = ['#ff5733', '#ffcc33', '#33ff57', '#3349ff', '#cc33ff'];
        dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        const parentX = parseFloat(parentDot.style.left);
        const parentY = parseFloat(parentDot.style.top);
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 50 + 20; // Adjust the distance of the smaller dots

        const x = parentX + Math.cos(angle) * distance;
        const y = parentY + Math.sin(angle) * distance;

        dot.style.left = x + 'px';
        dot.style.top = y + 'px';

        // Animate fading out
        dot.style.animation = 'fade-out 1s ease-out forwards';

        setTimeout(() => {
            container.removeChild(dot);
        }, 1000);
    }

    function startFireworks() {
        setInterval(createFirework, 200);
    }

    startFireworks();
});