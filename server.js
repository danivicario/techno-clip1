const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exampleApp');
var Schema = mongoose.Schema;

var nestedDoc = new Schema({
    name: String
});

var mainDoc = new Schema({
    names: [nestedDoc]
});

app.use(express.json());

app.post('/', function (req, res) {
    let data = {
        names: [{
                "name": 'test1'
            },
            {
                "name": 'test2'
            },
            {
                "name": 'test3'
            },
            {
                "name": `test: ${Math.random()}`
            }
        ]
    }

    const SpiralModel = mongoose.model('sc3', mainDoc);

    new SpiralModel(data).save((err) => {
        if (err) {
            res.status(200).json({
                ok: false
            })
        } else {
            res.status(200).json({
                ok: true,
                timestamp: new Date()
            })
        }
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))