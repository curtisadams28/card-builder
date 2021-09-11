function parser(rawText) {
  let text = rawText;
  let textArray = [];

  text = removeCarriage(text);
  text = removeLinks(text);
  text = replaceNewLine(text);
  
  textArray = text.split('# ');
  textArray.splice(0, 2);

  document.getElementById('test').innerHTML = text;

  return textArray;
}

function removeCarriage(text) {
  return text.replace(/\r/g, '');
}

function removeLinks(text) {
  text = text.replace(/\(#.*\)/g, '');
  text = text.replace(/\[/g, '');
  text = text.replace(/\]/g, '');
  return text;
}

function replaceNewLine(text) {
  return text.replace(/\n/g, '<br/>');
}