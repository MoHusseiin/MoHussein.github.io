var delay = 250;
var isRunning = false;

window.addEventListener("load", function () {

    let animation = document.getElementById("animation");
    let size = document.getElementById("fontsize");
    let speed = document.getElementById("turbo");
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let myTextArea = document.getElementById("text-area");
    let timerId;
    let framsArr;
    let index;

    // Change Animation
    animation.onchange = function () {
        animationMode(false);
        prepereArea(window.ANIMATIONS[animation.value]);
    };

    // Change Size
    size.onchange = function () {
        myTextArea.className = size.value;
    };

    // check Turbo
    speed.onchange = function () {
        if (this.checked)
            delay /= 2;
        else
            delay *= 2;
        if(isRunning === false) { return; }

        if(timerId !== 0){
            clearInterval(timerId);
            animate();
        }
    };

    start.onclick = function(){
        animationMode(true);
        animate();
    };

    stop.onclick = function () {
        if(timerId !== 0) {
            clearInterval(timerId);
            animationMode(false);
        }
    };

    function animationMode(mode) {
        isRunning = mode;
        stop.disabled = !mode;
        if(!isRunning){  // stop
            myTextArea.value = "";
        }
        myTextArea.readOnly = !mode;
        animation.disabled = mode;
        start.disabled = mode;
    }

    function animate() {
        if(framsArr == "") return;
        timerId = setInterval(function () {
            index++;
            if(index >= framsArr.length) { index = 0;}
            myTextArea.value = framsArr[index];
        }, delay);
    }

    function prepereArea(frames) {
        framsArr = frames.split("=====\n");
        if(framsArr == "") return;
        index = 0;
        myTextArea.value = frames[index];
    }
});