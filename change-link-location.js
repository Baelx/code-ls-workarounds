var nodeList = document.querySelectorAll('a[title="Title of a tag"]'); //Select the title of the link here - between the double-quotes
nodeList.forEach(function(el){
    el.href = "https://example.com"; //Input the link to go to here - make sure to use HTTPS
});
