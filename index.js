var allButtons = document.querySelectorAll(".drum");

//loop through every drum and add a listener to click events.
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function() {
    //store the character inside the drum image to a variable;
    var buttonInnerHTML = this.innerHTML;
    //the character that was stored will then be placed in the function checkKey to play the corrosponding drum sound.
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
  });
}

//waits for a keyboard event on the webpage to excecute the function
document.addEventListener("keydown", function(event) {
  //the stored character will then be placed in the function checkKey to play the corrosponding drum sound.
  makeSound(event.key);
  buttonAnimation(event.key);
});

//this function has a parameter containing the character that's pressed/clicked.
function makeSound(key) {
  //checks if the character is present and will check the corrosponding character with the right drum sound.
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;


    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;


    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;


    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(butttonInnerHTML);

  }
}


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");

  }, 100);
}
