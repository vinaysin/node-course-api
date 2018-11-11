const express = require('express');
const app = express();

const courses = [
    {id: 1, name: 'Course One'},
    {id: 2, name: 'Course Two'},
    {id: 3, name: 'Course Three'}
];

app.get('/', (req, res) => {
    res.send('Hello Word!');    
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)
        res.status(404).send(`Course with ID ${req.params.id} not found.`);
    res.send(`Course with ID ${req.params.id} is : ${course.name}`);
});

// app.post();
// app.put();
// app.delete();
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
