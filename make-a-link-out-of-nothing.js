var customField = document.querySelector("paste-in-your-css-selector-here");

if (customField.innerText = "paste the content of the custom field") {
customField.onclick = function(){
	window.location = "https:///www.example.com";  //give the link here
}
} else if (customField.innerText = "paste in the other language content") {
customField.onclick = function(){
	window.location = "https:///www.example.com";  //give the other link here
}
};


customField.onmouseover = function() {
	this.style.cursor = "pointer";
};
