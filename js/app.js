// FASHMESSAGE 
$('#flashMessage').hide();
$('#flashMessage').fadeIn(1000);

document.querySelector('.close').addEventListener('click', function() {
    if(document.getElementById('flashMessage').style.display = 'none');
});