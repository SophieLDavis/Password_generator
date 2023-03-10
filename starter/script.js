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

//Prompt for password length
var passWordLength=0
function getPasswordOptions() {
passWordLength=prompt("Please choose a password length between 10 and 64 characters.")
if (passWordLength<10) {
alert("Please choose a longer password.")
return prompt;
} if (passWordLength>64) {
alert("Please choose a shorter password.")
return prompt;
}
console.log("Password length is " + passWordLength)
};

let variableNames=[
  ["lowercase characters", lowerCasedCharacters],
  ["uppercase characters", upperCasedCharacters],
  ["numeric characters", numericCharacters],
  ["special characters", specialCharacters]
]

let userYes= [
  ["lowercase characters"],
  ["uppercase characters"],
  ["numeric characters"],
  ["special characters"]
]

//Prompt for yes/ no to character types from the 4 options
var randomChoice= []
//var userYes=[]
function getRandom() {
for (let i=0; i<4; i++) {
var userChoice= prompt("Would you like your password to contain characters from " + variableNames[i][0] + "? Please answer 'yes' to confirm yes. All other inputs will answer 'no'.")
if (userChoice=="yes") {
alert("You have selected to include " + variableNames[i][0]+ ".")
userYes[i].push(true)
console.log("Has " + variableNames[i][0] + " been selected by user? " +
true)
} if (userChoice!="yes") {
alert("You have selected not to include " + variableNames[i][0] + ".")
userYes[i].push(false)
console.log("Has " + variableNames[i][0] + " been selected by user? " +
false)
}
}
} 

//Prompt to generate a random character from each character type array.
var randomPassword=[]
function generateAPassword() {
for (i=0; i<65; i++) {
if (userYes[0][i]==true) {
  randomPassword.push(lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)])
}
if (userYes[1][i]==true) {
  randomPassword.push(upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)])
}
if (userYes[2][i]==true) {
  randomPassword.push(numericCharacters[Math.floor(Math.random()*numericCharacters.length)])  
}
if (userYes[3][i]==true) {
  randomPassword.push(specialCharacters[Math.floor(Math.random()*specialCharacters.length)])
}
else if (passWordLength==randomPassword.length) {
alert("Your random password is:   " + randomPassword)
console.log("Your random password is:   " + randomPassword)  
break
}
}
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
 //var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener(
  'click', getPasswordOptions, 
);
generateBtn.addEventListener(
  'click', getRandom
);

generateBtn.addEventListener(
  'click', generateAPassword
);
generateBtn.addEventListener(
  'click', writePassword
);
