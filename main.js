document.querySelector('body').style.fontFamily = 'Arial, sans-serif';

document.querySelector('#nickname').textContent = 'geho';
document.querySelector('#favorites').textContent = 'rap, burger, naruto';
document.querySelector('#hometown').textContent = 'Newcastle';
document.querySelector('#fact').textContent = 'I play soccer';

document.querySelector('ul').style.color = 'hotpink';

const image = document.createElement('img');
image.src = './Images/Soccer.png';
document.querySelector('body').appendChild(image);