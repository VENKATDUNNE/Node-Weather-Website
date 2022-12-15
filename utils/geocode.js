const request=require('request')

const geocode=(address,callback)=>{
    const url='http://api.positionstack.com/v1/forward?access_key=6fac750d6624b2aa763e3dc902410a6a&query='+ encodeURIComponent(address)
    request({url,json:true},(error,{body})=>{
        if(error)
        {
            callback('Unable to connect to location services!',undefined)
        }
        else if(!body.data)
        {
            callback('Unable to find location try another search',undefined)
        }
        else
        {
            callback(undefined,{
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].name
            })
        }
    })
}


module.exports=geocode