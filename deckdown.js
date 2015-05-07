var fs = require("fs")
  , ejs = require('ejs')
  , lessMiddleware = require('less-middleware')
  , kramed = require('kramed')
  , extend = require('node.extend')
  , path = require('path')
  , express = require('express')
  , request = require('request')
  , querystring = require('querystring')
  , bodyParser = require('body-parser')
  , validator = require('validator')
  , app = express();

kramed.setOptions({
  'breaks': true
});

//load the templates
var template = {
  slides: fs.readFileSync(process.cwd() + "/templates/masters/default.html", "utf8")
};
var timer = Date.now();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/templates');
app.set('view engine', 'html');

//less is more? 
app.use(lessMiddleware(path.join(__dirname, '/public')));

app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.use('/deck', function(req, res, next){
  timer = Date.now();
  res.deck = {
        title: 'no data', 
        template: 'default', 
        content:"<section><h1>Deck not found</h1><p>Please check that url, and try again.</p></section>"
      }
  next();

});



app.get('/', function (req, res) {
  var page = kramed(fs.readFileSync(process.cwd() + "/README.md", "utf8"));
  //little hackey - removes anything before the first <a>
  page = '<p><a>' + page.substr(page.indexOf('</a>')) ;
              
  res.render('index', {content: page});
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/deck', getDeckCtrl);
app.get('/deck/:deckid/:view?', function(req,res){
  console.log(req.params.deckid, req.params.view);
  res.render('id', {id: req.params.deckid, mode: req.params.view});
});
app.post('/deck', postDeckCtrl, getDeckCtrl);

var port = process.env.PORT || 3000;
app.listen(port);

console.log('Listening on port %d', port);


//functions
function getDeckCtrl(req, res, next){
  var url = req.param('src') || res.deckUrl;
  if(req.param('theme')){res.deck.template = req.param('theme'); }
  url = encodeURI(url);
  if(validator.isURL(url, {allow_underscores: true })){
    url = querystring.unescape(url);
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //Get the name of the deck
        var _names = url.match(/[A-Z,a-z]+/g);

        res.deck = extend(res.deck, {
          title: _names[_names.length - 2], 
          content: slides(body)
        });
      }
      
      gen();
      res.render('deck', res.deck);
    });
  }
  else{
    console.log('invalid url: ', url);
    gen();
    res.render('deck', res.deck);
  }
}


function postDeckCtrl (req, res, next){
  //console.log(req.param('markdown'));
  var md = req.param('markdown');
  res.deck.template = req.param('theme');
  
  if(validator.isURL(md, {allow_underscores: true })){
    //save url somewhere
    res.deckUrl = md;
    next();
  }else{
    var s = slides(md);
    gen();  
    res.deck = extend(res.deck, {
      title: 'Created With Deckdown',
      content: s
    });
    res.render('deck', res.deck);
  }
}

function slides(body){
  var rawSlides = mdToHtmlArray(body);
  
  console.log(rawSlides);
  
  //combine
  var slides = rawSlides.map(function(slide, i){
    return ejs.render(template.slides, {
      master: 'master-'+slide.level,
      content: slide.content
    });
  });
  
  
  return slides.join("");
}

function gen(){
  console.log('generated deck in ' + (Date.now() - timer) + 'ms');
}

function mdToHtmlArray(markdown){
    console.log(markdown);
  /*

match within a +()
/(\+\()(.*)(\))/g $2

match the whole +()
/\+\(.*\)/g $&

*/
    //var properties = markdown.match($2)
    //var matches, properties = [];
   
    properties = markdown.match(/\+\(.*\)/g);
  
    if(properties){
      properties.forEach(function(p, i){
        //remove +()
        p = p.replace(/[(\+\()(\))]/g, '').split(',');;
        console.log(p);
      });
    }
    //console.log(properties);
    var html = kramed(markdown);
    //Array of values we need to prepend after the split
    var headers = html.match(/(<h[1-6])|(<hr>)/g); 
    
    //leave a marker for splitting
    html = html.replace(/(<h[1-6])|(<hr>)/g, '<========/*slide*/=========>'); 
    var slides = html.split("<========/*slide*/=========>"); 
    
    //element 0 is whitespace. artifact of split method
    slides.shift(); 
    
    slides = slides.map(function(s, i){
      //add proper header number back after it was lost in the replace
      var result = {};
      if(headers[i] == "<hr>"){
        result = {
          'level': 'text',
          'content': s
        };
      }
      else{
        result = {
          'level': headers[i].slice(1),
          'content': headers[i] + s
        };
      }      
      return result; 
    });
    
    return slides;
  }

  




