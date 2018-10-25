const express = require('express');
const path = require('path');
const logger = require('morgan');

const port = (process.env.PORT || '3000');

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    return res.sendFile('404.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
}); 