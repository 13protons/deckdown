deckdown
========

Write markdown, get a slide deck. No BS. Or JS. Or HTML.

##Vision

Deckdown is for breaking out of slideware jail. Traditional slideware is hard to proofread, and tweaking text size and alignment on large decks feels like a waste of time. I love reveal.js (it's used in this project), but the PROCESS of writing markup around my content in order to present it feels like a new flavor of the old slideware bloat. 

Deckdown changes all that by taking the contents of a single text file and turning it into a completely acceptable and usable slide deck. I hope you enjoy using it. 

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