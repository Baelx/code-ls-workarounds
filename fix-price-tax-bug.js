var priceElm = document.querySelector('body > div > div > div > div > div.gui-col2-left-col2 > div.gui-block > div.gui-block-content.gui-white > div.gui-block-subcontent > div > table > tbody > tr.odd > td:nth-child(4) > span');
var unitElm = document.querySelector('body > div > div > div > div > div.gui-col2-left-col2 > div.gui-block > div.gui-block-content.gui-white > div.gui-block-subcontent > div > table > tbody > tr > td:nth-child(3) > span');
var taxElm = document.querySelector('body > div > div > div > div > div.gui-col2-left-col2 > div.gui-block > div.gui-block-content.gui-white > div.gui-col2-big > div.gui-col2-big-col2 > div > div:nth-child(4) > div.gui-price');
var orderView = document.querySelector("body > div > div > div > div > div.gui-col2-left-col2 > div.gui-block > div.gui-block-title > strong").innerHTML;
var qty = document.querySelector('body > div > div > div > div > div.gui-col2-left-col2 > div.gui-block > div.gui-block-content.gui-white > div.gui-block-subcontent > div > table > tbody > tr.odd > td:nth-child(2)').innerHTML;

var prices = {
	taxPrice : taxElm,
	productPrice : priceElm,
	unitPrice : unitElm
};

var correctNum = "$" + (prices.productPrice - prices.taxPrice).toFixed(2);
var correctUP = "$" + (prices.unitPrice - (prices.taxPrice/qty)).toFixed(2);

for (var x in prices) {
	prices[x] = prices[x].innerHTML.replace(/\$/g,'');
};

if (orderView == "Order information") {
unitElm = correctUP;
priceElm = correctNum;	
};


//Version 1.0

var taxPrice = document.querySelector('body > div > div > div > div > div.gui-col2-left-col2 > div.gui-block > div.gui-block-content.gui-white > div.gui-col2-big > div.gui-col2-big-col2 > div > div:nth-child(4) > div.gui-price');
var productPrice = document.querySelector('body > div > div > div > div > div.gui-col2-left-col2 > div.gui-block > div.gui-block-content.gui-white > div.gui-block-subcontent > div > table > tbody > tr.odd > td:nth-child(4) > span');

var qty = document.querySelector('body > div > div > div > div > div.gui-col2-left-col2 > div.gui-block > div.gui-block-content.gui-white > div.gui-block-subcontent > div > table > tbody > tr.odd > td:nth-child(2)').innerHTML;

var unitPrice = document.querySelector('body > div > div > div > div > div.gui-col2-left-col2 > div.gui-block > div.gui-block-content.gui-white > div.gui-block-subcontent > div > table > tbody > tr > td:nth-child(3) > span');

var taxNum = taxPrice.innerHTML.replace(/\$/g,'');
var productNum = productPrice.innerHTML.replace(/\$/g,'');
var unitNum = unitPrice.innerHTML.replace(/\$/g,'');

var correctNum = (productNum - taxNum).toFixed(2);

var newProductPrice = "$" + correctNum;

var newUP = unitNum - (taxNum/qty);
var decUP = newUP.toFixed(2);
var correctUP = "$" + decUP;

unitPrice.innerHTML = correctUP;
productPrice.innerHTML = newProductPrice;

