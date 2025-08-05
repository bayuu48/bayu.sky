alert("WEB INI BISA DI JALANKAN!!");
    
const canvas = document.getElementById('meteorCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let meteors = [];

function createMeteor() {
  return {
    x: Math.random() * canvas.width,
    y: 0,
    length: Math.random() * 80 + 10,
    speed: Math.random() * 4 + 4,
    angle: Math.PI / 4, // 45 derajat
    opacity: Math.random() * 0.5 + 0.5
  };
}

function drawMeteor(meteor) {
  const xEnd = meteor.x + meteor.length * Math.cos(meteor.angle);
  const yEnd = meteor.y + meteor.length * Math.sin(meteor.angle);

  ctx.beginPath();
  ctx.moveTo(meteor.x, meteor.y);
  ctx.lineTo(xEnd, yEnd);
  ctx.strokeStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
  ctx.lineWidth = 2;
  ctx.stroke();
}

function updateMeteors() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  meteors.forEach((meteor, index) => {
    meteor.x += meteor.speed * Math.cos(meteor.angle);
    meteor.y += meteor.speed * Math.sin(meteor.angle);
    drawMeteor(meteor);

    if (meteor.x > canvas.width || meteor.y > canvas.height) {
      meteors[index] = createMeteor();
    }
  });

  requestAnimationFrame(updateMeteors);
}

// Mulai animasi
for (let i = 0; i < 30; i++) {
  meteors.push(createMeteor());
}
updateMeteors();

// Responsive canvas resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});



