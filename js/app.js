// FASHMESSAGE 
$('#flashMessage').hide();
$('#flashMessage').fadeIn(1000);

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('flashMessage').style.display = 'none';
});

// SUBMIT-BUTTON
    //check the values of the input fields
    //if userinput.length=0 display error message
    //if messageinput.length=0 display error

const validation = () => {
    const userSearch = document.getElementById('user-search').value;
    const userMessage = document.getElementById('message-user').value;
    if(userSearch === '') {
        document.getElementById('no-user-error').style.display = 'block';
        console.log()
        return false;
    } if(userMessage === '') {
        document.getElementById('no-message-error').style.display = 'block';
        return false;
    } else {
        return true;
    }
}

const submitButton = document.getElementById('submit-button');
 

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    validation();

    //if both name and message ok, change button layout
    if (validation() === true) {
        submitButton.innerHTML = 'SENDING...';
        setTimeout(() => {
            submitButton.style.backgroundColor = "#7DCA91";
            submitButton.innerHTML = 'SENT';
        }, 2000);
    }
    // sending 1 second
    // sent 2 seconds
    // back to send

    //clear input fields
    console.log(e);
});