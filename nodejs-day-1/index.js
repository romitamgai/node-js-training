const http = require('http');

const port = 8848;

const requestHandler = (request, response) => {
  console.log('url', request.url);

  response.end('Welcome to nodejs server');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if(err) {
    console.log('Something went wrong', err);
    return;
  }

  console.log(`Server started at port: ${port}`);
});
