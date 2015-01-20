//jQuery the beginning
//jQuery is visually based
  //find things in the DOM(the html) then manipulate them

$(document).ready(function() {
//wrap all other JQuery inside this 
//this tells JQuery to wait till the DOM is loaded to start working.

// $('#content').mouseenter(function() {

// });  //this is error prone
$('#submit').on('click', function() {
	var name = $('#name').val();
	var markup = '<p class="list-item">' + name + '</p>';
	$('#content').prepend(markup);
	$('#name').val('');
});

$('#content').on('click', '.list-item', function() {
	$(this).css('color', 'red');
});


}); //original callback

//JQuery adds value to javaScript.
//elements === classes, id's 
//JQuery methods === .css(), .toggle(), 
//chaining === .css('background', 'red').toggle();

//JQuery EVENTS - they run a callback
  //mouseenter - when hovering begins
  //mouseleave - when hovering ends
  //focus - you are in an imput field
  //blur - you leave input field
  //click - you click on something
  //mousedown - hold down mouse
  //mouseup - as mouse is unclicked
  //ready - once the element is loaded
  //hover - mouseenter and mouseleave combined
  //keystroke - do something when I hit a key
  //keydown - hold key down 
  //keyup - when keydown ends
  //scroll - do things when scrolling
  //dblclick - on double click
  //resize - runs when element resizes

//JQuery METHODS - look at DOCS! for callback and additional info
  //toggleClass - use 1 event to add and remove a class from somthing
  //addClass - adds a class
  //removeClass - removes a class
  //toggleFade - toggles fade effect
  //fade - one way fade effect
  //animate - takes in an object as instructions
  //hasClass - checks for a class
  //prepend - insert at top of html element
  //append - insert at bottom of html element
  //attr - find attributes on elements
  //css - change the css of an element
  //hide - hide the element
  //show - show the element
  //remove - remove element
  //scrollTop - records how far you are
  //html - add html to element





