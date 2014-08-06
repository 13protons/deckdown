var fs = require("fs")
  , ejs = require('ejs')
  , path = 'template/header.ejs'
  , marked = require('marked');



fs.readFile("pres/test.md", "utf8", function(error, data) {
  
  var slides = marked(data).split("<h");
  //console.log(slides);
  var output = "";
  slides.forEach(function(slide, i){
    if(slide.length > 0){
      output += '<section id="slide_' + i + '" class="slide"><h' + slide + '\r\n</section>'
    }
  });
  
  
  fs.readFile(path, "utf8", function(error, data) {
    var deck = ejs.render(data, {
        filename: path,
        contents: output
      });
    fs.writeFile('pres/test.html', deck, function (err) {
      if (err) throw err;
      console.log('It\'s saved!');
    });
    
  });
  
});



