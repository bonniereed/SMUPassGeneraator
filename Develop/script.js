// Assignment Code
var generateBtn = document.querySelector("#generate");
// var upperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
var specialChar = ['!@#$%^&*'];
var numberChar = ['1234567890'];
// var specialChar = ['!','@','#','$','%','^','&','*'];
// var numberChar = ['1','2','3','4','5','6','7','8','9','0'];
var password = "";
var keyChar = "";

  function hasUpper() {
    var upChars = window.confirm("Would you like upper case letters in your password?");
    return upChars;
  }
  //Prompts user for use of lowercase letters in password
  function hasLower() {
    var lowChars = window.confirm("Would you like lower case letters in your password?");
    return lowChars;
  }
  //Prompts user for use of special characters in password
  function hasSpec() {
    var specChars = window.confirm("Would you like special characters in your password?");
    return specChars;
  }
  //Prompts user for use of numbers in password
  function hasNum() {
    var numChars = window.confirm("Would you like numbers in your password?");
    return numChars;
  }

    function generatePassword(){
      //prompts user for password length.
  var passOptionLen = window.prompt("How many characters would you like your password length? (8\-128)");
  while((parseInt(passOptionLen) < 8 ) || (passOptionLen !== parseInt(passOptionLen, 10).toString()) || (parseInt(passOptionLen) > 128 )){
    alert ("You did not enter a valid number.");
    passOptionLen = window.prompt("How many characters would you like your password length? (8\-128)");
  }
  var upChars = hasUpper();
  var lowChars = hasLower();
  var specChars = hasSpec();
  var numChars = hasNum();
  password = "";

  if (upChars) {
    keyChar= keyChar + upperCaseChar;
    password = password + upperCaseChar[(Math.floor(Math.random()*upperCaseChar.length))];
  }
  if (lowChars) {
    keyChar= keyChar + lowerCaseChar;
    password = password + lowerCaseChar[(Math.floor(Math.random()*lowerCaseChar.length))];
  }
  if (specChars) {
    keyChar= keyChar + specialChar;
    password = password + specialChar[(Math.floor(Math.random()*specialChar.length))];
  }
  if (numChars) {
    keyChar= keyChar + numberChar;
    password = password + numberChar[(Math.floor(Math.random()*numberChar.length))];
  }

  for (let index = password.length; index < passOptionLen; index++) {
    password = password + keyChar[(Math.floor(Math.random()*keyChar.length))];
    document.querySelector("#password").innerHTML = password;
  } return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
