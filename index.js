const express=require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
app.use(express.static(__dirname + '/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.render('index');
}); 
app.post('/bycity', async (req,res) => {
    console.log(req.body); 
    fr = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+req.body.city+'&appid=yourapikey'); 
    json = await fr.json();
    res.json(json);
});

app.post('/bycoord', async (req,res) => {
    console.log(req.body); 
    fr = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+req.body.lat+'&lon='+req.body.lon+'&appid=yourapikey'); 
    json = await fr.json();
    res.json(json);
});
app.listen(3000,() => {
    console.log("Listening to port 3000");
});