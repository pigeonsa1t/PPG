var lowerStr = "abcdefghijklmnopqrstuvwxyz"
var lowerArr = lowerStr.split("")
var upperStr = lowerStr.toUpperCase("")
var upperArr = upperStr.split("")
var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialArr = ["&", "|", "^", "@", "!", "?"]
// Variables for password
// ***done with tutor


function generatePassword() {
// Get references to the #generate element
  var passLength = parseInt(window.prompt("How many characters do you want your password to be? *Must be between 8 -128 characters in length."));
  // password must be between 8 - 128 characters
  if (passLength < 8 || passLength > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    // return to parseInt window prompt
    return generatePassword();
  }
  // now ask user for password criteria
  var lowerCase = confirm("Would you like to use lowercase letters?")
  var upperCase = confirm("Would you like to use uppercase letters?")
  var numbers = confirm("Would you like to use numbers?")
  var symbols = confirm("Would you like to use special characters?")
    console.group(lowerCase, upperCase, numbers, symbols)
}

var genButton = document.querySelector("#generate");

//add password to text box/display area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// add event listener to generate button
genButton.addEventListener("click", writePassword);











  // Random Gen Functions:
  function getRandomLower() {
    return lowerArr();
  }
  function getRandomUpper() {
    return upperArr();
  }
  function getRandomNumber() {
    return numbersArr();
  }
  function getRandomSymbol() {
    return specialArr();
  }