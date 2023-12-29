

document.addEventListener("keydown", function(event){
    keyPress(event.key);
});
  

    

function keyPress(key) {
    switch (key){
        case "c":
            effectOn(key);
            var d1 = new Audio("music/do-80236.mp3");
            d1.play();
            effectOff(key);
    }
    switch (key){
        case "d":
            effectOn(key);
            var d2 = new Audio("music/re-78500.mp3");
            d2.play();
            effectOff(key);
    }
    switch (key){
        case "e":
            effectOn(key);
            var d3 = new Audio("music/mi-80239.mp3");
            d3.play();
            effectOff(key);
    }
    switch (key){
        case "f":
            effectOn(key);
            var d4 = new Audio("music/fa-78409.mp3");
            d4.play();
            effectOff(key);
    }
    switch (key){
        case "g":
            effectOn(key);
            var d5 = new Audio("music/sol-101774.mp3");
            d5.play();
            effectOff(key);
    }
    switch (key){
        case "a":
            effectOn(key);
            var d6 = new Audio("music/la-80237.mp3");
            d6.play();
            effectOff(key);
    }
    switch (key){
        case "b":
            effectOn(key);
            var d7 = new Audio("music/si-80238.mp3");
            d7.play();
            effectOff(key);
    }
}
function effectOn(key){
    document.querySelector("." + key).classList.add("pressed");
}
function effectOff(key){
    function re(key){
        document.querySelector("." + key).classList.remove("pressed");
    }
    setTimeout(re, 800, key);
}
