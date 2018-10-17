
// BELL DROPDOWN 
function myFunction() {
    const x = document.getElementById("myDropdown");
    x.classList.add('show')
    window.addEventListener('mouseup', function(){
        x.classList.remove('show');
    })
};
document.getElementById('ringing-bell').addEventListener('click', function(e) {
    document.getElementById('remove-dot').style.display = "none";
    e.target.style.animation = "none";
})

// FASHMESSAGE 
$('#flashMessage').hide();
$('#flashMessage').fadeIn(1000);

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('flashMessage').style.display = 'none';
});

// SUBMIT-BUTTON

const validation = () => {
    const userSearch = document.getElementById('user-search');
    const userMessage = document.getElementById('message-user');
    const noUserError = document.getElementById('no-user-error');
    const noMessageError = document.getElementById('no-message-error');
    if(userSearch.value === '') {
        noUserError.style.display = 'block';
        userSearch.style.border = 'solid 1px #ff0000';
        console.log()
        return false;
    } if(userMessage.value === '') {
        noMessageError.style.display = 'block';
        userMessage.style.border = 'solid 1px #ff0000';
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
        setTimeout (() => {
            submitButton.style.backgroundColor = "rgb(17, 134, 243)";
            submitButton.innerHTML = 'SEND';
        }, 4000);
        document.getElementById('user-search').value = "";
        document.getElementById('message-user').value = "";
    }
});

///

let checked = false;

const emailSettingsToggle = document.getElementById('emailSettings');

emailSettingsToggle.addEventListener('change', (e) => {
    localStorage.setItem("emailSettingsChecked", e.target.checked);
})

const xyz = localStorage.getItem('emailSettingsChecked');
console.log(xyz);
if (xyz === 'true') {
    console.log(xyz);

    checked = xyz;
    // add class to emailSetting
    emailSettingsToggle.checked = true
}


// localStorage.getItem('color');
// localStorage.removeItem('color');
// localStorage.color = 'green';
// localStorage.color
// delete localStorage.color
