const express     = require('express')
const bodyParser  = require('body-parser')
const app         = express()
const _           = require('lodash')
const { deepEqual } = require('assert')

// app.use(express.static())
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())
var lions = []
var id    = 0

app.get(`/`, (req, res) => {
    res.json(lions)
})

app.get(`/lions`, (req, res) => {
    res.json(lions)
})

app.get(`/lions/:id`, (req, res) => {
    let lion = _.find(lions, {id: req.params.id})
    res.json(lion || {})
})

app.post(`/lions`, (req, res) => {
    let lion = req.body
    id ++
    lion.id = `${id} `
    lions.push(lion)
})

app.put(`/lions/:id`, (req, res) => {
    let update = req.body
    if(update.id){
        delete update.id
    }

    let lion = _.findIndex(lions, {id: req.params.id})
    if(!lions[lion]){
        res.send()
    }else{
        let updatedLion = _.assign(lions[lion], update)
        res.json(updatedLion)
    }
})

app.delete(`lions/:id`, (req, res) => {
    let lion = _.findIndex(lions, {id: req.params.id})
    if(!lions[lion]){
        res.send()
    }else{
        let deletedLion = lions[lion]
        lions.splice(lion, 1)
        res.json(deletedLion)
    }
})

const port = 3000
app.listen(port, function(){
    console.log(`listening on http://localhost:${port}`)
});
