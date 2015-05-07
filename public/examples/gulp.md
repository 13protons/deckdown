# Gulp
![Gulp Logo](https://avatars0.githubusercontent.com/u/6200624?v=3&s=400)
The streaming build system

## Nice to Meet You

Hi, I'm Alan

* alan@apprend.org
* @apprenddetroit
* @13protons

# Apprend

<img src="http://apprend.org/images/apprend-logo.png" class="logo" alt="Apprend Logo
"/>

Apprend is a new tech education company in Detroit. We're building curriculum and holding classes throughout 2015.

---

This presentation is a test run for a longer-form gulp.js workshop, which I'll likely be teaching this Spring.

More info and tell me you want the full class to happen by RSVPing on [apprend.org/events](/)

### Get Involved

If you want to get involved with Apprend as a student or instructor, please join our meetup group at [meetup.com/apprend](http://meetup.com/apprend).

![Apprend Meetup](http://localhost:3000/images/apprend_meetup.png)

# Front End Development is a Complete Cluster

### It's like we took all the tools in a traditional IDE

![watermellon ide](http://localhost:3000/images/watermelon1.jpg)

---

![Gallager](http://transitionvoice.com/wp-content/uploads/2011/08/Gallagher-smashing-melon-550x378.jpg)

And gave them to this guy

---

In front end dev, there is no compiler...just scripts.

Endless scripts.

Without a build system, your messy and disorganized source files are faithfully transmitted as-is to client web browsers.

---

In the world of build systems, Gulp is the smart and fun alternative to Grunt that laughs at all your jokes and favorites all your instagram photos.

![watermellon ide](http://localhost:3000/images/gulpomg.jpg)


### What Gulp Actually Does

Gulp is a build system for doing the mundane processing involved in optimizing front end website files, running tests, and many, many other things.

It uses (buffered) Node streams and virtual file representations to do alsmost anything you can think of both asynchronously and all in memory.

### Gulp's Super Powers

* Emphasize code over configuration
* Tasks are processed in memory without cacheing intermediate steps to disk
* Use standard libraries to accomplish common tasks
* Compose a build process out of small, idiomatic Node modules that each do one thing well
* Tasks are executed with maximum concurrency
* Really simple and elegant API

# The Gulp API

### The Gulp API is Teeny Tiny

Method   | Purpose
---------|--------
.task()  | Define a task
.src()   | Load files from disk
.pipe()  | Perform file mutations
.dest()  | Write back to disk
.watch() | Rerun tasks if files change

### .task()

A task is a grouping of related build tasks. You can have a 'styles' task, or a 'image_optimize' task, for example.

```javascript
gulp.task('name', ['run', 'first'], function(){
  //Profit
})
```
> The task method takes a name, an optional array of other task names to run first, then a callback function that is the body of the task you're defining.

### .src()

This method points gulp to the files you want to process. It takes a single string or an array of strings as it's only argument.

```javascript
gulp.task(...{
  gulp.src('path/to/files/*.ext')
})
```
> Use the `**` wildcard for any dir, and `*` for filename fragments

### .pipe()

You use `.pipe()` to pass files down the chain as they're mutated. Arguments are dependent on the plugins being used.

```javascript
gulp.task(...{
  gulp.src('path/to/files/*.ext')
    .pipe(/* do something */)
    .pipe(/* do something else*/)
})
```

### .dest()

This is how you output back to the file system. It's generally the last step in your `.pipe()` chain. File name and extension may or may not be modified by other plugins in the chain.

```javascript
gulp.task(...{
  gulp.src('./src/*.ext')
    .pipe(/* do something */)
    .pipe(/* do something else*/)
    .dest('./public')
})
```

### .watch()

By default, a gulp task is only run once. `.watch()` keeps gulp's process alive and can run tasks when files change on disk, i.e. automatic rebuilds happen when you hit save in your editor.

```javascript
gulp.task(...{
  gulp.watch('path/to/changing/files', ['tasks', 'to', 'run'])
})
```
> If this doesn't feel very DRY, that's because you end up repeating yourself w/ paths and task names.

# Let's build something
---
Here's what we're going to accomplish

1. Optimize some JavaScript Files
2. Serve a directory as a webpage
3. Re-build when things change

### Reality Check

Make sure node is installed by opening your console and typing `node -v`. You should see a version number, like this:

```bash
$ node -v
v0.10.33
```

### Install gulp globally

This will install gulp globally and add the `gulp` command to your bash profile.

```bash
$ sudo npm install -g gulp
```
> You'll never have to do this again

### Clone This:

[github.com/alanguir/lovegulp](https://github.com/alanguir/lovegulp)

### Install gulp for your local project

Gulp takes advantage of the dev-dependencies section of your package.json file

```bash
$ cd lovegulp
$ npm install gulp --save-dev
```
> Add the `--save-dev` flag to all your gulp packages to keep them out of your deployed build

### Our Files from lovegulp

Here's our starting point:

```bash
├── package.json
└── src
    ├── css
    │   ...
    │   └── styles.css
    ├── img
    │   └── common
    │       └── file-icons.png
    ├── index.html
    └── js
        ├── chosen.jquery.js
        └── main.js
```

## Goals for Part 1

1. Concatenate & minifiy all js files, then move the resulting file into `public/js`
2. Move everything else into `public`, untouched

### Create your gulpfile

Gulp is run from `gulpfile.js`. Create a blank one.

```bash
$ touch gulpfile.js
```

### Gulpfile Structure

There are only two things you really need in your gulpfile - imported plugins, and tasks. Put this code into 'gulpfile.js'

```javascript
var gulp = require('gulp');

gulp.task('scripts', function(){
  // Nothing to see here
})
```

### Find our JS files

In our new scripts task, we'll use `.src()` to look at all the javascript files in the `src/js` folder.

```javascript
var gulp = require('gulp');

gulp.task('scripts', function(){
  gulp.src('./src/js/*.js') //get all files with .js extension
})
```

### Install Our First Plugin

Head to the gulp registry at [gulpjs.com/plugins](http://gulpjs.com/plugins) and search for `gulp-concat`. Click the name to bring you to NPM.

Find the install command on the right, and add `--save-dev` to it in your terminal

```bash
$ npm install gulp-concat --save-dev
```

> Remember that the gulp API has only 5 methods, so most tasks require a plugin.

### Use that Plugin

Back on NPM, you saw docs that tell you how to use the plugin. You can copy/paste from there to add the require statement, then chain the concat mutation to our `.src()` method with `.pipe()`

```javascript
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function(){
  gulp.src('./src/js/*.js') //get all files with .js extension
    .pipe(concat('main.js'))
})
```

### Write That Puppy to Disk

The Last step is to write out a file that reflects our changes. Add `gulp.dest(path)` to a final `.pipe()` statement.

```javascript
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function(){
  gulp.src('./src/js/*.js') //get all files with .js extension
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./public/js'))
})
```
## Recap - Gulp Plugins

1. Find a gulp compatiable plugin by visiting [gulpjs.com/plugins](http://gulpjs.com/plugins)
2. Install it to your dev dependencies with `npm install [package] --save-dev`
3. `require` it in your gulpfile
4. Add it to one of your taks inside a `.pipe()` statement (or follow their docs on npm)

### Test Drive

To create `main.js` as specified in our gulpfile, run the `scripts` task with this terminal command:

```bash
$ gulp scripts
```

### Gulp, you so fast

Check that out.

```bash
lovegulp $ gulp scripts
[14:53:04] Using gulpfile ~/github/lovegulp/gulpfile.js
[14:53:04] Starting 'scripts'...
[14:53:04] Finished 'scripts' after 5.16 ms
```


### Reality Check

I prefer to do a quick audit of my files after running a new task. As you can see by glancing at finder, it sure looks like our two files were combined:

![FS](./images/gulp_fs_filesize.jpg)

### Challenge

Squeeze out some KB's by installing and using `gulp-uglify`.

### Uglify

After uglify, you should see your main.js went on a diet down to 27kb. Here's the code that'll get you there:

```javascript
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function(){
  gulp.src('./src/js/*.js') //get all files with .js extension
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
})
```
> Note, if uglify introduces errors, just pass `{mangle: false}` to stop automatic variable renaming.

## Recap - Part 1

We defined a gulp task that used two plugins to concatenate and minify our javascript files, and ran that task from the command line.

# Add Some Awesome

---
Now that we have the basics down, you might have noticed a few things...

1. Did the gulp plugin registry say 1200+ plugins?!
2. JS Concat. Cute. What about stuff I can't already do manually?
3. FML. Do I have to call `gulp [taskname]` for every task?
4. Gulp tasks take a callback - that means all tasks are async, even if the mutation chain w/in a task is in sync, right?

## Goals for Part 2

1. The default task
2. Watch for new files
3. A frickin' web server

### The Default Task & Task Chaining

If you remember our method signature for tasks from earlier, there's a way to specify certain tasks to run before calling the current task's callback.

You pass in an array of string names that correspond to other tasks.  

---

Let's create a new task named "default", and have it call `scripts` before it runs. Add this code to the bottom of `gulpfile.js`:

```javascript
gulp.task('default', ['scripts'], function(){
  //Nothing to see here. Carry on.
  console.log('love me some gulp')
})
```

### Calling Default

Now that you've added a default task, you get one convenience shortcut - calling `gulp` without any arguments will run the default task by...default.

```bash
$ gulp
```
The results of running our gulpfile now look like this:

```bash
lovegulp $ gulp
[17:24:09] Using gulpfile ~/github/lovegulp/gulpfile.js
[17:24:09] Starting 'scripts'...
[17:24:09] Finished 'scripts' after 5.69 ms
[17:24:09] Starting 'default'...
love me some gulp
[17:24:09] Finished 'default' after 26 μs
```
### Using Watch

Watching files is a way to re-run tasks when files change on disk. To watch your js files, and re-run `scripts` whenever something changes, modify your default task to look like the code below:

```javascript
gulp.task('default', ['scripts'], function(){
  gulp.watch('./src/js/*.js', ['scripts'])
})
```
> Why repeat ourselves? `.watch()` will not run it's tasks until something changes. We specify `scipts` to run both before default is run and as a parameter of watch to guarantee it is alway run at least once.

---

Re-run gulp with `$ gulp`, then modify one of the files in `src/js/`. You should see your terminal update as `scripts` is run again.

### A Frickin' Web Server

We can also serve our `./public` directory with another gulp plugin. There are many version of this, but we'll use `gulp-serve` because it's so concise:

```bash
$ npm install gulp-serve --save-dev
```

```javascript
var serve = require('gulp-serve');

...

gulp.task('serve', serve({
    root: ['public'],
    port: 1337
}));

```

### A Few Loose Ends

Before our web server has an actual website to serve, we have to make sure the rest of our files make it into `./public`. It would take too long to go through optimization tasks for each of those pieces, so we can just move them for now:

```javascript
gulp.task('move', function(){
  gulp.src('./src/index.html').pipe(gulp.dest('./public'));
  gulp.src('./src/css/**').pipe(gulp.dest('./public/css'));
  gulp.src('./src/img/**').pipe(gulp.dest('./public/img'));
})
```
> Add this task to your gulpfile

---

Now we can integrate the `move` and `serve` tasks:

```javascript
gulp.task('default', ['scripts', 'move', 'serve'], function(){
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch(['./src/index.html', './src/css/**', './src/img/**'], ['move']);
})
```

### Serve Me Some Files

Kick things off again from the command line:

```bash
$ gulp
```
And visit your website at [localhost:1337](http://localhost:1337)

## Recap - Part 2

Watching and task chaining allow us to compose an arbitrarily sophisticated build process that saves us from common drudgery and speeds up front end dev work.

We could just as easly have had a "test", "prod", or "build" task that mixes and matches other common individual tasks for different results.

# Closing Thoughts
Q&A Time

# Thank You!

<img src="http://apprend.org/images/apprend-logo.png" class="logo" alt="Apprend Logo
"/>

  * [apprend.org/](http://apprend.org/)
  * [@apprenddetroit](https://twitter.com/apprenddetroit)
  * [facebook.com/apprenddetroit](https://www.facebook.com/apprenddetroit)
  * [meetup.com/apprend](http://www.meetup.com/apprend/)
