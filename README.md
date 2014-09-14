deckdown
========

Write markdown, get a slide deck. No BS. Or JS. Or HTML.

##Usage

###From Text
Type or paste [markdown](http://daringfireball.net/projects/markdown/syntax) into the form above, and hit 'create deck'. Valid markdown will be parsed into a deck for you to enjoy. Deckdown currently doesn't save the markdown text that you submit to it so this is a one time, unique thing.

###From A File
Tell deckdown the url of your raw `.md` file by passing it as the `src` parameter, like this:

```
http://deckdown.org/deck?src=path/to/yourdeck.md
```
For example, here's a slideshow version of the [deckdown readme](http://deckdown.org/deck?src=https://raw.githubusercontent.com/alanguir/deckdown/master/README.md#/).

  * Hosting on github 
  
    Commit your `.md` file to your repo, then navigate to that file on github and click 'raw' in the upper right corner. Use the url of the raw file for deckdown.
  * Hosting on Dropbox
    
    Place the markdown file in your Public folder, then right/option click to get it's public link. Use this public link with deckdown. More info on public links from [dropbox help](https://www.dropbox.com/help/16).
  * Hosting elsewhere
  
    Deckdown can take any publicly available url as an input for generating a slide deck. Links from your local filesystem that begin with `file:///` will not work. For that, just paste the contents of the file into deckdown a-la the *From Text* instructions above. 

##Why use it?

Deckdown is for breaking out of slideware jail. Traditional slideware is hard to proofread, and tweaking text size and alignment on large decks feels like a waste of time. I love reveal.js (it's used in this project), but the *process* of writing markup around my content in order to present it feels like a new flavor of the old slideware bloat. 

Deckdown changes all that by taking the contents of a single text file and turning it into a completely acceptable and usable slide deck. 

Presentations that include code examples may never be the same. I hope you enjoy using deckdown.

##How it works
Deckdown breaks your markdown file into slides based on headers. It does this with *regex*, and it splits up your file **after** converting it to html. This means html header tags `<h1> - <h6>` become the slide delimiters. 

Markdown conversion is done with [marked](https://github.com/chjj/marked), and uses [GFM](https://help.github.com/articles/github-flavored-markdown) by default. 

If you think you’ve run into a regex failure, please [report it](https://github.com/alanguir/deckdown/issues). 

##Known issues
Deckdown is still in an early experimental state. Feel free to use it for your presentations if you wish, just know that sailing is not yet a smooth as it could be. Here are some of the bigger issues keeping deckdown from taking the world by storm:

  * Images
  
    Currently, images are included at their natural size, which can look like an error - especially for .svg or hi-res images. 
  * Overflowing Content
  
    Right now, it’s up to the markdown author to anticipate overflowing content, and to chunk accordingly. 
  * Slides of text
  
    Non-heading delimiters are currently not implemented, so each slide in deckdown *needs* a heading (or it won’t be it’s own slide).

##Contribute
Deckdown is on [github](http://github.com/alanguir/deckdown).

Created by [Alan Languirand](http://github.com/alanguir/) in 2014.