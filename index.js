//detect clicks. 
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var drums = document.querySelectorAll(".drum");
for(var i = 0; i < numberOfDrumButtons; i ++ ){
    drums[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;   
        sound(buttonInnerHTML);
        makeAnimation(buttonInnerHTML);

    });
}
//detect keyboard presses.
document.addEventListener("keypress", function(event){
    let caps=event.key.toUpperCase();
    sound(caps);
    makeAnimation(event.key);
})

// plays sound.
function sound(key){
    switch (key){
        case "W" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "A" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
            break;

        case "S" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "D" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "J" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "K" :
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        
        case "L" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
    }
}
function makeAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed"), 1000
    });
}
document.addEventListener("touchstart", function(event){
    var touch = event.changedTouches[0];
    var element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element.classList.contains("drum")) {
        var buttonInnerHTML = element.innerHTML;
        sound(buttonInnerHTML);
        makeAnimation(buttonInnerHTML);
    }
}, false);
