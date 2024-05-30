var weather = require('./weather')
var location= require('./locationD')
var argv= require("yargs")
.options("location",{
     demand:false,
     alias:"l",
     describe:"location",
     type:"string",
}).help("help")
.argv

if(typeof argv.location==='string' && argv.location>0){
 weather(argv.location,function(currentWeather){
     console.log(currentWeather);
 })
} else 
{
    console.log('Location not enter fetching current city detail');
    location(function(location){
        weather(location.city,function(data){
        console.log(data);
        })

})
}
 