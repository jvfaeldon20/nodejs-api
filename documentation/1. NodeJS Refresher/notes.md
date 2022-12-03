NodeJS 
- a way to run javascript outside the context of the browser
- node uses CommonJS for its module loader. Using require() we can get access to build in and 3rd party npm modules

<!-- built in node module -->
var path = require('path')

<!-- 3rd party module downloaded into node modules -->
var _ = require('lodash')

<!-- a module we created in another file -->
var myModule = require('.oath/to/my/module')


Express
- is a framework that sits on top of node and use the HTTP module to make building servers.
- used middlewate to modify and inspect the incoming request.


