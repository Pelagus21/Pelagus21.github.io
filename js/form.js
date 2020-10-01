let mail = document.getElementById("email");
let passwrd = document.getElementById("password");
let confirmPasswrd = document.getElementById("confirmPswrd");
let illegalPass = document.getElementById("illegalPass");
let illegalConfirm = document.getElementById("illegalConfirm");
let illegalEmail = document.getElementById("illegalEmail");
let btn = document.getElementById("submit");

let confirmPswrd = function(){
    if(confirmPasswrd.value.localeCompare(passwrd.value)!=0){
        illegalConfirm.style.visibility = "visible";
    }else{
        illegalConfirm.style.visibility = "hidden";
    }
}

passwrd.onkeyup = function() {
    let expression = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    if (!expression.test(passwrd.value)) {
        illegalPass.style.visibility = "visible";
        if (passwrd.classList.contains("valid")) {
            passwrd.classList.remove("valid");
        }
        passwrd.classList.add("invalid");
    } else {
        illegalPass.style.visibility = "hidden";
        if (passwrd.classList.contains("invalid")) {
            passwrd.classList.remove("invalid");
        }
        passwrd.classList.add("valid");
    }
    if(confirmPasswrd.value.length!=0){
        confirmPswrd();
    }
}
    confirmPasswrd.onkeyup = function(){
       confirmPswrd();
    }
mail.onkeyup = function(){
    let expr = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\\.com");
    if(!expr.test(mail.value)){
        illegalEmail.style.visibility = "visible";
        if (mail.classList.contains("valid")) {
            mail.classList.remove("valid");
        }
        mail.classList.add("invalid");
    }else{
        illegalEmail.style.visibility = "hidden";
        if (mail.classList.contains("invalid")) {
            mail.classList.remove("invalid");
        }
        mail.classList.add("valid");
    }
}

btn.onclick = function(){
    if(mail.value.length == 0 || passwrd.value.length == 0 || confirmPasswrd.value.length == 0){
        alert("Fill all fields!");
        return;
    }
    if(mail.classList.contains("invalid") || passwrd.classList.contains("invalid") || confirmPasswrd.classList.contains("invalid")){
        alert("Fill the fields with correct data!");
        return;
    }
    alert("You have been registered!");
}

