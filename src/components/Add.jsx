import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { uploadAllVideo } from "../service/allAPI";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Add({setUploadVideos}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [videos, setVideos] = useState({
    id: '',
    caption: '',
    imageUrl: '',
    videoLinks: ''
  });

  
                                            


  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setVideos((prevVideos) => ({
  //     ...prevVideos,
  //     [name]: value
  //   }));
  // };

  console.log('videos=', videos);
  
  const videoLink =(e)=>{

    const {value} = e.target

    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideos({...videos,videoLinks:link})

  }

  const handleUpload = async ()=>{
    const {id,caption,imageUrl,videoLinks} = videos

    //if there is no input value

    if(!id || !caption || !imageUrl || !videoLinks){
      toast.warning('Please Fill all the Field')
    }else{
      const response = await uploadAllVideo(videos)
      console.log(response);

      if(response.status>=200 && response.status<300){
        setUploadVideos (response.data)
        toast.success(`${response.data.caption} is Successfully uploaded `)
       
        //initial stage
        setVideos({
          id:'',
          caption: '',
           imageUrl: '',
           videoLinks: ''
        })
       
        
        //modal close
        
        handleClose()
      }else{
        console.log(response);
        toast.error('Something went wrong .Try again')
      }
    }
  }
  
  return (
    <div>
        {/* Upload a New video header section */}
      <div className="d-flex align-items-center">
        <h5>Upload a New video</h5>
        <button onClick={handleShow} className="btn">
          <i class="fa-solid fa-cloud-arrow-up fs-5"></i>
        </button>
      </div>


      {/* modal */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <i class="fa-solid fa-film me-2 text-warning"></i>Upload Videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="border border-secondary rounded p-2">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" name="id"   placeholder="Enter Video ID" onChange={(e)=>setVideos({...videos,id:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" name="caption"  placeholder="Enter Video Caption" onChange={(e)=>setVideos({...videos,caption:e.target.value})}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" name="imageUrl"   placeholder="Enter Video Image url" onChange={(e)=>setVideos({...videos,imageUrl:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text"  placeholder="Enter Video Link"  onChange={(e)=>videoLink(e)} />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </div>
  );
}

export default Add;
