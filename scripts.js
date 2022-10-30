/* Add your JavaScript to this file */
window.addEventListener('DOMContentLoaded', function (){
    const submitBtn = document.querySelector("button");
    console.log(submitBtn);
    var message = document.getElementsByClassName('message')[0];
    console.log(message);

    submitBtn.addEventListener("click", e => {
        e.preventDefault();
        textField = document.getElementById("email");
        var email = textField.value;
        console.log(email);
        if(email == ''){
            message.innerHTML = "Please enter a valid email address."
        } else{
        message.innerHTML = `Thank You! Your email address ${email} has been added to our mailing list!`;
        }
        textField.value = "";
    });
});