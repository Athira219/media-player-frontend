import { commonAPI } from "./commonUrl"
import { serverURL } from "./serviceURL"

//Upload Videos

export const uploadAllVideo = async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//detail videos

export const getAllvideo = async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,'')
}

// delete videos

export const deleteVideos = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//Added WatchHistory

export const addWachHistory = async(videoDetails)=>{
   return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//get WatchHistory

export const detailedWatchHistory = async ()=>{
   return await commonAPI('GET',`${serverURL}/history`,'')
}
//delete WatchHistory
 export const deleteWatchHistory = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})

 }

//add category

export const addCategory = async (body)=>{

    return await commonAPI('POST',`${serverURL}/categories`,body)
}

//Listing category
export const detailedCategory= async()=>{
   return await commonAPI('GET',`${serverURL}/categories`,'')
}

// delete category

export const deleteCategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
 
  }

  //get a particular video
 export const getAParticularVideo = async(id)=>{
  return await commonAPI('GET',`${serverURL}/videos/${id}`,'')
  }

  //update category

  export const updateCategory = async(id,body)=>{
    
  return await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
  }
