var lowerStr = "abcdefghijklmnopqrstuvwxyz"
var lowerArr = lowerStr.split("");
var upperStr = lowerStr.toUpperCase("");
var upperArr = upperStr.split("");
var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArr = ["&", "|", "^"];
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  console.log(generateBtn);

function generatePassword() {
  var passLength = parseInt(window.prompt("How long do you want to make your password?"));
  var lowerCase = confirm("Would you like to use lowercase letters?")
  var upperCase = confirm("Would you like to use uppercase letters?")
  var numbers = confirm("Would you like to use numbers?")
  var specialCharacters = confirm("Would you like to use special characters?")
    console.group(lowerCase, upperCase, numbers, specialCharacters)
    if (specialCharacters)
  return "Hello :)";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);