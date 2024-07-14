// string we want to find in notes
let search_str = "example";
// collecting array of anchors that contains href atribute with wanted substring
let links = document.querySelectorAll('a[href*="' + search_str + '"]');
// with found elements
links.forEach((link) => {
  // get parend card tag
  let card =
    link.parentElement.parentElement.parentElement.parentElement.parentElement;
  // get card selection button
  let button_select = card.querySelector(
    'div[role="button"][data-tooltip-text="Выбрать заметку"]'
  );
  // if button found imitate mouse click
  // simple node.click() doesn't work :(
  if (button_select) {
    let evt = new MouseEvent("mousedown", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    let evt2 = new MouseEvent("mouseup", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    button_select.dispatchEvent(evt);
    button_select.dispatchEvent(evt2);
  }
});
