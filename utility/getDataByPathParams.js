export const getDataByLocation= (data, locationType, locationName) =>{
      
    return  data.filter((destination) =>{
       return destination[locationType].toLowerCase() === locationName.toLowerCase()})}

 
        