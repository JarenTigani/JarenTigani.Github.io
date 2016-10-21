$(document).ready(function(){

	$.ajax({
		type: 'GET',
		//insert your the url of your JSON file hosted by github
		url: 'https://raw.githubusercontent.com/kikkoooo/CCS-Pool/master/scripts/data.json',
		dataType: 'json',
		success: function(data) {

			$.each(data, function(i,memories){

				if (player.faveColor == "red") {
					$("#message").append('<div class="player red">'+player.name + "</div>");
				} else if (player.faveColor == "blue") {
					$("#message").append('<div class="player orange">'+player.name + "</div>");					
				} else if (player.faveColor == "orange") {
					$("#message").append('<div class="player blue">'+player.name + "</div>");					
				}
		    });

		}
	});


});