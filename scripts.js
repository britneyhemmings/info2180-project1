/* Add your JavaScript to this file */
window.addEventListener('DOMContentLoaded', function (){
    const submitBtn = document.querySelector("button");
    console.log(submitBtn);
    var message = document.getElementsByClassName('message')[0];
    console.log(message);

    function isValidEmail(emailAddress) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(emailAddress);
      }

    submitBtn.addEventListener("click", e => {
        e.preventDefault();
        textField = document.getElementById("email");
        var email = textField.value;
        console.log(email);
        if(email == '' || !isValidEmail(email)){
            message.innerHTML = "Please enter a valid email address."
        } else if (isValidEmail(email)){
        message.innerHTML = `Thank You! Your email address ${email} has been added to our mailing list!`;
        }
        textField.value = "";
    });
});