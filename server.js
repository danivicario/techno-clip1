const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exampleApp');
var Schema = mongoose.Schema;

var SpiralSchema = new Schema([{
    x: Number,
    y: Number,
    z: Number
}, {
    x: Number,
    y: Number,
    z: Number
}]);

app.use(express.json());

app.post('/', function (req, res) {
    let data = [{
        "x": Math.random() * 100,
        "y": 20,
        "z": 202
    },
    {
        "x": 101,
        "y": 2012,
        "z": 20
    }
]

const SpiralModel = mongoose.model('sc', SpiralSchema);

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