
//To allow for a custom message to display a discount code on the home page after a customer signs up for the //newsletter. Message is input within the "homepage" page in Content



var blueMsgBox = document.querySelector('body > div:nth-child(4) > div.messages > ul > li');
var atSymbol = "@";
var textContent = document.getElementById('discountCodeText').innerHTML;
var newdiv = document.createElement("DIV");

newdiv.appendChild(document.createTextNode(textContent));

if (blueMsgBox.innerHTML.indexOf(atSymbol) !== -1) {
blueMsgBox.appendChild(newdiv);
};


var wishListButton = document.querySelector('body > div:nth-child(4) > div > div.col-md-5.col-sm-5.col-xs-12.image > div.actions-wrap.col-xs-12 > ul > li');
var wishListButtonLink = document.querySelector('body > div:nth-child(4) > div > div.col-md-5.col-sm-5.col-xs-12.image > div.actions-wrap.col-xs-12 > ul > li > a');
var isShopTheLook = document.getElementsByClassName('lookproducts');

if (isShopTheLook.length > 0) {
wishListButton.removeChild(wishListButtonLink);
};
