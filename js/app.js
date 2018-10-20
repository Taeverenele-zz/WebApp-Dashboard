
// BELL DROPDOWN 
const ringingBell = document.getElementById('ringing-bell');

// REMOVE BELL'S DOT AND ANIMATION ONCE CLICKED
ringingBell.addEventListener('click', (e) => {
    document.getElementById('remove-dot').style.display = "none";
    e.target.style.animation = "none";
// DISPLAY DROPDOWN BY ADDING CLASS
    function showDropdown() {
        const dropdown = document.getElementById("myDropdown");
        dropdown.classList.add('show')
// REMOVE DROPDOWN WHEN CLICKED ANYWHERE
        window.addEventListener('mouseup', () => {
            dropdown.classList.remove('show');
        })
    } showDropdown();
});

// FASHMESSAGE 
$('#flashMessage').hide();
$('#flashMessage').fadeIn(1000);

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('flashMessage').style.display = 'none';
});

// LINE CHART LABELS
const labelsBackground = document.getElementsByClassName('chart-labels');
const removeActiveClass = () => {
    for (var i = 0; i < labelsBackground.length; i++) {
        labelsBackground[i].classList.remove('active');
    }
};

// REMOVE ALL 'ACTIVE' CLASS NAMES
// ADD 'ACTIVE' CLASS NAME TO ELEMENT WHEN CLICKED
for( var i = 0; i < labelsBackground.length; i++) {
    labelsBackground[i].addEventListener('click', (e) => {
        removeActiveClass();
        e.target.classList.add('active');
    })
};


// SUBMIT-BUTTON
const submitButton = document.getElementById('submit-button');
const userSearch = document.getElementById('user-search');
const userMessage = document.getElementById('message-user');
const noUserError = document.getElementById('no-user-error');
const noMessageError = document.getElementById('no-message-error');

// CHECK IF FORM FIELDS ARE EMPTY & DISPLAY ERROR MESSAGE
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
// REMOVE ERROR MESSAGE ONCE START TYPING
userSearch.addEventListener('keyup', () => {
    noUserError.style.display = 'none';
    userSearch.style.border = 'solid 1px black';
});
userMessage.addEventListener('keyup', () => {
    noMessageError.style.display = 'none';
    userMessage.style.border = 'solid 1px black';
});
// CHANGE THE BUTTON'S STYLE & TEXT 
submitButton.addEventListener('click', (e) => {
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

const emailSettingsToggle = document.getElementById('emailSettings');
const profileSettingsToggle = document.getElementById('profileSettings');
const timezoneSettingsToggle = document.getElementById('timezone');


// GET VALUES FROM LOCAL STORAGE
const emailsChecked = localStorage.getItem('emailSettingsChecked');
emailSettingsToggle.checked = emailsChecked === 'true';

const profileChecked = localStorage.getItem('profileSettingsChecked');
profileSettingsToggle.checked = profileChecked === 'true';

timezoneSettingsToggle.value = localStorage.getItem('timezoneSettingsValue');

//ADD EVENT LISTENERS ON LOCAL STORAGE ITEMS
emailSettingsToggle.addEventListener('change', (e) => {
    localStorage.setItem("emailSettingsChecked", e.target.checked);
});

profileSettingsToggle.addEventListener('change', (e) => {
    localStorage.setItem("profileSettingsChecked", e.target.checked);
});

timezoneSettingsToggle.addEventListener('change', (e) => {
    localStorage.setItem("timezoneSettingsValue", e.target.value);
});
