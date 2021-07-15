const express = require('express')
const Datastore = require('nedb')
const app = express()
const database = new Datastore('database.db')
database.loadDatabase()
const cors = require('cors')
app.use(
    cors({
        origin : `*`
    })
)
app.use(express.json())



app.post('/postreq', (req, res) => {
    const data = req.body
    database.insert(data, function (err, newDocs) {
        if(err){
            res.send(err)
        }else {
            res.send('Request successful')
        }
      });
    console.log("Got Post Request")
})

app.get('/getreq', (req, res) => {
    const data = req.body
    database.find({}, function (err, data) {
        if(err) {
            res.send(err)
        }else {
            res.send(data)
        }
        console.log('Got Get Request');
    });
})



console.log('server is running');
app.listen(3001)