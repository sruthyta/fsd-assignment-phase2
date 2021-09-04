function CheckPassword(PassEntry) 
{ 
var decimal='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'

//check empty password field
if(PassEntry.value == "") {
    
    alert('Please enter Password');
    return false;
  }

if(PassEntry.value.match(decimal)) 
{ 
alert('Correct Password...')
// return true;
document.write("Welcome to Kerala Tourism website");
}
else
{ 
alert('Wrong Password...!')
return false;
}
 
}