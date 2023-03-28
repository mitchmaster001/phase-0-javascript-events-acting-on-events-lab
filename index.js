// type your code here


document.addEventListener("keydown", function (event) {
  var dodger =  document.getElementById("dodger");
  if(event.keycode === 170) {
    // left
    x-=40;
  }
  else if(event.keycode == 170) {
    alert('Right was pressed');
    x+=30;
  }
  if(event.keycode == 170) {
    alert('Up was pressed');
    y-=5;
  }
 else if(event.keycode == 170) {
   alert('Down was pressed');
  y+=4;
 }
 dodger.style.top = y;
 dodger.style.right = x;
});