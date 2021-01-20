
function myFunction() {
   console.log("This text from function");

   document.getElementById('text').innerHTML = "<span class='text-primary'>O'zgartirdi</span>"
}

function switchOn() {
   document.getElementById('bulb').src = "images/pic_bulbon.gif";
   document.getElementById('body').style.backgroundColor = "#fff"
}
function switchOff() {
   document.getElementById('bulb').src = "images/pic_bulboff.gif";
   document.getElementById('body').style.backgroundColor = "#000"
}
//***myFunction();
//myFunction();
//myFunction();
//myFunction()