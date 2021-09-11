let img;

// Loads the file
const input = document.querySelector('#file-selector');
input.addEventListener('change', function(e) {
  const reader = new FileReader();
  reader.onload = function() {
    clearNodes();
    let parsed = parser(reader.result);
    let built = builder(parsed);
    render(built);
    changeColour();
    captureCanvas();
  }
  reader.readAsText(input.files[0]);
}, false);

function clearNodes() {
  document.getElementById('grid').innerHTML = '';
}

function captureCanvas() {
  html2canvas(document.querySelector("#capture")).then(canvas => {
    img = canvas.toDataURL("image/png");
  });
}

function changeColour() {
  colorSelector = document.querySelector('#color');
  colorSelector.addEventListener('change', (e) => {
    console.log(e);
    cardArray = document.querySelectorAll('.card');
    cardArray.forEach(element => {
      element.style.borderColor = e.target.value;
    });
    captureCanvas();
  });
}