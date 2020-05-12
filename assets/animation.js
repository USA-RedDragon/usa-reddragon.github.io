
window.onload = function() {
    function line(particle, particle2) {
        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(particle2.x, particle2.y);
        context.stroke();
    }

    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < maxParticles; i++) {
            var particle = particles[i];
            context.fillRect(particle.x - particleSize / 2, particle.y - particleSize / 2, particleSize, particleSize);
            for (var j = 0; j < maxParticles; j++) {
                if (i != j) {
                    var particle2 = particles[j];
                    var distanceX = Math.abs(particle.x - particle2.x);
                    var distanceY = Math.abs(particle.y - particle2.y);
                    if (distanceX < threshold && distanceY < threshold) {
                        context.lineWidth = ((threshold * 2) - (distanceX + distanceY)) / 50;
                        var color = 200 - Math.floor(distanceX + distanceY);
                        context.strokeStyle = 'rgb(' + color + ',' + color + ',' + color + ')';
                        line(particle, particle2);
                    }
                }
            }
            particle.x = particle.x + particle.vx;
            particle.y = particle.y + particle.vy;
            if (particle.x > canvas.width - particleSize || particle.x < particleSize)
                particle.vx = -particle.vx;
            if (particle.y > canvas.height - particleSize || particle.y < particleSize)
                particle.vy = -particle.vy;
        }
        window.requestAnimationFrame(animate);
    }

    var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    var canvas = document.getElementById('constellationCanvas');
    var context = canvas.getContext('2d');
    var particles = [];
    var particleSize = 4;
    var maxParticles = 60;
    var threshold = 100;
    if (isMobile) {
        threshold = threshold * 0.65;
    }
    canvas.height = canvas.parentNode.clientHeight;
    canvas.width = canvas.parentNode.clientWidth;
    for (var i = 0; i < maxParticles; i++) {
        var particle = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() * 1.15) * (Math.random() > 0.5 ? 1:-1),
            vy: (Math.random() * 1.15) * (Math.random() > 0.5 ? 1:-1),
        }
        particles.push(particle);
    }
    context.fillStyle = 'white';
    animate();
}