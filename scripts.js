
function notifyClick(){
    alert("You just clicked something");
}

function clearContact() {
    document.getElementById("inputName").value = '';
    document.getElementById("inputEmail").value = '';
    document.getElementById("messageText").value = '';
    
    
}

function submitForm() {
    document.getElementById("inputName").value = '';
    document.getElementById("inputEmail").value = '';
    document.getElementById("messageText").value = '';
    alert("Form Successfully Submitted");
}
function over(element){
    // element.muted = true;
    element.play();
}
function out(element){
    element.pause();
}