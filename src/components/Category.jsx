import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, detailedCategory, getAParticularVideo, updateCategory } from '../service/allAPI';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'


function Category() {
  
const[category,setCategory] = useState([])
    const [show, setShow] = useState(false);
    const [value, setValue] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//----------store the value----------//
 const  addCategorys=(e)=>{

 const { value:category} = e.target
 setValue(category)
 
 }
 console.log(value);


//------------add category ---------//
const addValues=async()=>{
  if(value){
    let body={
      value,
    allcategory:[]
    }
    const response = await addCategory(body)
    console.log(response);
    if(response.status>=200 && response.status<300){

      //modal close
      handleClose()
      //get all category
      getAllCategory()
            //value 
            setValue('')
      toast.success('successfully added')
    }else{
      toast.error('something went wrong')
    }
  }else{
    toast.warning('please fill the form')
  }
  
}

//get the category

const getAllCategory = async()=>{
const {data} = await detailedCategory()
setCategory(data)
// console.log(data);
}

useEffect(()=>{
  getAllCategory()
},[])
// ---------removeCategory----------//
const removeCategory = async (id)=>{
  const response = await deleteCategory(id)
  console.log(response);
  // get the category
getAllCategory()
}

const draggedVideos=(e)=>{
e.preventDefault()
}

const videoDrop = async(e,id)=>{

  console.log(`video  id${id}`);
  let videoID = e.dataTransfer.getData("videoID");


   console.log(videoID);
   const {data} = await getAParticularVideo(videoID)
   console.log(data);
let selectedCategory=category.find((item)=>item?.id==id)

selectedCategory.allcategory.push(data)

console.log(selectedCategory);

await updateCategory(id,selectedCategory)

getAllCategory()
}

  return (
    <>
    <div className='d-grid ms-3'>
<button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
    </div>
    {category.length>0?
    category.map((item)=>(<div className='m-5 border border-secondary rounded p-3' droppable onDragOver={(e)=>draggedVideos(e)} onDrop={(e)=>videoDrop(e,item.id)} > 
      <div className='d-flex justify-content-between align-items-center'>
     <h6>{item.value}</h6>
     <Button className="btn btn-danger" onClick={()=>removeCategory(item.id)}>
              <i
                class="fa-solid fa-trash"
                
              ></i>
            </Button>

   </div>

   <Row>

        { item?.allcategory.length>0?
        item?.allcategory.map((video)=><Col >
        <VideoCard title={video} isPresent={true} />
    </Col>)
        :
       <p>Nothing to show</p> }
      
      </Row>

   </div>)): 
   <p>Nothing to Display</p>
       
    }
   

    {/* modal  */}

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <i class="fa-solid fa-pencil text-warning me-2"></i> Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="border border-secondary rounded p-2">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Category Name</Form.Label>
              <Form.Control type="text" name="category"  onChange={(e)=>addCategorys(e)}  placeholder="Category Name" />
            </Form.Group>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={addValues}>Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  )
}

export default Category
