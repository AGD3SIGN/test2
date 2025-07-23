const canvas = document.getElementById("beams-canvas");
const ctx = canvas.getContext("2d");

const beams = [];
const intensity = "strong"; // options: subtle, medium, strong
const opacityMap = {
    subtle: 0.7,
    medium: 0.85,
    strong: 1,
};

function createBeam(width, height) {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 30 + Math.random() * 60,
        length: height * 2.5,
        angle,
        speed: 0.6 + Math.random() * 1.2,
        opacity: 0.12 + Math.random() * 0.16,
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

function resetBeam(beam, index, totalBeams) {
    const column = index % 3;
    const spacing = canvas.width / 3;

    beam.y = canvas.height + 100;
    beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
    beam.width = 100 + Math.random() * 100;
    beam.speed = 0.5 + Math.random() * 0.4;
    beam.hue = 190 + (index * 70) / totalBeams;
    beam.opacity = 0.2 + Math.random() * 0.1;
    return beam;
}

function drawBeam(beam) {
    ctx.save();
    ctx.translate(beam.x, beam.y);
    ctx.rotate((beam.angle * Math.PI) / 180);

    const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * opacityMap[intensity];

    const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
    gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
    gradient.addColorStop(0.1, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
    gradient.addColorStop(0.4, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
    gradient.addColorStop(0.6, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
    gradient.addColorStop(0.9, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
    gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

    ctx.fillStyle = gradient;
    ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
    ctx.restore();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.filter = "blur(35px)";

    const totalBeams = beams.length;
    beams.forEach((beam, index) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;

        if (beam.y + beam.length < -100) {
            resetBeam(beam, index, totalBeams);
        }

        drawBeam(beam);
    });

    requestAnimationFrame(animate);
}

function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const totalBeams = 30;
    beams.length = 0;
    for (let i = 0; i < totalBeams; i++) {
        beams.push(createBeam(canvas.width, canvas.height));
    }
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animate();
