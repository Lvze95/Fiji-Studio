$(document).ready(function() {
    $('.loader-wrapper').fadeOut('slow');
});

function msgSent() {
    alert("Message sent successfully!"); 
     setTimeout(function() {
        location.reload(true);
     }, 500);
  }