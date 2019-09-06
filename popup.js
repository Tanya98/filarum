setInterval(() => {
    document.addEventListener('mousemove', function (e) {
        if (e.clientY === 70 || e.clientY < 70) {
            show();
        }
        // console.log(e.clientY);
    });
}, 1000);


function show() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function hide() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
    console.log('hello');
}
