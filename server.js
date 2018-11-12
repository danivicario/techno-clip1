const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exampleApp');
var Schema = mongoose.Schema;

// const subSchema = new Schema({ x: Number, y: Number });
// var SpiralSchema = new Schema({xx: [subSchema]});
var SpiralSchema = new Schema([{ x: Number, y: Number, z: Number }], [{ x: Number, y: Number, z: Number }]);

app.use(express.json());

function f(){
    //console.log(`body is:`)
    //console.table(req.body)
    let data 
    
    //data = req.body
    data = [
        {
            "x": Math.random() * 100,
            "y": 20,
            "z": 20
        },
        {
            "x": 101,
            "y": 2012,
            "z": 20
        }
    ]

    // const SpiralModel = mongoose.model('sc', SpiralSchema);
    const SpiralModel = mongoose.model('sc', SpiralSchema);
    new SpiralModel(data).save((err) => {
        if (err) {
            console.log({ ok: false })
        } else {
            console.log({ ok: true, timestamp: new Date() })
        }
    });
}

app.post('/', (req, res) => {
    f()
})

f()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))