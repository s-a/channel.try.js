
[<img src="https://travis-ci.org/s-a/channel.try.js.png" />](https://travis-ci.org/s-a/channel.try.js "Test state")

The channel.json file contain a list of repositories and packages for  [TRY.js](https://github.com/s-a/try.js).


The channel.json file is published at https://raw.githubusercontent.com/s-a/channel.try.js/master/channel.json and is included within [TRY.js](https://github.com/s-a/try.js) as the default channel.


***Please be sure to follow the instructions to help the process of adding your package or repository go smoothly.***

### So how to add sources to this channel?  

 - Install git client tools
 - Fork this repository
 - Clone your forked repository
 - Create and checkout a new branch
 - Open the file channel.json and add a new object tree to ```packages```

```
       {
            "name" : "First steps",
            "description" : "A hello world package for the first steps with TRY.js containing a very simple environment setup, a synchronious robot program and a test suite.",
            "author": "Stephan Ahlf",
            "environment" : "https://github.com/s-a/examples.try.js/master/first%20steps/basic-environment.json",
            "program" : "https://github.com/s-a/examples.try.js/master/first%20steps/basic-program.js",
            "test" : "https://github.com/s-a/examples.try.js/master/first%20steps/basic-tests.js",
            "labels" : [ "test", "sync" ]
        }
```

 - ***Run ```npm test``` before each ```git push```!*** You will need [Node.js](http://nodejs.org/) to do this. After installation of node you need to install the test libraries via ```npm install```
 - Commit and push your work and open a ```Pull Request``` on GitHub