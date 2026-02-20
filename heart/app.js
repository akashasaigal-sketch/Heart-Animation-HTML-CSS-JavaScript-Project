const heart = document.querySelector('.heart');

setInterval(() => {
  const colors = ['#ff0000', '#ff4d4d', '#ff8080', '#ff1a1a'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  heart.style.backgroundColor = randomColor;
  heart.style.setProperty('--heart-color', randomColor);
}, 500);
