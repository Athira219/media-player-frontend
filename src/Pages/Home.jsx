import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home() {

  const [uploadVideos,setUploadVideos] = useState({})
  return (
    <div>
      <div className=' container d-flex justify-content-between align-items-center mt-5 mb-5 '>
        <div>
          <Add setUploadVideos={setUploadVideos}/>
        </div>
          <Link to={'/watch-history'} style={{textDecoration:'none',color:'white',fontSize:'30px'}} >Watch History</Link>

      </div>

      <div className='container-fluid w-100 mb-5 mt-5 d-flex justify-content-between'>
        <div className='col-lg-9'>
          <h4 className='mb-5'> All Videos</h4>
          <View uploadVideos={uploadVideos}/>

        </div>
        <div className='col-lg-3'>
          <Category />
        </div>
      </div>
    </div>
  )
}

export default Home
