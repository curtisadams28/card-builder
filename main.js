// Loads the file
const input = document.querySelector('#file-selector');
input.addEventListener('change', function(e) {
  const reader = new FileReader();
  reader.onload = function() {
    let parsed = parser(reader.result)
    console.log(parsed);
    console.log(reader.result);
  }
  reader.readAsText(input.files[0]);
}, false);