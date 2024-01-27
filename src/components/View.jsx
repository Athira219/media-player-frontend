import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllvideo } from '../service/allAPI'

function View({uploadVideos}) {

  //automatically delete
  const [videodelete,setVideoDelete] = useState(false)

  const [allvideos,setAllVideos] = useState([])
  
  const getAllUploadedVideos = async()=>{

   const response = await getAllvideo()
   
  //  console.log(response)

  const{data}=response
  // console.log('res=',data);
setAllVideos(data)
  }
  console.log('allvideos=',allvideos);

  useEffect(()=>{
    getAllUploadedVideos()
    setVideoDelete(false)
  },[uploadVideos,videodelete])

  return (
    <div>
     <Row>

        { allvideos.length>0?
        allvideos.map((video)=><Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard title={video} setVideoDelete={setVideoDelete} />
    </Col>)
        :
       <p>Nothing to show</p> }
      
      </Row>
    
    </div>
  )
}

export default View
