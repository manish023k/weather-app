const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocoding = require('./utilites/geocoding.js');
const forcast = require('./utilites/forcasting.js');
console.log(__dirname);
console.log(__filename);
//set up the express application
const app = express();
const port=process.env.PORT || 3000;


// set up the paths for the app
const path023 = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials')


//set the express config using the handlebar templates and reset views dir
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);


//work with the static assets
app.use(express.static(path023));



app.get('/', (req, res) => {
    res.render('index.hbs', {});
})
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        authorName: "Manish Kumar",
        location: "Malout,Punjab"
    });
})
app.get('/help', (req, res) => {
    res.render('help.hbs', {
        name: "Manish Kumar",
        number: "9815083771"
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({error:"Please! enter the valid Address.."});
    }
    else {
        geocoding(req.query.address, (error, data={}) => {
            if (error) {
                return res.send({error:error});
                // return res.render('error.hbs', { errName:error});
            }
            forcast(data.latitude, data.longitude,data.location, (error, weatherdata) => {
                if (error) {
                    return res.send({error:error});
                    // return res.render('error.hbs', { errName:error});
                }
                // console.log(data.location);
                // console.log("Weather Info:", weatherdata);
                // res.render('weather.hbs',{
                //     temprature:weatherdata.temperature,
                //     feelslike:weatherdata.feelslike,
                //     location:data.location
                // })
                res.send(weatherdata);
            })

        })
    }
  
})

app.get('/help/*', (req, res) => {
    res.render('error.hbs', { errName: "Help Article Not Found !" });
})
app.get('*', (req, res) => {
    res.render('error.hbs', { errName: "Page Not Found !" });
})
// app.get('',(req,res)=>{
//    res.send(`<h1 style="color:red;">Home Page</h1>`);
// })
// app.get('/about',(req,res)=>
// {
//  res.send([{
//      authorName:'Manish Kumar'
//  }]);
// })
// app.get('/weatherapp',(req,res)=>
// {
//  res.send([{
//      forcast:"45 degree",
//      location:'Malout'
//  }]);
// })
app.listen(port , () => {
    console.log('app is running on the port:'+ port);
})