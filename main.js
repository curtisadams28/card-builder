let img;

// Loads the file
const input = document.querySelector('#file-selector');
input.addEventListener('change', function(e) {
  const reader = new FileReader();
  reader.onload = function() {
    let parsed = parser(reader.result);
    let built = builder(parsed);
    console.log(built);


    html2canvas(document.querySelector("#capture")).then(canvas => {
      img = canvas.toDataURL("image/png");
    });
  }
  reader.readAsText(input.files[0]);
}, false);