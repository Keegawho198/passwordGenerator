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
           // alert("You must use a number betwe");
        }
    }

    //  var specialInput = confirm("Would you like to include special characters?");

    // while (specialInput == false){
    //     if(specialInput == true ){
    //         alert("Using special character");
    //     }else{
    //         alert("You must have a special character");
    //         specialInput ==false;
    //     }
    // }

    //need to add a prompt asking user if they want a special character.
    //need to make sure that the special character is included into the password.
    //need to change the values
    //need to add if statement where it checks if the user wants to add a special character.

    //possible password values
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    var specialChar = "";
   // var character = "";

    var password = "";

    //create for loop to choose password characters
    for(var i = 0; i < size; i++){
        password = password + upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length - 1)));
        //password2 = password + specialChar.charAt(Math.floor(Math.random() * Math.floor(specialChar.length - 1)));
        //character += upperCase.charAt( password1 );
       // character += specialChar.charAt( password2);
       // password = character;
        //password=password.split('').sort(function(){return Math.random()}).join('');

    }

    //add password to textbox/display area
    document.getElementById("display").value = password;


}



//function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}