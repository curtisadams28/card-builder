function download_image() {
  let image = img;
  let link = document.createElement('a');
  link.download = "tabletop-deck.png";
  link.href = image;
  link.click();
}