# Getting started with NodeJS
  - Introduction to NodeJS
  - Understanding the asynchronous single threaded nature of NodeJS
  - Creating a server
  - Using Express Framework
  - Understanding RESTful API (GET, POST, PUT, PATCH, DELETE)
  - Using GET
  - Routing in express

# Introduction to NodeJS
  - It is a platform built on v8 engine (Google Chrome Javascript Engine)
  - Mostly used for server-side operations/network operations where there is no CPU intensive work
  - Research more on features of NodeJS

# Single threaded, event based nature of NodeJS
  - How requests is handled in Java
  - How requests is handled in NodeJS
  - Event Queue, Event Loop (Single Threaded)
  - Blocking/Non-Blocking code

# Creating a server
  - Using http module of NodeJS
  - Create an index.js file and keep following piece of code

  ```
  const http = require('http');  
  const port = 3000;

  const requestHandler = (request, response) => {  
    console.log(request.url);

    response.end('Welcome to NodeJS Server');
  }

  const server = http.createServer(requestHandler);

  server.listen(port, err => {  
    if (err) {
      return console.log('Something went wrong', err)
    }

    console.log(`server is listening on port: ${port}`)
  });
  ```

# Using Express Framework
  - Add express as dependency
  - Add following piece of code in index.js
  ```
  const express = require("express");

  //Initiating the application
  let app = express();

  const port = 8282;

  app.set('port', port);

  app.get("/", (request, response) => {
      response.json({data: "Welcome to my api"});
  });

  app.listen(port, ()=> {
      console.log(`Node app is running on port, ${port}`);
  });
```

# Understanding RESTful API
 - REST is an architectural style, and RESTful is the interpretation of it
 - HTTP operations made equivalent to CRUD Operations

# Using GET + Routing in express
  - Create two get routes in express
  - Each route must consists of following stuffs:
    - Get all data
    - Get data by id
    - Get data of child

# Assignment
  - Event Loop
    - Just check out this video -> https://www.youtube.com/watch?v=8aGhZQkoFbQ
  - Routing
    - Create Route to GET all resources
    - Create Route to GET a single resource (by id)
 - Route naming conventions in RESTful application
 - POST requests in express
