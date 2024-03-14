// Run this script in browser DevTools console.
const list = document.getElementsByClassName('rich-menu_list')[0];
const items = list.getElementsByClassName('rich_nav-item');
const page = document.getElementsByClassName('page-content')[0];

for (let i = 0; i < items.length; i++) {
  let anchor = items[i].getElementsByTagName('a')[0];
	if (anchor && !anchor.hasAttribute('href')) {
		items[i].addEventListener('mouseenter', () => {
			if (!anchor.classList.contains('focus')){
				anchor.click();
			}
		});
	}
	delete(anchor);
}

page.addEventListener('mouseenter', () => {
	let activeItem = list.getElementsByClassName('focus');
	if (activeItem.length > 0) {
		activeItem[0].getElementsByTagName('a')[0].click();
	}
	delete(activeItem);
});
