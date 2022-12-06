// Detecting a click
var drumlength = document.querySelectorAll(".drum").length;

for (var i=0; i<drumlength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
    });

}

//Detecting a key press
document.addEventListener("keypress", function(event){
    makesound(event.key);
});

// Function for switch statemnt to make a sound

function makesound(key){
    switch(key){
        case"w":
            var tom1 = new Audio("sounds/tom-1.mp3");
        break;
    }
}