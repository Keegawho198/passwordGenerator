//generate random password
function generate(){
    var size = undefined;


    //set password length
    while (size == undefined) {
        var userInput = parseInt(prompt("How many characters to do want in the password?"));

        if (userInput < 8) {
            alert("You must have more than 8 characters in a password");
        } else if (userInput > 128) {
            alert("Password must be less than 128 characters");
        } else {
            size = userInput;
        }
    }
    

    //need to add a prompt asking user if they want a special character.
    //need to make sure that the special character is included into the password.
    //need to change the values
    //need to add if statement where it checks if the user wants to add a special character.

    //possible password values
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890";
    //var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    //var numbers = "1234567890";
    //var specialChar = "!@#$%^&*()_+";

    var password = "";

    //create for loop to choose password characters
    for(var i = 0; i < size; i++){
        password = password + upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length - 1)));
       // password = password + lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length - 1)));
       // password = password + numbers.charAt(Math.floor(Math.random() * Math.floor(numbers.length - 1)));
       // password = password + specialChar.charAt(Math.floor(Math.random() * Math.floor(specialChar.length - 1)));

    }

    //add password to textbox/display area
    document.getElementById("display").value = password;


}

//set default length display of 25
// document.getElementById("length").innerHTML = "Length: 25";

// //function to set length based on slider position
// document.getElementById("slider").oninput = function(){

//     if(document.getElementById("slider").value > 0){
//         document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
//     }
//     else{
//         document.getElementById("length").innerHTML = "Length: 1";
//     }

// }

//function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}