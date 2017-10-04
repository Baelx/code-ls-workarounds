var nodeList = document.querySelectorAll('a[href="Old link of the a tag in question"]'); //Input the current href value of the a tag here, between the double-quotes
nodeList.forEach(function(el){
    el.href = document.location.protocol + "//example.com"; //Input the link to go to here - omit the protocol in the link "https, https"
});
//Copy lines 1 to 4 and re-do for each language in the shop
