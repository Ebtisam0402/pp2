
// When the form is submitted, validate
document.getElementById('icecream').onsubmit = () => {

    clearErrors();

//Flag variable to determine if form data is valid
let isValid = true;

//validiate first name
let fname = document.getElementById('fname').value.trim();
if(!fname ){
document.getElementById("err-fname").style.display = "block";
isValid = false;
}

//Validate email
let email = document.getElementById('email').value.trim();
if(!email || email.indexOf("@") === -1 ){
document.getElementById("err-email").style.display = "block";
isValid = false;
}

//Validate flavor
let flavor = document.getElementById('flavor').value;
if(!flavor){
document.getElementById("err-flavor").style.display = "block";
isValid = false;
}

// Validate method (cone)
let coneButtons = document.getElementsByName("method");
let count = 0;
for(let i=0; i < coneButtons.length; i++){
        if(coneButtons[i].checked){
            count++;
        }
    }
    if(count === 0 ){
document.getElementById("err-method").style.display = "block";
isValid = false;
}




// return is valid flag
return isValid;

}
function clearErrors(){
    let errors = document.getElementsByClassName("error");
    for(let i=0; i < errors.length; i++){
        errors[i].style.display = "none";
    }
}
