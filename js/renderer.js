function render(elementArray) {
  let grid = document.getElementById('grid');
  for (let i = 0; i < elementArray.length; i++) {
    grid.appendChild(elementArray[i]);
  }
}