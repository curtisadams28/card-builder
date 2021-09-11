function builder(textArray) {
  let elementArray = []
  for (let i = 0; i < textArray.length; i++) {
    

    let paragraph = document.createElement('p');
    paragraph.innerHTML = textArray[i];

    let card = document.createElement('div');
    card.classList.add('card', `card${i + 1}`);
    card.appendChild(paragraph);
    elementArray.push(card);
  }
  return elementArray;
}