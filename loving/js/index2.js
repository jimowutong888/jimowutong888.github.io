var arr = "2021-11-18 00:00:00".split(/[- :]/);
var box = document.getElementsByClassName('textCon')[0];
function init() {
    var width = box.offsetWidth;
    var count = parseInt(width / 50 * 5);
    for (var i = 0; i < count; i++) {
        var size = parseInt(ran(60, 120) / 10);
        var ele = document.createElement('div');
        ele.classList.add('item');
        ele.style.width = size + 'px';
        ele.style.height = size + 'px';
        ele.style.left = ran(0, 95) + '%';
        ele.style.top = ran(20, 80) + '%';
        ele.style.animationDelay = ran(0, 30) / 10 + 's';
        box.appendChild(ele);
    }
}
function ran(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
init();
