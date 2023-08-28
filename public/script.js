var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),
image = document.getElementById("art");

ctx.drawImage(image, 0, 0, canvas.width, canvas.height); 

function step() {
  ctx.drawImage(image,0,0,80,80);
  window.requestAnimationFrame(step); 
}

window.requestAnimationFrame(step);



function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}