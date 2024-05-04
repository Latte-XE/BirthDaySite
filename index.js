var buttons = document.getElementsByTagName('button');
var images = document.getElementById('image1');

function onHover(stat) {
    if (stat === 0) {
        images.src = './assets/g01.jpg'
    }
    if (stat === 1) {
        images.src = './assets/g02.jpg'
    }
}