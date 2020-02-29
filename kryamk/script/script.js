var heading = document.querySelector('pre');

setInterval(function() {
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) +
    ',' +
    (Math.floor(Math.random() * 256)) +
    ',' +
    (Math.floor(Math.random() * 256)) + ')';

  heading.style.color = hue;

}, 1000);




console.log()



// jQuery('body').append('<a href="http://google.com" >Глянь в гугле</a>')
// jQuery(document).ready(function(){
	
// 	jQuery('button').on('click', function() {

// 		var value1, value2, value3;
// 		value1 = jQuery('#val1').val();
// 		value2   = jQuery('#val2').val();

// 		value1 = parseInt(value1);
// 		value2 = parseInt(value2);

// 		value3 = value1 + value2;

// 		alert(value3);











// alert("Hello, Kent!")
