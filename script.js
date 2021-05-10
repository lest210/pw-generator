// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var askNumber;
var askCharacter;
var askUpperCase;
var askLowerCase;


character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;

var toUpper=function (x){
  return x.toUpperCase();
}

alphaUpper = alpha.map(toUpper);

var get = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
var pw = writePassword();
document.getElementById("password").placeholder = pw;



// Write password to the #password input
function writePassword() {

  window.prompt( "How many characters would you like your password to contain? Choose between 8-128 characters.");
  
  if (enter) {
    alert ("Value Needed");
  } else if (enter < 8 || enter > 128){
    window.prompt("Choose between 8 and 128!");
  
  } else {

    askNumber = confirm("Will this contain numbers?");
    askCharacter = confirm("Will this contain special characters?");
    askUpperCase = confirm("Will this contain capital letters?");
    askLowerCase = confirm("Will this contain lower case characters? ");
  }

  if(!askNumber && !askCharacter && !askUpperCase && !askLowerCase){
    window.prompt("Please choose from criteria!");

  }else if (askCharacter && askNumber && askUpperCase && askLowerCase){

    choices = character.concat(number, alpha, alphaUpper);



  }else if (askCharacter && askNumber && askUpperCase && askLowerCase){

    choices = character.concat(number, alpha);

  }else if (askCharacter && askNumber && askUpperCase && askLowerCase){

      choices = character.concat(number, alphaUpper);

  }else if (askCharacter && askNumber && askUpperCase && askLowerCase){

    choices = character.concat(alpha, alphaUpper);

  }else if (askCharacter && askNumber && askUpperCase && askLowerCase){

    choices = number.concat(alpha, alphaUpper);


  }  
  else if (askCharacter && askNumber) {
    choices = character.concat(number);

} else if (askCharacter && askLowerCase) {
    choices = character.concat(alpha);

} else if (askCharacter && askUpperCase) {
    choices = character.concat(alpha2);
}
else if (askLowerCase && askNumber) {
    choices = alpha.concat(number);

} else if (askLowerCase && askUpperCase) {
    choices = alpha.concat(alpha2);

} else if (askNumber && askUpperCase) {
    choices = number.concat(alpha2);
}

else if (aksCharacter) {
    choices = character;
}
else if (askNumber) {
    choices = number;
}
else if (askLowerCase) {
    choices = alpha;
}

    choices = space.concat(alphaUpper);
};


var password = [];


for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}





function UserInput(pw) {
document.getElementById("password").textContent = pw;

}
  
  
 
  

