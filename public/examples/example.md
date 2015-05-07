# Heading 1

> With a quote

## Heading 2

* With a list
* of really great
  * nested
  * Items

### Heading 3

A **paragraph** here

It makes *appearances* or takes lead roles in front end user interfaces, server side code, as a database - both the management server and data structure, in mobile apps, etc.

### A Table

Data Type     | What it's used for
--------------|-------------------------------------
Number        | Numbers! (integers or decimals)
String        | Text (use 'single' or "double" quotes)
Boolean       | `true` or `false`
Array         | A list of values
Object        | `Key: Value` pairs
undefined     | No value (different from `false` or `0`)
NaN           | Not a Number ( like the result of 1/0 )

#### Heading 4

This is a basement level, but looks like an h1

A code block

```javascript
var static = require('node-static');

if(process.env.LOCAL == "true"){
  var file = new static.Server('./public', {
    "Cache-Control": "no-cache, must-revalidate",
    gzip: true
  });
} else {
  var file = new static.Server('./public', {
    cache: 7200,
    gzip: true
  });
}

```

##### Heading 5

This is a basement level, but looks like an h2

###### Heading 6

This is also a basement Level, but looks liek an h3

---

This stays in the basement until we bust out with an h3 or higher
