var list = document.getElementById('demo');

function addToList() {
  var add = document.getElementById('add').value;
  var price = document.getElementById('price').value;
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(add + " costs "));
  entry.appendChild(document.createTextNode("$" + price));
  list.appendChild(entry);
  list.appendChild(entry);
}
