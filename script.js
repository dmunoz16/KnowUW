// JS Script

// SLIDER SCRIPT
$('.slider').each(function () {              // For every slider
  var $this = $(this);                    // Current slider
  var $group = $this.find('.slide-group'); // Get the slide-group (container)
  var $slides = $this.find('.slide');       // Create jQuery object to hold all slides
  var buttonArray = [];                    // Create array to hold navigation buttons
  var currentIndex = 0;                     // Hold index number of the current slide
  var timeout;                              // Sets gap between auto-sliding

  function move(newIndex) {          // Creates the slide from old to new one
    var animateLeft, slideLeft;      // Declare variables

    advance();                       // When slide moves, call advance() again

    // If it is the current slide / animating do nothing
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    buttonArray[currentIndex].removeClass('active'); // Remove class from item
    buttonArray[newIndex].addClass('active');        // Add class to new item

    if (newIndex > currentIndex) {   // If new item > current
      slideLeft = '100%';            // Sit the new slide to the right
      animateLeft = '-100%';         // Animate the current group to the left
    } else {                         // Otherwise
      slideLeft = '-100%';           // Sit the new slide to the left
      animateLeft = '100%';          // Animate the current group to the right
    }
    // Position new slide to left (if less) or right (if more) of current
    $slides.eq(newIndex).css({ left: slideLeft, display: 'block' });

    $group.animate({ left: animateLeft }, function () {    // Animate slides and
      $slides.eq(currentIndex).css({ display: 'none' }); // Hide previous slide      
      $slides.eq(newIndex).css({ left: 0 }); // Set position of the new item
      $group.css({ left: 0 });               // Set position of group of slides
      currentIndex = newIndex;               // Set currentIndex to the new image
    });
  }

  function advance() {                     // Used to set 
    clearTimeout(timeout);                 // Clear previous timeout
    timeout = setTimeout(function () {      // Set new timer
      if (currentIndex < ($slides.length - 1)) { // If slide < total slides
        move(currentIndex + 1);            // Move to next slide
      } else {                             // Otherwise
        move(0);                           // Move to the first slide
      }
    }, 4000);                              // Milliseconds timer will wait
  }

  $.each($slides, function (index) {
    // Create a button element for the button
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {    // If index is the current item
      $button.addClass('active');    // Add the active class
    }
    $button.on('click', function () { // Create event handler for the button
      move(index);                   // It calls the move() function
    }).appendTo('.slide-buttons');   // Add to the buttons holder
    buttonArray.push($button);       // Add it to the button array
  });

  advance();                          // Script is set up, advance() to move it


});

//Preloader
$(document).ready(function () {
  setTimeout(function () {
    $('.wrapper').addClass('loaded');

  }, 3000);
});



jQuery(function () {

  $(window).load(function () {

    $('.wrapper').removeClass('preload');

  });

});

/****Modified from W3schools****/
//Scroll To Top
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var minOrMax = 2; // min = 1, max = 2
function minFunction() {
  if (minOrMax == 1) { // need to minimize
    minOrMax = 2;
    var getCalendar = document.getElementsByClassName("calendar");
    getCalendar[0].style.width = '100%';
    getCalendar[0].style.height = '435px';
    // change minimize button size
    var getMinButton = document.getElementsByClassName("styled")[0];
    getMinButton.style.fontSize = '10px';
    getMinButton.innerHTML = 'Maximize';
  } else { // max = 2, so maximize
    minOrMax = 1;
    //change size of calendar to 200-400% of current size, include animation
    var getCalendar = document.getElementsByClassName("calendar")[0];
    getCalendar.style.width = '195%';
    getCalendar.style.height = '555px';
    // change minimize button size
    var getMinButton = document.getElementsByClassName("styled")[0];
    getMinButton.style.fontSize = '14px';
    // fix location of The Day's Date
    var getLeftColTitle = document.getElementsByClassName("content")[0];
    getLeftColTitle.style.marginTop = '60px';
    getMinButton.innerHTML = 'Minimum';
  }
}