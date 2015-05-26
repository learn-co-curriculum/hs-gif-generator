var apiUrl = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=cute+puppy"
var originalImage = "https://c1.staticflickr.com/5/4112/5170590074_714d36db83_b.jpg"

var changeImage = function(){
	$.getJSON(apiUrl, function(response){
		var rand = Math.floor(Math.random() * response["data"].length)
		var pic = response["data"][rand]["images"]["fixed_height"]["url"]
		$( "#pic" ).attr("src", pic)
	})
}

var resetImage = function(){
	$( "#pic" ).attr("src", originalImage)
}

$(function() {
	$( "#new" ).on("click", changeImage);
	$( "#reset" ).on("click", resetImage);
});