let img;
html2canvas(document.querySelector("#capture")).then(canvas => {
  img = canvas.toDataURL("image/png");
});

function download_image(){
  let image = img;
  let link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
}