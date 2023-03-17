const img = ["1.jpg", "2.jpg", "3.jpeg"];

const bgImg = img[Math.floor(Math.random()*img.length)];

const image = document.createElement("img");

image.src = `img/${bgImg}`;

document.body.appendChild(image);
