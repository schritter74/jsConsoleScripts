// Run this script in browser DevTools console.
const list = document.querySelectorAll(".rich_nav-item.ui-sortable-handle");
list.forEach((el) => {
    el.addEventListener('mouseenter', () => {
		if (
			el.querySelector("a") 
			&& !el.querySelector("a").hasAttribute('href') 
			&& !el.classList.contains('focus')
		){
			el.querySelector("a").click();
		}
	});
});

document.querySelector('.page-content').addEventListener('mouseenter', () => {
	let active_item = document.querySelector(".rich_nav-item.ui-sortable-handle.focus");
	if (active_item && !active_item.querySelector("a").hasAttribute('href')){
		active_item.querySelector("a").click();
		active_item.classList.remove('focus');
	}
});
