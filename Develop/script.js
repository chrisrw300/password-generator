// Variables for Password Generator
var passwordSpecialChar;
var passwordNumber;
var passwordUpperChar;
var passwordLowerChar;

var passwordLength = "";


// Array for Password Generator
var upperChar = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
  ];

var lowerChar = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
  ];

var specialChar = [
  "!","@","#","$","%","^","&","*","(",")","-","_","=","+","`","~","[","]","{","}","?",";",":","<",">"
  ];

var number = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
