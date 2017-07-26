  var productsAssigned = "";
  var text = document.querySelectorAll('body > div:nth-child(8) > div > div > div > div > div.Relative.FlexAuto.W-12--s.Flex > div > div > div > article > header > h1');
  for (var i = 0; i < text.length; i++) {
    productsAssigned += text[i].innerText + "\n";
  };
