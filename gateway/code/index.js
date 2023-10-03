const express = require('express');

const app = express();

app.use('/assets', express.static(__dirname + '/public/assets'));
app.use('/', express.static(__dirname + '/public'));

app.listen(9000, () => {
    console.log('start success.');
}).on('error', (e) => {
    console.error(e.code, e.message)
})
