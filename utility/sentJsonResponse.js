  export const senJSONresponse = (res, statusCode, payload)=>{
    res.statusCode = statusCode
    res.setHeader('contentType', 'application/json' )
    res.end(JSON.stringify(payload, null, 2))
 } 
        
