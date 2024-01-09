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
  
  
  //series of prompts
//   var Length = Number(prompt("How many letters would you like your password to contain? Enter a number between 8-128."))
//   var charType = prompt("Enter character type: Special, Lowercase, Uppercase, Numbers")
//   password = generatePassword();
//   document.getElementById("display").value = password;//   document.getElementById('copy-btn').addEventListener('click', copyPassword);
  
  // Function to prompt user for password options
  function getPasswordOptions() {
  
  }
  
  
  // Function for getting a random element from an array
  function getRandom(arr) {
  
  }
  
  // Function to generate password with user input
  function generatePassword() {
    var charSets = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numeric: '0123456789',
      special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    };
    var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
    var retVal = "";
    for (var i = 0; i < length; i++) {
      retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return retVal;
  
    function copyPassword() {
        document.getElementById("display").select();
        document.execCommand("Copy");
        alert("Password copied to clipboard!");
    }
}
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var Length = Number(prompt("How many letters would you like your password to contain? Enter a number between 8-128."))
    var lowerCasedCharacters = confrim("Press Ok to include Lower case characters")
    var upperCasedCharacters = confrim("Press Ok to include Upper case characters")
    var specialCharacters = confrim("Press Ok to include Special characters")
    var includeNumbers = confrim("Press Ok to include Numbers")

    // var charType = prompt("Enter character type: Special, Lowercase, Uppercase, Numbers")
    var password = generatePassword();
    document.getElementById("display").value = password;
    document.getElementById('copy-btn').addEventListener('click', copyPassword);

   
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;

    var includeNumbers = confirm("Do you want numeric characters?");

      
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);






  
  //first prompt for password length options
  //prompt for four character types 
  // return value
