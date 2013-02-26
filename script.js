$(document).ready(function(){		

	// SET THE INITIAL VALUES OF THE PAGE
	
	// SET THE INITIAL VALUE OF THE PAGE MARGIN
	$('body').css('margin', '1em');
	$('#pageMargin').val('1');
	
	// SET INITIAL VALUE OF COLUMNS
	$('#columns').val('3');
	$('p').css('-webkit-column-count', '3');
	$('p').css('-moz-column-count', '3');
	$('p').css('column-count', '3');
	
	// SET INITIAL VALUE OF SPACING
	$('#spacing').val('1');
	$('p').css('-webkit-column-gap', '1em');
	$('p').css('-moz-column-gap', '1em');
	$('p').css('column-gap', '1em');
	
	// SET INTIAL VALUE OF FONT SIZE
	$('#fontSize').val('.7');
	$('p').css('font-size', '.7em');
	
	// SET THE INITIAL VALUE OF THE FONT CHOICE
	$('font').val('helvetica');
	$('p').css('font-family', 'helvetica');


	// UPDATES WHEN SELECTION HAS CHANGED
	
	//UPDATE THE MARGIN OF THE BODY
	$('#pageMargin').change(function(){
		var pageMargin = $('#pageMargin').val() + 'em';
		$('body').css('margin', pageMargin);
	});
	
	//UPDATE THE COLUMNS
	$('#columns').change(function(){
		$('p').css('-webkit-column-count', $('#columns').val());
		$('p').css('-moz-column-count', $('#columns').val());
		$('p').css('-column-count', $('#columns').val());
	});
	
	//UPDATE THE COLUMN GAP
		$('#spacing').change(function(){
		var colGap = $('#spacing').val() + 'em'; // concatenates the value with 'em'
		$('p').css('-webkit-column-gap', colGap);
		$('p').css('-moz-column-gap', colGap);
		$('p').css('column-gap', colGap);	
	});
	
	// UPDATE FONT SIZE
	$('#fontSize').change(function(){
		var fontSize = $('#fontSize').val() + 'em';
		$('p').css('font-size', fontSize);
	});	
	
	// UPDATE FONT CHOICE
	$('#font').change(function(){
		$('p').css('font-family', $('#font').val());
	});

});