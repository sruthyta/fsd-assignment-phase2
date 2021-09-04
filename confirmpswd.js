function validateForm() {
    //collect form data in JavaScript variables
    // var name1 = document.getElementById("fname").value;
    var PassEntry = document.getElementById("PassEntry").value;
    var password2 = document.getElementById("password2").value;    
  
    
      //check empty confirm password field
      if(password2 == "") {
        // document.getElementById("message2").innerHTML = "confirm the password please";
        alert('Please enter confirm password');
        return false;
      } 
     
    
    
      if(PassEntry != password2) {
        // document.getElementById("message2").innerHTML = "Passwords are not same";
        alert('Password did not match: Please try again...');
        return false;
      } else {
        alert ("Password Matched");
        document.write("Welcome to Kerala Tourism website");
      }
   }