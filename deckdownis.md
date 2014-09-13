Deckdown
========

Deckdown is a totally new way to build a slide deck. You write markdown, and deckdown gives you a presentation. No BS. Or JS. or HTML.

##Usage

###From text

Type or paste markdown into the form above, and hit 'create deck'. Valid markdown will be parsed into a deck for you to enjoy. Deckdown currently doesn't save the markdown text that you submit to it, so this is a one time, unique thing. 

###From A file

Tell deckdown the url of your raw `.md` file by passing it as the `src` parameter, like this: 

```
http://deckdown.herokuapp.com/deck?src=path/to/yourdeck.md
```

For example, here's a slideshow version of the [deckdown readme](http://deckdown.herokuapp.com/deck?src=https://raw.githubusercontent.com/alanguir/deckdown/master/README.md#/).

For github files commit your `.md` file to your repo, then navigate to the markdown file on github and click 'raw' in the upper right corner to view the raw markdown file. Use *this* url to dive to deckdown. 

For dropbox, place the markdown file in your *Public* folder, then right/option click to get it's public link. More info on public links from [dropbox help](https://www.dropbox.com/help/16)

##Caveats

Deckdown is still in an early experimental state. Feel free to use it for your presentations if you wish, just know that the service will likely change in the future. 

##Contribute

Deckdown is [on github](https://github.com/alanguir/deckdown)

Made by [Alan Languirand](https://github.com/alanguir) in 2014.