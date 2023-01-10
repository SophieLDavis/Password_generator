// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];




/*/Generate a password when the button is clicked
* Present a series of prompts for password criteria
  * Length of password
    * At least 10 characters but no more than 64
  * Character types
    * Lowercase
    * Uppercase
    * Numeric
    * Special characters ($@%&*, etc)
* Code should validate for each input and at least one character type should be selected
* Once prompts are answered then the password should be generated and displayed in an alert or written to the page
/*/


//prompt one-> Produce a password between 10-64 inclusive 
//function if element is less than <10, return error
//.. else if function if more than >64, return error
//..else continue to next prompt 

// Function to prompt user for password options

var passWordLength=0
function getPasswordOptions() {
passWordLength=prompt("Please choose a password length between 10 and 64 characters.")
if (passWordLength<10) {
alert("Please choose a longer password.")
return ;
} if (passWordLength>64) {
alert("Please choose a shorter password.")
return;
}
console.log("Password length is " + passWordLength)
};

getPasswordOptions();



//prompt 2-> Choose to include 1, 2, 3 or 4 (all) character types in password 
//math.random-> specialCharacters , numericCharacters , lowerCasedCharacters , upperCasedCharacters

// Function for getting a random element from an array

let variableNames=[
  ["lowercase characters", lowerCasedCharacters],
  ["uppercase characters", upperCasedCharacters],
  ["numeric characters", numericCharacters],
  ["special characters", specialCharacters]
]
var randomChoice= []
var userYes=[]
function getRandom() {
for (let i=0; i<4; i++) {
var userChoice= prompt("Would you like your password to contain characters from " + variableNames[i][0] + "? Please answer 'yes' to confirm yes.")
if (userChoice=="yes") {
alert("You have selected to include " + variableNames[i][0]+ ".")
userYes.push(true)
console.log("Has " + variableNames[i][0] + " been selected by user? " +
true)
} if (userChoice!="yes") {
alert("You have selected not to include " + variableNames[i][0] + ".")
userYes.push(false)
console.log("Has " + variableNames[i][0] + " been selected by user? " +
false)
}
}
}
getRandom();

// how do i store the results of each for loop? randomChoice gets overwritten every time.. ?
// how do i get the password to equal the length the user selects?
var randomPassword=[]
function generatePassword() {
for (i=0; i<65; i++) {
if (userYes[i]==true) {
  randomPassword.push(lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)])
}
if (userYes[i]==true) {
  randomPassword.push(upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)])
}
if (userYes[i]==true) {
  randomPassword.push(numericCharacters[Math.floor(Math.random()*numericCharacters.length)])  
}
if (userYes[i]==true) {
  randomPassword.push(specialCharacters[Math.floor(Math.random()*specialCharacters.length)])
}
else if (passWordLength==randomPassword.length) {
alert("Your random password is:   " + randomPassword)
console.log("Your random password is:   " + randomPassword)  
break
}
}
}

  generatePassword()


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);