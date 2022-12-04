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

Installing nodemon
1. npm i -g nodemon
2. enabling execution policy
- run as admin a powershell
- type this command: [WIN only] => 'Set-ExecutionPolicy Unrestricted'
- run your server now as 'nodemon server.js'
- success if you can now see server logs


RESTful
- should be stateless
- it use HTTP verbs explicitly
- expose a directory like a url pattern for routes
- transfer JSON and XML


lodash
- Lodash is a JavaScript library that helps programmers write more concise and maintainable JavaScript
- Why you should use Lodash? 
    - it is very useful when you handle nested array or objects
    - by using functions supported by lodash, you can chain the lodash functions so you can perform complicated array or objects manipulations easily.
