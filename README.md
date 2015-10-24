Modern Web App Template
===========

**Scala - Play - AngularJS - MongoDB**

A full application stack for a Scala-AngularJS-MongoDB Web application, lets review the components:

* **AngularJS** - client side javascript framework for creating complex MVC applications in Javascript,
fronted with Twitter bootstrap CSS framework, because well, I'm not a web designer.
  * Take a look at what the google cool kids are upto here : [AngularJS](http://angularjs.org/)

* **Bootstrap** - Bootstrap components written in pure AngularJS
  *  [http://angular-ui.github.io/bootstrap/](http://angular-ui.github.io/bootstrap/)

* **PlayFramework** - currently using 2.3.9 with the scala API
  *  [PlayFramework Docs](http://www.playframework.com/documentation/2.3.9/Home)

* **PlayReactiveMongo** gives interaction with MongoDB providing a non-blocking driver as well as some useful additions for handling JSON.
  * Check out their GitHub: [Play-ReactiveMongo](https://github.com/ReactiveMongo/Play-ReactiveMongo)



Getting Started
----------

Your development environment will require:
*  SBT / Play see [here](https://www.playframework.com/documentation/2.4.x/Installing) for installation instructions.
*  MongoDB see [here](https://www.mongodb.org/downloads) for installation instructions.

Once the prerequisites have been installed, you will be able to execute the following from a terminal.

```
../scala-angular-mongo-template >  sbt run
```

This should fetch all the dependencies and start a Web Server listening on *localhost:9000*

```
[info] Loading project definition from ../scala-angular-mongo-template/project
[info] Set current project to scala-angular-mongo-template
[info] Updating scala-angular-mongo-template...
...
[info] Done updating.

--- (Running the application from SBT, auto-reloading is enabled) ---

[info] play - Listening for HTTP on /0:0:0:0:0:0:0:0:9000

(Server started, use Ctrl+D to stop and go back to the console...)

```

Note: This will create a MongoDB Collection for you automatically, a freebie from the Driver!