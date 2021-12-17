import express from 'express';

const app = express();

app.get('/test', (req, res) => {
    res.send('it works');
});

app.listen(8000, () => console.log('Listening on 8K'))