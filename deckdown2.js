var fs = require("fs")
  , ejs = require('ejs')
  , marked = require('marked')
  , diveSync = require("diveSync")
  , extend = require('node.extend');

//inventory templates
var templates = []

diveSync(
  process.cwd() + "/templates", 
  { recursive: false, directories: true, files: false }, 
  function(err, dir) {
    if (err) throw err;
    templates.push({path: dir});
  }
);

templates.forEach(function(template, i){
  //load template.json
  console.log(i);
});
                  
//load the template


//load and breakup markdown file

fs.readFile("pres/test.md", "utf8", function(error, data) {
  var slides = mdToHtmlArray(data);
});  

//combine 


//functions

function mdToHtmlArray(markdown){
    var html = marked(markdown);
    
    //Array of values we need to prepend after the split
    var headers = html.match(/<h[1-6]/g); 
    
    //leave a marker for splitting
    html = html.replace(/<h[1-6]/g, '<========slide=========>'); 
    var slides = html.split("<========slide=========>"); 
    
    //element 0 is whitespace. artifact of split method
    slides.shift(); 
    
    slides = slides.map(function(s, i){
      //add proper header number back after it was lost in the replace
      var obj = {};
      obj[headers[i].slice(1)] = headers[i] + s;
      return obj; 
    });
    
    return slides;
  }

  
  //console.log(slides);
  /*
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
  */
  




