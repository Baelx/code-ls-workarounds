
//create a list with Shop the looks titles

var looks = document.querySelectorAll('body > div:nth-child(4) > div:nth-child(5) > div.fancybox.col-md-9.col-sm-9.col-xs-12.index > div > div.innerWrapper > div');

looks.childNodes[5].childNodes[1].innerText;


//Check if anything from the above list is found in the related products and remove it

var relatedProducts = document.querySelectorAll('#gui-form-related > ul > li');

for (var i = 0; i < 6; i++) {
	if (relatedProducts[i].childNodes[3].innerText == "Relax!") {
		relatedProducts[i].remove();
	}
}



