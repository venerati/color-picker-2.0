// setting a variable that selects the cavas buy it's ID and specifies that its 2d
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
     context.drawImage(base_image, 1, 1);
   }
 }

 // http://www.javascripter.net/faq/rgbtohex.htm
	function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
	function toHex(n) {
	  n = parseInt(n,10);
	  if (isNaN(n)) return "00";
	  n = Math.max(0,Math.min(n,255));
	  return "0123456789ABCDEF".charAt((n-n%16)/16)  + "0123456789ABCDEF".charAt(n%16);
	}

// function handles onClick trigger. gathers grid data and then grabs color data.
canvas.addEventListener('click', function(event) {
    //stored location of your mouse click in relation to the 2d canvas grid
    var x = event.pageX;
        y = event.pageY;
        //creates a var that stores the data pulled from X,Y grid using the value of your pointer
    var img_data = context.getImageData(x, y, 1, 1).data;
	  var R = img_data[0];
	  var G = img_data[1];
	  var B = img_data[2];  var rgb = R + ',' + G + ',' + B;
	  //there is a 4th variable A that I could use to fade the image in and out

	  //variable for rbg to hex conversion
	  var hex = rgbToHex(R,G,B);

	// inject hex value into box
 	document.getElementById('hex').value = hex;
 	// inject rgb value into box
 	document.getElementById('rgb').value = rgb;
    });





// inject color into visual rep
