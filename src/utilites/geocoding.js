const request = require('postman-request');
const chalk = require('chalk');
const geocoding = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoibWFuaXNoLWt1bWFyIiwiYSI6ImNrZ2tobTE1czE4NXMyenRlazQzNjl5amsifQ.Uyo7LhCLL0xlNLG48UBRMQ&limit=1'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Please! check your Internet Connection.', undefined);
        } else if (response.body.features.length === 0 || response.body.message === 'Not Found') {
            callback('Please! Search for the another, the location does not find.', undefined);
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0].toFixed(6),
                latitude: response.body.features[0].center[1].toFixed(6),
                location: response.body.features[0].place_name
            })
        }
    })
}
module.exports=geocoding;