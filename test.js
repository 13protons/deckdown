var kramed = require('kramed');
console.log(kramed('#hi {#one}'));

/*
var md = "#What a title! {#with-id}"
id = /({#)(.+)(})/g.exec(md)
console.log(id ? id[2] : (md.toLowerCase().replace(/[^\w]+/g, '-')).replace(/-$/, '') );
*/