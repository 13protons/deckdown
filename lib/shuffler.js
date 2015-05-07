/********

Shuffler

Shuffler files, retrieves, and validates decks

*********/

// Methods
/*
getById(id)
findOrCreate(url)
createFromUrl(url)
createFromMD(md)

isUrl([id, url, md])
isID([id, url, md])
isMD([id, url, md])


All public shuffle methods should return a cards object:

{
  id: 1234,
  url: optional,
  md: "raw markdown"
}

*/

// Public

function lookup(value){
  // is value a URL?
  return getByUrl(url)

  // Value is an ID
  return getById(value)
}

function addDeck(value){
  // is value a URL?
  var existingDeck = getByUrl(value);
  if(existingDeck){
    return existingDeck}
  else{
    return createFromUrl(value)
  }

  // else, it's markdown
  return createFromMD(value);

}


// Private

function newUID(){
  // Generate UID
  // Optionally check DB for uniqueness
  return UID;
}

function getById(id){
  // Lookup content by ID in Database
  // If markdown, return as markdown (null url)
  // If URL, fetch url, return results
}

function getByUrl(url){
  // Does this URL exist in the DB?

  // Yes, return it
  // No, return false

}

function createFromUrl(url) {
  var id = newUID();

  // add to database
  // id: url

  return getByID(id);

}

function createFromMD(MD) {
  var id = newUID();

  // add to database
  // id: MD

  return getByID(id);

}
