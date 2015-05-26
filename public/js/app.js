var apiUrl = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC" //add a search query for whatever you want - use "+" symbols to separate words
var originalImage = //the src you defined should go here!

var changeImage = function(){
	$.getJSON(apiUrl, function(response){
		// your code here!
	})
}

var resetImage = function(){
	// your code here!
}

$(function() {
	$( "#new" ).on("click", changeImage);
	$( "#reset" ).on("click", resetImage);
});