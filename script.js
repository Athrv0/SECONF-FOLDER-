// JavaScript is not needed for this specific animation, but here's a simple color change as an enhancement:
window.onload = function() {
    let helloElement = document.getElementById('helloWorld');
    let colors = ['#ff8a00', '#00bcd4', '#ff4081', '#009688'];

    setInterval(() => {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        helloElement.style.color = randomColor;
    }, 1500);
};
