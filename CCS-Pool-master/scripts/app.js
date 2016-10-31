$(document).ready(function(){

	$.ajax({
		type: 'GET',
		//insert your the url of your JSON file hosted by github
//		url: 'https://raw.githubusercontent.com/JarenTigani/JarenTigani.Github.io/master/CCS-Pool-master/scripts/data.json',
		url: './scripts/data.json',
		dataType: 'json',

		success: function(data) {

			alert("Hey it works!");

			$.each(data, function(i,memories){
				$("body").append('<div class="orb" id="orb-'+i+'">' + '</div>');
				
				
				if (memories.Unease == "Yes"){
					$("#orb-"+i).css("background-color", "yellow");
				} else {
					$("#orb-"+i).css("background-color", "red");
				};
				
			});

			
		    

		}
	});


});