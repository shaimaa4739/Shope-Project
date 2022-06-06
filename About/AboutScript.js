var imagesArray = ["1","2","3","4","5"];
var image = document.getElementById("imageID");
var counter =0;
image.setAttribute("src", "../Images/sliderImages/"+imagesArray[counter]+".jpg");

    imageSlider=setInterval(() => {
        
        if(counter<imagesArray.length-1)
        {
            counter++;
            image.setAttribute("src", "../Images/sliderImages/"+imagesArray[counter]+".jpg");
        }
        else
        {
            counter=0;
            image.setAttribute("src", "../Images/sliderImages/1.jpg");
        }
    
    }, 1000);

$('#imageID').on('mouseover',function(){
    clearInterval(imageSlider)
});

$('#animateMe').on('mouseover',function(){
    $(this).animate({
        "top":"50px"
    },2000)
});
$('#animateMe').on('mouseout',function(){
    console.log("mouse down")
    $(this).animate({
        "top":"0px"
    },2000)
});