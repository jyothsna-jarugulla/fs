const form=document.getElementById("registrationForm");
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const email=document.getElementById("email");
const password=document.getElementById("password");
const cpassword=document.getElementById("cpassword");
const terms=document.getElementById("terms");

const nameError=document.getElementById("nameError");
const emailError=document.getElementById("emailError");
const genderError=document.getElementById("genderError");
const passwordError=document.getElementById("passwordError");
const termsError=document.getElementById("termsError");
const successMsg=document.getElementById("successMsg");

function validateusername(){
    if(fname.value.trim()==='' && lname.value.trim()===''){
        nameError.textContent='name is required';
        return false;
    }
    else{
        nameError.textContent='';
        return true;
    }
}
function validateEmail(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value.trim())){
        emailError.textContent='enter a valid email address';
        return false;
    }
    else{
        emailError.textContent='';
        return true;
    }
}
function validatePassword(){
    if(password.value.length<6){
        password.textContent='Password must be atleast 6 characters';
        return false;
    }
   if(password.value!=cpassword.value){
    password.textContent='passwords do not match';
    return false;
   }
   password.textContent='';
   return true;
}
function validategender(){
    const gender=document.querySelector('input[name="gender"]:checked');
    if(!gender){
        genderError.textContent='please select your gender';
        return false;
    }
    genderError.textContent='';
    return true;

}
function validateterms(){
    if(!terms.checked){
        termsError.textContent='you must provide consent';
        return false;
    }
    termsError.textContent='';
    return false;
}

form.addEventListener("submit", function(e){
  e.preventDefault();
  const isvalid=
    validateusername() && validateEmail() && validatePassword() && validategender() &&

  validateterms();
  if(isvalid){
    successMsg.textContent='Form submitted successfully';
    form.reset();
  }
  else{
    successMsg.textContent='';
  }

})
