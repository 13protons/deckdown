#Let’s Gulp
by: Alan Languirand 
[alan@13protons.com][email Alan]
@13protons

##What is gulp?

![gulp logo](https://raw2.github.com/gulpjs/artwork/master/gulp-2x.png)
*The streaming build system*

Technically, it’s a node.js plugin for manipulating virtual file streams.

#Huh?

##The need for a build system

A build system is a way of managing the complexity of going from your working website code to production/distribution code. This is roughly equivalent to your compile step in a language like java or objective-c.  

##The need for a build system

(We’ll get to the virtual file stream business once we start manipulating code.)

##What gulp does

Gulp does all your work for you when it comes to things like CSS pre-compiling, javascript minification and image optimization. Normally, these are things done by hand, right before you go live with a website.

##What gulp does

With gulp, this can literally be done automatically every time you make changes to a file in your website.  

##Designers <3 Gulp

With this type of build system, you’ll always have a **production quality** version of your website. No more debugging unexpected errors at 11pm the night before you go live due to unexpected hiccups in your manual build process. 

##What gulp does (cont.)

There are currently just shy of 700 plugins for gulp. 

##Let’s talk turkey

Here’s the gulp api:
  * .task()
  * .src()
  * .pipe()
  * .write()
  * .watch()

#That’s it. 

I know you were expecting a longer list, but there isn’t one. Let’s get some things installed, and then we’ll explore each of the 5 functions in the gulp api in more detail.

##Get node up and running

![node logo][]
[Install Node][node]
	
##What’s node?

Node.js is a way of using javascript to write code that gets run as a web server. It lets us run javascript outside of the context of a web browser so we can use it for more powerful things, like accessing and manipulating the filesystem. 

##Let’s test our install

Now that node is installed, open up your terminal. Verify that node and npm have been installed by running these commands: 

```
$ node -v
$ npm -v
```
If you don’t see something like this: 
```
$ node -v
	v0.10.21
$ npm -v
	1.3.21
```
Then it’s time to get some [Installation help][]

##Download an example

This presentation was built with gulp. You can download it here: [https://github.com/alanguir/letsgulp](https://github.com/alanguir/letsgulp)

##Navigate to the example

`$ cd path/to/example/files`

##Install dependencies

Run these two commands:
```
$ npm install -g gulp
```

```
$ npm install
```

##What just happened? 

First up, we installed gulp. The `-g` switch told npm to install it globally so any future node app can have access to it. 

##What just happened? 

Next, we installed our application dependencies. The `package.json` file defines information about our node app. It includes things like who wrote it, where you can find it's source code, and libraries that app depends on. Gulp stores information about it's plugins in 'dev dependencies'. It looks like this: 

```
"devDependencies": {
    "gulp": "~3.8.6",
    "gulp-minify-css": "~0.3.8",
    "gulp-less-sourcemap": "~1.3.3",
    "gulp-concat": "~2.4.0",
    "gulp-uglify": "~1.0.1"
  }
```

##What just happened?

The `devDependencies` object tells node which packages to fetch for a dev build, meaning these will **not** be installed if you deploy to a production server like [heroku](http://heroku.com). For those familiar with ruby, a *node package* is like a *ruby gem*. Unlike ruby gems, a node package is only installed for one app in one directory, unless installed globally with `-g`. 

##Lets add another dependency

Head on over to the [gulp plugin](http://gulpjs.com/plugins/) page, and search for `gulp-serve`. Clicking on `gulp-serve` in the list below will take you to the node package [registry entry](https://www.npmjs.org/package/gulp-serve/) that tells you how to use the plugin.

##Lets add another dependency

Notice the terminal command front and center at the top of the page: `npm install gulp-serve`. This is the general command to install `gulp-serve`. In order to also save a reference to `gulp-serve` in our `package.json` file (so that it can be intalled with `npm install` in the future, we need to modify the terminal command to read: 

```
$ npm install gulp-serve --save-dev
```

The `--save-dev` switch tells npm to also save a reference to this intall command in the dev dependecies list. 

#Whew

Ok, we're all set up. For those familiar with node, this should be no sweat. For those who are working with node for the first time, we just covered a lot of ground. Let's do a quick recap.

##Recap - concepts

  * Gulp is a streaming build system for node.js
  * Node is a server technology that lets you write server functionality with javascript 
  * NPM is the *Node Package Manager*, and is used to install libraries your app depends on
  * We interact with *node* and *npm* via the *terminal* (or windows command line)
  * Node apps can store references to npm libraries via the `package.json` file
  * Gulp stores *it's* dependencies under the 'devDependencies' section

##Recap - actions

  * `$ npm install -g gulp` to install gulp for the first time
  * `npm install` to have node fetch all the packages specified in `package.json`
  * Install a gulp plugin and save it locally with `$ npm install -g gulp-plugin-name`
  

* Here’s a canned sample project that we’ll put through a build process together
    * a tour of the gulp plugin space
    * concepts of NPM and package management
    * using plugins in gulp
    * the handful of plugins you’ll use for every project
    * ??? (there’s more to dig into here. We’ll see what time allows for)
* Questions? 
* Go forth and conquer the world (drinks next door if you want to chat more)

People who are a good fit for a workshop like this probably work in front end design/dev, are comfortable writing javascript, have built projects complex enough to require JS/CSS compiling, and can find their way around a command line. 

As far as dates, my schedule would accommodate late October and beyond. 

How does that sound? For those who don’t know node, this will also kinda be a crash course in that too, even though you don’t have to understand *too* much about node to use gulp. 

[email Alan]: mailto:alan@13protons.com
[node logo]: http://nodejs.org/images/logo.svg
[Installation Help]: http://
[node]: http://nodejs.org/
