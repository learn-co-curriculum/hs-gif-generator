# GIF Generator

Build out a GIF generator using jQuery Giphy API. 

## Introduction

Build out a Gif Generator for the search query of your choice. The site should start with a static placeholder image. Clicking the "Get a New Gif!" button will replace the image with a GIF from Giphy. Clicking "Reset" will go back to the static image. 

[Live Example](http://learn-co-curriculum.github.io/hs-gif-generator/)

## Instructions
+ Look in the `index.html` file. Add a "src" for the image - it can either be a local picture that you include in the `"public/images"` folder or to another location on the web.
+ open up the `app.js` file. Save your original image location as a variable called "originalImage"
+ The Giphy API url has been defined for you. Declare a function, `changeImage`, that makes an API call to the Giphy API. Add a search query to limit your results by appending `&q=whateter+you+want` to the URL. 
+ In the callback, change the src of the image on the page to the URL from the Giphy API. Feel free to play around in the browser to figure out how to access the correct URL. 
+ Make another function, `resetImage`, that changes the picture back when you click the reset button. 


## Hints
+ [getJSON documentation](http://api.jquery.com/jquery.getjson/)

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/hs-gif-generator' title='GIF Generator'>GIF Generator</a> on Learn.co and start learning to code for free.</p>
