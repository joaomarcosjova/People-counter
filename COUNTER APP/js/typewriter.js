
var i = 0;
var txt =  "Welcome soldier, i'm Captain Marcos, today is 11 November 1918, it's the end of World war 1 and your mission is to count and save the number of soldiers going home" 
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
   document.getElementById("type-writer").innerHTML += txt.charAt(i);
    i++
    setTimeout(typeWriter, speed);
  }
}

