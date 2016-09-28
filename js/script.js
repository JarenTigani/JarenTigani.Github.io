$(document).ready(function() {

	// Show the animals
/*	$("#animal-1").fadeIn();
  $("#animal-2").delay(1000).fadeIn();
  $("#animal-3").delay(2000).fadeIn();
  
	// Hide the animals
	$("#animal-1").delay(4000).fadeOut();
  $("#animal-2").delay(4000).fadeOut();
  $("#animal-3").delay(4000).fadeOut();  
*/



setInterval(function() {
  $("#timer").html(hours[timer.hour] + ':' + checkNumber(timer.minutes) + ':' + checkNumber(timer.seconds) + timer.meridiem);
 
 showDiurnal();
 showNocturnal();
 showCrepuscular();
  
}, 1000);


var hours = [
  '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'
];

function checkNumber(numberTime) {
  if (numberTime < 10) {
    return "0" + numberTime;
  } else {
    return numberTime;
  }
};

function showDiurnal() {
    if (timer.seconds >= 11 && 40 <= timer.seconds) {
      $("#animal-2, #animal-6, #animal-8, #animal-10, #animal-11, #animal-12, #animal-15, #animal-17, #animal-18, #animal-19, #animal-20, #animal-21, #animal-24, #animal-34, #animal-35, #animal-36, #animal-39, #animal-40, #animal-41, #animal-42").fadeIn().show();
    } else {
      $("#animal-2, #animal-6, #animal-8, #animal-10, #animal-11, #animal-12, #animal-15, #animal-17, #animal-18, #animal-19, #animal-20, #animal-21, #animal-24, #animal-34, #animal-35, #animal-36, #animal-39, #animal-40, #animal-41, #animal-42").fadeOut().hide();
    }
  };
  
function showNocturnal() {
    if (timer.seconds >= 41 && 59 <= timer.seconds) {
      $("#animal-1, #animal-3, #animal-4, #animal-5, #animal-13, #animal-14, #animal-16, #animal-23, #animal-26, #animal-28, #animal-29, #animal-31, #animal-32, #animal-33, #animal-38, #animal-45"  ).fadeIn().show();
    } else {
      $("#animal-1, #animal-3, #animal-4, #animal-5, #animal-13, #animal-14, #animal-16, #animal-23, #animal-26, #animal-28, #animal-29, #animal-31, #animal-32, #animal-33, #animal-38, #animal-45").fadeOut().hide();
    }
  };
  
  function showCrepuscular() {
    if (timer.seconds >= 0 && 10 <= timer.seconds) {
      $("#animal-7, #animal-9, #animal-22, #animal-27, #animal-30, #animal-37, #animal-43, #animal-44").fadeIn().show();
    } else {
      $("#animal-7, #animal-9, #animal-22, #animal-27, #animal-30, #animal-37, #animal-43, #animal-44").fadeOut().hide();
    }
  };

});
