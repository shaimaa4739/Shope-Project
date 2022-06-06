// form validation start 

var nameInput = document.getElementById('usrName');
var emailInput = document.getElementById('usrEmail');
var phoneInput = document.getElementById('usrPassword');
var textArea = document.getElementById("textarea");
var resetBtn = document.getElementById("resetBtn");

function isValid(name, email, phone , area ){
    var valid = true
    if(!isNaN(nameInput.value) || nameInput.value == null || nameInput.value.length < 5){
        valid = false
    }
    if(textArea.value == null ){
        valid = false
    }
    if(! /^[a-zA-Z]+@[a-zA-Z0-9]+.com$/.test(emailInput.value)){
        valid = false
    }
    if ( phoneInput.value < 8)  {
        valid = false
    }
    console.log(valid);
    return valid
}
function addInfo(e){

    if(isValid(nameInput.value, emailInput.value, phoneInput.value,textArea.value)){
        console.log("valid");
        nameInput.value="";
        emailInput.value="";
        phoneInput.value="";
        nameInput.style.backgroundColor = "white"
        emailInput.style.backgroundColor = "white"
        phoneInput.style.backgroundColor = "white"
        textArea.style.backgroundColor = "white"

    } else {
        e.preventDefault();
        console.log("notvalid");
        nameInput.style.backgroundColor = "pink"
        emailInput.style.backgroundColor = "pink"
        phoneInput.style.backgroundColor = "pink"
        textArea.style.backgroundColor = "pink"
    }
}

// form validation end

// Slider Start

var heads = document.querySelector('.head');
function previousElementCheck(el) {
    var previousElement=el.previousElementSibling
    if(previousElement&& previousElement.style.height>"0px")
    {
        previousElement.style.height=`0px`
    }
    
}
function  slideDown(el) {
    // content.classList.toggle('slide')
    var nextElement = el.nextElementSibling
    if(nextElement.style.height>"0px")
    {
        nextElement.style.height=`0px`

    }
    else
    {
        previousElementCheck(el);
        nextElement.style.height=`${nextElement.scrollHeight}px`

    }
}

// Slider End



navigator.geolocation.getCurrentPosition(function(pos){
    // console.log(pos.coords.latitude,pos.coords.longitude)
    initMap({lat :pos.coords.latitude,lng:pos.coords.longitude})
})
let map;

function initMap(position) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 14,
  });
  const marker =  new google.maps.Marker({
      position:position,
      map:map
  })
}
