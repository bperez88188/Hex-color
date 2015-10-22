function hexToRgb(hex) {
    // // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    // var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    // hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    //     return r + r + g + g + b + b;
    // });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}





$(document).ready(function(){
    $("#change").click(function(){


        // Grabbing variables from HTML and checking length and for null
        var hex1 = $("#hex1").val();

        if (hex1 == "") {
            hex1 = '00';
        };if (hex1.length == 1) {
            hex1 = hex1 + hex1;
        };

        var hex2 = $("#hex2").val();

        if (hex2 == "") {
            hex2 = '00';
        };if (hex2.length == 1) {
            hex2 = hex2 + hex2;
        };

        var hex3 = $("#hex3").val();

        if (hex3 == "") {
            hex3 = '00';
        };if (hex3.length == 1) {
            hex3 = hex3 + hex3;
        };

        //Defineing the RGB decimal value
        var rgb1 = parseInt(hex1, 16);

        var rgb2 = parseInt(hex2, 16);

        var rgb3 = parseInt(hex3, 16);

        //Convert rgb number to percent
        var rgb1D = (rgb1 / 255) * 100;

        var rgb2D = (rgb2 / 255) * 100;

        var rgb3D = (rgb3 / 255) * 100;

        //Combining the vaules "full" output on HTML
        var fullHex = "#" + hex1.concat(hex2, hex3);

        var fullRGB = ""+ rgb1 + ", " + rgb2 + ", "+ rgb3 + "";

       
        //Imputting Data to HTML
        $("#hex").val(fullHex);

        $("#rgb").val(fullRGB);

        $("#colorSwatch").css({"background": fullHex });

        //adjusting progress bars
        $(".bar-red").attr('style', "width:" +rgb1D+ "%")
        
        $(".bar-green").attr('style', "width:" +rgb2D+ "%")

        $(".bar-blue").attr('style', "width:" +rgb3D+ "%")

    });
});

// alert( hexToRgb("#0033ff").g ); // "51";

