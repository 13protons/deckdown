deckdown
========

Write markdown, get a slide deck. No BS. Or JS. Or HTML.

##Vision

Deckdown is for breaking out of slideware jail. I love tools like reveal.js (it's even used in this project), but the PROCESS of using it feels like trading the bloat of powerpoint for the pain of writing code when we all really just want to be writing content. 

##How it works

Deckdown parses your markdown file into HTML, then uses the header tags as breakpoints for new slides. In this way, something like this...

```
  ##Vision
  Deckdown is for breaking out of slideware jail. I love tools like reveal.js... 

  ##How it works
  Deckdown parses your markdown file into HTML...
```

...becomes two slides in your deck. 

##Where this is headed

The goal of this project is to make something robust enough that it can be a hosted service that does fancy things like take the url of a readme file on github, and give back a bit.ly style permalink to the resulting slide deck. Conference presentations will be maintainable as a single text file. Non-devs will suddenly have access to huge amounts of content without us, the content creators, running through the hoops of slideware. Mountains will move. 

If you want to contribute, just ask. I'd love your help. 