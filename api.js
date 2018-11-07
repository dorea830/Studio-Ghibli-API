$(document).ready(function() {
	const Url="https://ghibliapi.herokuapp.com/films";
	$('#button').click(function() {
		$.ajax({
			url: Url,
			type: "GET",
			success: function(result){
				console.log(result)
			},
			error: function(error){
				console.log('Error')
			}
		})
	})
})