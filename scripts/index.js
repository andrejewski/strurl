
var form = document.getElementById('form');
var text = document.getElementById('text');
window.fitText(text);
window.autosize(text);
text.onkeydown = function(e) {
  var ENTER = 13;
  if(e.keyCode === ENTER) {
    e.preventDefault();
    update();
  }
  window.fitText(text);
}

form.onsubmit = function(e) {
  e.preventDefault();
  update();
}

function update() {
  window.location.hash = encodeURIComponent(text.value);
}

function reflect() {
  var defaultText = "String URL: Type anything and send it as a link to anyone.";
  text.value = decodeURIComponent(window.location.hash.slice(1))
                || defaultText;
  window.fitText(text);
  window.autosize.update(text);
}

reflect();


