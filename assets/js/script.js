//  variables i can call to in keys
var lowerStr ="abcdefghijklmnopqrstuvwxyz";
var upperStr = lowerStr.toUpperCase("");

// variable to keep 4 options organized:
const keys = {
  lowerArr: lowerStr.split(""),
  upperArr: upperStr.split(""),
  numbersArr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialArr: ["&", "|", "^", "@", "!", "?"]
}

// variable to randomize the characters
const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  } 
]

// user prompt function
var userPrompt = function() {
  var lowerCase = confirm("Would you like to use lowercase letters?")
  var upperCase = confirm("Would you like to use uppercase letters?")
  var numbers = confirm("Would you like to use numbers?")
  var symbols = confirm("Would you like to use special characters?")
    console.group(lowerCase, upperCase, numbers, symbols)
   
    // variables check if the user confirms above were true:
    const upper = document.getElementById("upperCase").lowerCase;
    const lower = document.getElementById("lowerCase").upperCase;
    const number = document.getElementById("number").numbers;
    const symbol = document.getElementById("symbol").symbols;
    // if any of these are false, they should be ommitted:
    if (upper === false) {
      
    }
    if (lower === false) {

    }
    if (number === false) {

    }
    if (symbol === false) {

    }
 };

// generate password function: 
var generatePassword = function() {
  var passLength = parseInt(window.prompt("How many characters do you want your password to be? *Must be between 8 -128 characters in length."));
  // password must be between 8 - 128 characters
  if (passLength < 8 || passLength > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    // return to parseInt window prompt
    return generatePassword();
  }
  // okay as of now this is perfect ^^^
  // prompt cannot be left blank
  if (passLength === "" || passLength === null) {
    window.alert("You need to provide an answer! Please try again.");
    // return to parseInt window prompt
   return generatePassword();
  }
  else { 
    userPrompt();
  }
};

// this is the variable that will display the user selection for the password criteria:
var userSelect = keys

var genButton = document.querySelector("#generate");
  console.log(genButton);

// this is the function to add password to text box/display area:
function writePassword() {
  displayPassword = "";

  var password = generatePassword();
  var passLength = passLength();

  displayPassword = genPassRand(userPrompt,passLength);

  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  document.getElementById("password").readOnly = false; 
  document.getElementById("password").value = displayPassword;
  document.getElementById("password").readOnly = true;

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
genButton.addEventListener("click", writePassword);