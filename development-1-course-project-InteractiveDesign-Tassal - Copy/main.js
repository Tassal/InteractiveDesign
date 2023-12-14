  var canvas = document.getElementById('blackRectangleCanvas');

        // Check if the browser supports canvas
        if (canvas.getContext) {
            // Get the 2D drawing context
            var context = canvas.getContext('2d');

            // Set the fill color to black
            context.fillStyle = '#000'; // You can also use 'black' here

            // Draw a black rectangle
            context.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            // Display an error message if the browser doesn't support canvas
            alert('Your browser does not support the HTML5 canvas element.');
        }