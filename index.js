/**
 * Created by Administrator on 2017/12/13.
 */
var canvas = $('#canvas')[0];
var context = canvas.getContext('2d');
var timer = null;
var now = 0;
var pos = [
    {marginTop: -253,left1: 402, top2:25, left2:25},
    {marginTop: -215,left1: 251, top2:25, left2:225},
    {marginTop: -161,left1: 34, top2:25, left2:450},
    {marginTop: -150,left1: 163, top2:280, left2:380},
    {marginTop: -196,left1: 343, top2:280, left2:160},
    {marginTop: -225,left1: 494, top2:300, left2:15}
];



function draw(x, y) {
    setTimeout(function () {}, 1000);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(x, y, 10, 0, 2*Math.PI);
        context.fill();
        context.closePath();
}

function animate() {
    $('.move').eq(0).css('marginTop', pos[now].marginTop+'px');
    $('.move').eq(0).css('left', pos[now].left1);
    if(now < 5) {
        console.log(now);
        $('.move').eq(0).animate({opacity:1}, 500, 'linear').delay(3000).animate({opacity:0}, 500, 'linear');
    } else {
        console.log(now);
        $('.move').eq(0).animate({opacity:1}, 500, 'linear').delay(3000);
    }
}

function start() {
    timer = setInterval(function () {
        animate();
        draw(pos[now].top2, pos[now].left2);
        now++;
        if(now == 6) {
            clearInterval(timer);
        }
    }, 5000);
}

$('#start')[0].addEventListener("click", start, false);




