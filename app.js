import express from 'express';
const PORT = 8848;

let app = express();

app.set('port', PORT);

app.get('/', (request, response) => {
  const url = `My Express url is here: ${request.url}`;

  response.json({meroData: url});
});

app.get('/student/:id', (request, response) => {
  const students = [{
    id: 1,
    name: 'Romit Amgai',
    roll: 19
  },
  {
    id: 2,
    name: 'Bikram Samsung',
    roll: 20
  },
  {
    id: 3,
    name: 'Mudita Shakya',
    roll: 21
  }];

 const studentId = request.params.id;

 const selectedStudent = students.filter((student) => student.id == studentId);

 response.json({student: selectedStudent});

});

app.listen(app.get('port'), () => {
  console.log(`Server started at port: ${PORT}`);
});
