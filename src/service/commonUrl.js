import axios from "axios"


 export const commonAPI = async (httpMethod,url,reqBody)=>{
   
    let reqConfig= {

        
            method: httpMethod,
            url: url,
            data: reqBody,
          Headers:{
            "Content-Type":"Application/json"
          }

    }

    return await axios(reqConfig).then((result)=>{
        return result

    }).catch((err)=>{
        return err
    })
}