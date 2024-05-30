var request = require('request')
let key='b3aaa0b3323c0baab93aff38f75b44cb';
module.exports=function(location,callback){
   
let api=`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

request({
    url:api,
    json:true
},function(error,response,body){
    if(error){
        console.log('unable to connect');
    }
    else if(response.statusCode===404){
        console.log('unable to find location');
    }
    else{
        console.log(`Its ${body.main.temp-273} Max ${body.main.temp_max-273} in ${body.name} `);
    }
}
)
}