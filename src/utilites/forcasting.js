const request=require('postman-request');
const forcast = (lat,long, loc,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=da9133309b18a8e5b4ab1346c7007717&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '&units';
    request({url:url,json:true},(error,response)=>{
        if(error)
        {
            callback('Please! check your Internet Connection.',undefined);
        }
        else if(response.body.error)
        {
           callback('Please! Search For Another,Match does not found.',undefined);
        }
        else{
            callback(undefined,{
                temperature:response.body.current.temperature,
                feelslike:response.body.current.feelslike,
                location:loc,
                description:response.body.current.weather_descriptions[0]
            })
        }
    })
}
module.exports=forcast;
