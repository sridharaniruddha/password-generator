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
  
  
  // Function to generate password with user input
  function generatePassword() {
    var charSets = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numeric: "0123456789",
      special: "!#$%&*+=?@~",
      
    }
    let password = "";
    const charSet = [];

    const length = parseInt(

    prompt("How many letters would you like your password to contain? Enter a number between 8-128."));
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length between 8 and 128 characters."); 
      return;
    }


    if (confirm("Press Ok to include Lowercase characters")) {
      charSet.push(lowercase); // 
    }

    if (confirm("Press Ok to include Uppercase characters")) {
      charSet.push(uppercase); // 
    }

    if (confirm("Press Ok to include Numeric characters")) {
      charSet.push(numeric); // 
    }

    if (confirm("Press Ok to include Lowercase characters")) {
      charSet.push(lowercase); // 
    }

    if (charSet.length === 0) {
      alert("You must select at least one character type."); 
      return;
    }

}
  

      
    // Ensure at least one character from each selected type
    charSet.forEach(charType => {
      const randomIndex = Math.floor(Math.random() * charType.length);
      password += charType[randomIndex];
    });
  
    const remainingLength = length - charset.length;
  
    const passwordChars = charset.join(","); 
    const passwordArray = combinedChars.split("");   
  
    for (let i = 0; i < remainingLength; i++) {
      const randomIndex = Math.floor(Math.random() * passwordArray.length);
      password += passwordArray[randomIndex];
    }
  




  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    


    // var inlcudeUppercase = confirm("Press Ok to include Upper case characters");
    // var includeSpecial = confirm("Press Ok to include Special characters");
    // var includeNumbers = confirm("Press Ok to include Numbers");

  //   function copyPassword() {
  //     document.getElementById("display").select();
  //     document.execCommand("Copy");
  //     alert("Password copied to clipboard!");
  // }


    // if(inlcudeUppercase == true) {
    //   newArray.push(uppercasedCharacters)
    //   }

    // if(includeLowercase == true) {
    //   newArray.push(lowercasedCharacters)
    // }

    // if(includeSpecial == true) {
    //   newArray.push(specialCharacters)
    //   }

    //   if(includeNumbers == true) {
    //     newArray.push(numericCharacters)
    //     }

    // var charType = prompt("Enter character type: Special, Lowercase, Uppercase, Numbers"

    // var includeNumbers = confirm("Do you want numeric characters?");

      
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);






  
  //first prompt for password length options
  //prompt for four character types 
  // return value
  // return value
