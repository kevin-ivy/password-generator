// Assignment code here

//Pseudocode
// * Prompt user for selection between 8 and 128 characters
// * Prompt user if special characters should be included
// * Prompt user if numbers should be included
// * Prompt user if uppercase letters should be included
// * Prompt user if lowercase letters should be included
// ** Validate input at each level (prompt if invalid selection made. Require at least one selection
// Use previous prompts to generate random password
// * Display password generated in passwordText field

//Initialize Global Variables
var charList = '';
var passwordLength = 0;

var determineLength = function () {
  //Prompt the user to determine the length of the password
  passwordLength = Number(window.prompt("How long would you like your password to be? Choose between 8 and 128 characters."));

  //Retry if an invalid response is given
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("You need to input an appropriate value. Please try again.")
    return determineLength();
  } else {
    return passwordLength;
  }
};

var useLowerCase = function () {
  //Prompt the user if they want their password to include lowercase letters
  var useLower = window.confirm("Would you like your password to include lowercase letters?");
  if (useLower) {
    charList += 'abcdefghijklmnopqrstuvwxyz';
  } else {
    //Do nothing, this was not selected
  }
};

var useUpperCase = function () {
  //Prompt the user if they want their password to include uppercase letters
  var useUpper = window.confirm("Would you like your password to include uppercase letters?")
  if (useUpper) {
    charList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else {
    //Do nothing, this was not selected
  }
};

var useSymbols = function() {
  //Prompt the user if they want their password to include special characters
  useSpecial = window.confirm("Would you like your password to include special characters?")
  if (useSpecial){
    charList += '!@#$%^&*';
  } else {
    //Do nothing, this was not selected
  }
};

var useNumbers = function() {
  //Prompt the user if they want to use numbers in their password
  useNum = window.confirm("Would you like your password to include numbers?");
  if (useNum) {
    charList += '1234567890';
  } else {
    //Do nothing, this was not selected
  }
};

var generatePassword = function () {
  // reset the values for the password
  charList = '';
  passwordLength = 0;

  //First, get the length of the password
  determineLength();
  
  //Choose selectors to be included in password
  useLowerCase();
  useUpperCase();
  useSymbols();
  useNumbers();
  
  if (charList === '') {
    window.alert("You did not make a selection. Please select at least one password criteria.");
    return generatePassword();
  } else {
    for (i = 0; i < passwordLength; i++){
      password += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return password;
  }
};

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