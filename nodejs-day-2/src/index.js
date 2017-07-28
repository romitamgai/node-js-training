import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import * as errorHandler from './middlewares/errorHandler';

const PORT = 8848;

let app = express();

app.set('port', PORT);
app.use(bodyParser.json());

//API Routes
app.use('/api', routes);

// Error Middlewares
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.notFoundError);

app.listen(app.get('port'), () => {
  console.log(`Server started at port: ${PORT}`);
});
