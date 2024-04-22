const arNonExternalPatterns = [
	'https://aspro.cloud', // change to your domain
	'/', 
	'#', 
	'javascript:', 
	'mailto:', 
	'tel:'
];
nonFollowedLinks = document.querySelectorAll("a:not([rel='nofollow'])");
nonFollowedLinks.forEach((nonFollowedLink) => {
	if (nonFollowedLink.hasAttribute('href')) {
		isExternal = true;
		for (i=0;i<arNonExternalPatterns.length;i++){
			if (nonFollowedLink.href.indexOf(arNonExternalPatterns[i]) === 0) {
				isExternal = false;
				break;
			}
		}
		if (isExternal) {
			nonFollowedLink.style.outline = "5px solid red";	
		}
	}
});
