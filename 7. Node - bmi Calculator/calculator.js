const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)

    res.send(`The result of your sum is ${n1+n2}`)
})

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function(req, res){
    const weight = Number(req.body.weight)
    const height = Number(req.body.height)

    console.log(height)

    res.send(`Your BMI is ${weight / (height ** 2)}`)
})

app.listen(3000, function(){
    console.log("Working in port 3000");
})