function builder(textArray) {
  let elementArray = []
  for (let i = 0; i < textArray.length; i++) {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = textArray[i];
    elementArray.push(paragraph);
  }
  return elementArray;
}