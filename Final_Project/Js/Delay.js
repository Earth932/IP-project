jQuery(document).ready(function($) {
    $(window).load(function() {
       setTimeout(function() {
          $('#preloader').fadeOut('slow', function() {});
       }, 60000); // set the time here
    });
 });