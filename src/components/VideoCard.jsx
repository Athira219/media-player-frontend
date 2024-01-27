import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addWachHistory, deleteVideos } from "../service/allAPI";

import Modal from "react-bootstrap/Modal";

function VideoCard({ title, setVideoDelete ,isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    const {caption,videoLinks} =title

    const today = new Date()

    let timestamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',
    hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    
    console.log(timestamp);

    let videoDetail = {
      caption,
      videoLinks,
      timestamp
    }

    const response = await addWachHistory(videoDetail)
    console.log(response);
  }

  // delete function

  const removeItems = async (id) => {
    const response = await deleteVideos(id);
    setVideoDelete(true);
    console.log(response);
  };

  const getVideos =(e,id)=>{
  
console.log(`dragged id ${id}`);
    e.dataTransfer.setData("videoID",id)
  }

  return (
    <div>
      <Card style={{ width: "100%", height: "300px" }} className="mb-4" draggable onDragStart={(e)=>getVideos(e,title?.id)}>   
        <Card.Img onClick={handleShow} variant="top" src={title.imageUrl} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h6>{title.caption}</h6>
            {!isPresent && <Button className="btn btn-danger">
              <i
                class="fa-solid fa-trash"
                onClick={() => removeItems(title?.id)}
              ></i>
            </Button>}
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="530" src={title.videoLinks} title={title.caption}
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoCard;
