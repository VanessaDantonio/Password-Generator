// Array of special characters to be included in password
let specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  
// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
// Array of lowercase characters to be included in password
let lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
// Array of uppercase characters to be included in password
let upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Variable declaration
let passwordLength = '';
let getLowerOption;
let getUpperOption;
let getNumericOption;
let getSpecialCharOption;
let arr = '';
let getUserInput = [];
  
// Function to prompt user for password options
function getPasswordOptions() {
    passwordLength = prompt('How many characters would you like your password to contain?');

    // Loop if answer is outside the parameters
    while (passwordLength < 10 || passwordLength > 64) {
        alert('Your password must be between 10-64 characters. Please, try again.');
        passwordLength = prompt('How many characters would you like your password to contain?');
    }
    console.log(passwordLength);
    
    getLowerOption = confirm('Click OK if you would like to include lowercase characters');
    getUpperOption = confirm('Click OK if you would like to include uppercase characters');
    getNumericOption = confirm('Click OK if you would like to include numeric characters');
    getSpecialCharOption = confirm('Click OK if you would like to include special characters');
    
    // Loop if answer is outside the parameters
    while (getLowerOption === false && getUpperOption === false && getNumericOption === false && getSpecialCharOption === false) {
        alert("You must choose at least one parameter. Please, try again.");
        getLowerOption = confirm('Click OK if you would like to include lowercase characters');
        getUpperOption = confirm('Click OK if you would like to include uppercase characters');
        getNumericOption = confirm('Click OK if you would like to include numeric characters');
        getSpecialCharOption = confirm('Click OK if you would like to include special characters');
    }
    
    console.log(getLowerOption);
    console.log(getUpperOption);
    console.log(getNumericOption);
    console.log(getSpecialCharOption);
    return passwordLength, getLowerOption, getUpperOption, getNumericOption, getSpecialCharOption;
}
  
// Function for getting a random element from an array
function getRandom() {
    for (let i = 0; i < passwordLength; i++) {
        arr = arr + getUserInput[Math.floor(Math.random() * getUserInput.length)];
    }
    console.log(arr);
    return arr;
}
  
// Function to generate password with user input
function generatePassword() {
    getPasswordOptions();
    
    if (getLowerOption) {
        getUserInput = getUserInput.concat(lowerCasedCharacters);
    }

    if (getUpperOption) {
        getUserInput = getUserInput.concat(upperCasedCharacters);
    }

    if (getNumericOption) {
        getUserInput = getUserInput.concat(numericCharacters);
    }

    if (getSpecialCharOption === true) {
        getUserInput = getUserInput.concat(specialCharacters);
    }

    console.log(getUserInput);
    getRandom();
    return arr;
}

// Function to reset global values every time that user clicks the button
function resetValues() {
    passwordLength = '';
    getLowerOption;
    getUpperOption;
    getNumericOption;
    getSpecialCharOption;
    arr = '';
    getUserInput = [];
  }
  
// Get references to the #generate element
let generateBtn = document.querySelector('#generate');
  
// Write password to the #password input
function writePassword() {
    resetValues();
    let password = generatePassword();
    let passwordText = document.querySelector('#password');
  
    passwordText.value = password;
}
  
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);