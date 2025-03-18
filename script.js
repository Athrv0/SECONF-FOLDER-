window.onload = function() {
    let helloElement = document.getElementById('helloWorld');
    let colors = ['#ff6a00', '#ee0979', '#a8ff78', '#42eaff'];

    setInterval(() => {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        helloElement.style.color = randomColor;
    }, 1000);
};
