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

//Starting function, will start with greeting and asking specifications for password
function generatePassword() {

  window.alert("Let's make you a secure password!");

  var passwordLength = window.prompt("How long would you like your password? Choose between 8 - 128.");

    //makes sure the input is between 8 and 128, not below or above
    while(passwordLength <= 7 || passwordLength >= 128) {

      window.alert("Your password must be 8 - 128 characters long!");

      var passwordLength = window.prompt("How long would you like your password? Choose between 8 - 128.");

    } 

  window.alert("Your password will be " + passwordLength + " characters long!");
  
  console.log(passwordLength);

  //confirms which characters the user wants to include in password
  var passwordUpperChar = window.confirm("Would you like uppercase letters in your password? Click OK");

  var passwordLowerChar = window.confirm("Would you like lowercase letters in your password? Click OK");

  var passwordSpecialChar = window.confirm("Would you like special characters in your password? Click OK");

  var passwordNumber = window.confirm("Would you like numbers in your password? Click OK");
  
  // Makes sure that at least one option is true
  while(passwordUpperChar === false && passwordLowerChar === false && passwordSpecialChar === false && passwordNumber === false) {

    //Alerts the user that they must choose at least one option
    window.alert("You have to choose at least one of the options for a safe password!");
    
    //Brings up confirmations again to choose at least one option
    var passwordUpperChar = window.confirm("Would you like uppercase letters in your password? Click OK");

    var passwordLowerChar = window.confirm("Would you like lowercase letters in your password? Click OK");

    var passwordSpecialChar = window.confirm("Would you like special characters in your password? Click OK");

    var passwordNumber = window.confirm("Would you like numbers in your password? Click OK");
  }

  //storage for the generated password
  var finalPassword = []

  //adds each option to the final password string
  if (passwordUpperChar) {

    finalPassword = finalPassword.concat(passwordUpperChar);

    console.log("uppercase characters added to password!");

  } else {

    console.log("uppercase characters not added to password!");
    }

  if (passwordLowerChar) {

    finalPassword = finalPassword.concat(passwordLowerChar);

    console.log("lowercase characters added to password!");

  } else {

    console.log("lowercase characters not added to password!");
    }

  if (passwordSpecialChar) {

    finalPassword = finalPassword.concat(passwordSpecialChar);

    console.log("special characters added to password!");

  } else {

    console.log("special characters not added to password!");

    }

  if (passwordNumber) {

    finalPassword = finalPassword.concat(passwordNumber);

    console.log("numbers added to password!");

  } else {

    console.log("numbers not added to password!");

    }

    console.log(finalPassword);

    //puts all specifications into a string
    var randomPasswordString = "";

    for (var i = 0; i < passwordLength; i++) {
      randomPasswordString = randomPasswordString + finalPassword[Math.floor(Math.random() * randomPasswordString.length)];
    }

    return randomPasswordString;
  
}


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
