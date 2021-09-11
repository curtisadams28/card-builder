function download_image() {
  let image = img;
  let link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
}