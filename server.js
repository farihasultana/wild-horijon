import http from 'node:http'
import { getDataFromDB } from './database.js'
import { senJSONresponse } from './utility/sentJsonResponse.js'
import { getDataByLocation } from './utility/getDataByPathParams.js'

 

const PORT = 8000

const server = http.createServer(async(req, res)=>{
    
    const destinations = await getDataFromDB()


    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    const queryObj = Object.fromEntries(urlObj.searchParams)
    

    if(urlObj.pathname  === '/api' && req.method === 'GET'){

        let filteredDestinations = destinations

        senJSONresponse(res, 200, filteredDestinations)

        
    }
    
    else if(req.url.startsWith("/api/continent") && req.method === 'GET'){
        const continent = req.url.split('/').pop()
        
        const filterData = getDataByLocation(destinations, 'continent', continent)

        senJSONresponse(res, 200, filterData)

    }
    else if(req.url.startsWith("/api/country") && req.method === 'GET'){
        const country = req.url.split('/').pop()
        const filterData = getDataByLocation(destinations,'country',country)
       
        senJSONresponse(res, 200, filterData)
    }
    
    else{
        senJSONresponse(res, 404, ({
            error: "not found",
            message : "The requested data does not exist"
        }))
        
    }
    
})




server.listen(PORT, ()=>console.log(`server is running from: ${PORT}`))

