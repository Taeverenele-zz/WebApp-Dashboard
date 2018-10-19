
// BELL DROPDOWN 
document.getElementById('ringing-bell').addEventListener('click', function(e) {
    document.getElementById('remove-dot').style.display = "none";
    e.target.style.animation = "none";
    function myFunction() {
        const x = document.getElementById("myDropdown");
        x.classList.add('show')
        window.addEventListener('mouseup', function(){
            x.classList.remove('show');
        })
    } myFunction();
});

// FASHMESSAGE 
$('#flashMessage').hide();
$('#flashMessage').fadeIn(1000);

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('flashMessage').style.display = 'none';
});


// SUBMIT-BUTTON
const userSearch = document.getElementById('user-search');
const userMessage = document.getElementById('message-user');
const noUserError = document.getElementById('no-user-error');
const noMessageError = document.getElementById('no-message-error');
const validation = () => {
    if(userSearch.value === '') {
        noUserError.style.display = 'block';
        userSearch.style.border = 'solid 1px #ff0000';
        return false;
    } if(userMessage.value === '') {
        noMessageError.style.display = 'block';
        userMessage.style.border = 'solid 1px #ff0000';
        return false;
    } else {
        return true;
    }
};
userSearch.addEventListener('keyup', function() {
    noUserError.style.display = 'none';
    userSearch.style.border = 'solid 1px black';
});
userMessage.addEventListener('keyup', function() {
    noMessageError.style.display = 'none';
    userMessage.style.border = 'solid 1px black';
});

const submitButton = document.getElementById('submit-button');
 
submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    validation();
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


// LOCAL STORAGE

let checked = false;
const emailSettingsToggle = document.getElementById('emailSettings');
const profileSettingsToggle = document.getElementById('profileSettings');
const timezoneSettingsToggle = document.getElementById('timezone');


emailSettingsToggle.addEventListener('change', (e) => {
    localStorage.setItem("emailSettingsChecked", e.target.checked);
});

const emailsChecked = localStorage.getItem('emailSettingsChecked');
if (emailsChecked === 'true') {
    checked = emailsChecked;
    emailSettingsToggle.checked = true
};
profileSettingsToggle.addEventListener('change', (e) => {
    localStorage.setItem("profileSettingsChecked", e.target.checked);
});

const profileChecked = localStorage.getItem('profileSettingsChecked');
if (profileChecked === 'true') {
    checked = profileChecked;
    profileSettingsToggle.checked = true
};
