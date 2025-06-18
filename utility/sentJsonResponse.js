  export const senJSONresponse = (res, statusCode, payload)=>{
    res.statusCode = statusCode
    res.setHeader('contentType', 'application/json' )
    res.setHeader('Acess-Control-Allow-Origin', '*' )
    res.setHeader('Acess-Control-Allow-Method', 'GET' )
    res.end(JSON.stringify(payload, null, 2))
 } 
        
