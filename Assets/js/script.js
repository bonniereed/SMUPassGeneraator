// Assigning original variables.
var generateBtn = document.querySelector("#generate");
var upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
var specialChar = ['!"#$%&*+-./:;<=>?@\[\\\]^_`\{|\}~'];
var numberChar = ['1234567890'];
var chooseNothing = 0;
var password = "";
var keyChar = "";

 //Prompts user for use of uppercase letters in password.
  function hasUpper() {
    var upChars = window.confirm("Would you like upper case letters in your password?");
    if (upChars) {
      chooseNothing++;
    }

    return upChars;
  }
  //Prompts user for use of lowercase letters in password.
  function hasLower() {
    var lowChars = window.confirm("Would you like lower case letters in your password?");
    if (lowChars) {
      chooseNothing++;
    }
    return lowChars;
  }
  //Prompts user for use of special characters in password.
  function hasSpec() {
    var specChars = window.confirm("Would you like special characters in your password?");
  if (specChars){
    chooseNothing++
  }
    return specChars;
  }
  //Prompts user for use of numbers in password.
  function hasNum() {
    var numChars = window.confirm("Would you like numbers in your password?");
    if (numChars) {
      chooseNothing++;
    }
    return numChars;
  }
// Generates the password based on user input from on screen prompts.
    function generatePassword(){
      //prompts user for password length.
  var passOptionLen = window.prompt("How many characters would you like your password length? (8\-128)");
  while((parseInt(passOptionLen) < 8 ) || (passOptionLen !== parseInt(passOptionLen, 10).toString()) || (parseInt(passOptionLen) > 128 )){
    alert ("You did not enter a valid number.");
    passOptionLen = window.prompt("How many characters would you like your password length? (8\-128)");
  }
  // Creating variables for if statements to create randomized password based on user selections.
  var upChars = hasUpper();
  var lowChars = hasLower();
  var specChars = hasSpec();
  var numChars = hasNum();
  password = "";
  //Chooses random character from the upperCaseChar string.
  if (upChars) {
    keyChar= keyChar + upperCaseChar;
    password = password + upperCaseChar[(Math.floor(Math.random()*upperCaseChar.length))];
  }
  //Chooses random character from the lowerCaseChar string.
  if (lowChars) {
    keyChar= keyChar + lowerCaseChar;
    password = password + lowerCaseChar[(Math.floor(Math.random()*lowerCaseChar.length))];
  }
  //Chooses random character from the specialChar string.
  if (specChars) {
    keyChar= keyChar + specialChar;
    password = password + specialChar[(Math.floor(Math.random()*specialChar.length))];
  }
  //Chooses random character from the numberChar string.
  if (numChars) {
    keyChar= keyChar + numberChar;
    password = password + numberChar[(Math.floor(Math.random()*numberChar.length))];
  }
    // runs through each of the listed if statements and increments until passOptionlen user is met.
  for (let index = password.length; index < passOptionLen; index++) {
    //If user did not make a selection this alerts the user that it is required.
    if (chooseNothing === 0 ) {
      alert ("You must make a selection from the character prompts.");
      generatePassword();
    }
    password = password + keyChar[(Math.floor(Math.random()*keyChar.length))];
    document.querySelector("#password").innerHTML = password;
  } return password;

}

// This function calls on the generate password function to start the password creation.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// This button starts the user input prompts to create a password made to user specifications.
generateBtn.addEventListener("click", writePassword);
