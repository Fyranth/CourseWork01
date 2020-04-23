function SetAnimationOnLoad () {
    var x = document.getElementsByClassName("opacity_blink");
    var xlength = x.length;
    for (let i=0; i<xlength; i++) {
        x[i].addEventListener("webkitAnimationEnd", setAnimationDelay);
        x[i].addEventListener("animationend", setAnimationDelay);
        var elstyle = x[i].style;
        elstyle.setProperty('animation', "3s linear figure_opacity_onload 1");
    };
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

function setAnimationDelay(el) {
    var delay = getRandomInt(1, 10);
    var elimg = el.srcElement;
    var elstyle = elimg.style;
    var animation_str = `10s linear ${delay}s figure_blink infinite`;
    elstyle.setProperty('animation', '');
    elstyle.setProperty('animation', animation_str);
    //elimg.addEventListener("webkitAnimationEnd", setAnimationDelay);
    //elimg.addEventListener("animationend", setAnimationDelay);
}