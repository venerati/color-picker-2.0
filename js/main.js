// setting a variable that selects the cavas but it's ID
var canvas = document.getElementById('canvasPick'),

// specifies that the object is 2d
context = canvas.getContext('2d');

make_base();

//this function handles the creations and injection of the image to the canvas
function make_base()
{
	//creates image code
  base_image = new Image();
  //selects image source and puts it into image code
  base_image.src = 'colors.png';
  //forces the function to wait for the image to load
  base_image.onload = function(){
  	//selects 2d object and injects image
    context.drawImage(base_image, 0, 0);
  }
}





// sample the image for color on the pointer's location

// inject hex value into box

// inject rgb value into box

// inject color into visual rep

// http://www.javascripter.net/faq/rgbtohex.htm
