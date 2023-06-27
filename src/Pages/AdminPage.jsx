import { Box, Button, Grid, HStack, Heading, Image, Input, Text, VStack, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const AdminPage = () => {
  const [allBooks,setAllBooks] = useState([])
  const [load,setLoad] = useState(false)
  const [title,setTitle] = useState("")
  const [image,setImage] = useState("")
  const [category,setCategory] = useState("")
  const [titleUpdate,setTitleUpdate] = useState("")
  const [imageUpdate,setImageUpdate] = useState("")
  const [bookId,setBookId] = useState("")
  const [categoryUpdate,setCategoryUpdate] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
const userId = useSelector((state) => state.authReducer.userData.id)

  const getUsersBooks= async()=>{
  setLoad(true)
      try {
        let res = await axios.get(`https://gifted-fox-sneakers.cyclic.app/book`)
         setAllBooks(res.data)
         setLoad(false)
        
      } catch (error) {
        console.log(error)
        setLoad(false)
      }
  }
  const deleteUsersBooks= async(id)=>{
      setLoad(true)
          try {
             await axios.delete(`https://gifted-fox-sneakers.cyclic.app/book/delete/${id}`)
            
             setLoad(false)
            getUsersBooks()
          } catch (error) {
            console.log(error)
            setLoad(false)
          }
      }

      const updateUserBooks= async()=>{
          setLoad(true)
          try {
             await axios.patch(`https://gifted-fox-sneakers.cyclic.app/book/update/${bookId}`,{title:titleUpdate,image:imageUpdate,category:categoryUpdate,userId})
            
             setLoad(false)
            getUsersBooks()
            onClose()
          } catch (error) {
            console.log(error)
            setLoad(false)
          }
      }
      const addUsersBooks= async()=>{
          setLoad(true)
              try {
                 await axios.post(`https://gifted-fox-sneakers.cyclic.app/book/add`,{title,image,category,userId})
                
                 setLoad(false)
                getUsersBooks()
              } catch (error) {
                console.log(error)
                setLoad(false)
              }
          }
    
const handleUpdate=(title,image,category,id)=>{
  setTitleUpdate(title)
  setImageUpdate(image)
  setCategoryUpdate(category)
  setBookId(id)
  onOpen()
}
  useEffect(()=>{
    getUsersBooks()
  },[])

  return (
    <>
    <HStack w='100vw' h="auto" alignItems={"top"}>
        <VStack w="30%" maxH={"50vh"}>
            <Heading>ADD NEW BOOK</Heading>
           <Text>Title</Text>
           <Input type='text' placeholder='Enter Title' onChange={(e)=> setTitle(e.target.value)}></Input>
           <Text>Image</Text>
           <Input type='text' placeholder='Enter URL' onChange={(e)=> setImage(e.target.value)}></Input>
           <Text>Category</Text>
           <Input type='text' placeholder='Enter Category' onChange={(e)=> setCategory(e.target.value)}></Input>
           <Button bgColor={"blue.400"} color={"white"} onClick={addUsersBooks}>Add Book</Button>
        </VStack>
        <Grid templateColumns={"repeat(3,1fr)"} w="70%" m="auto" mt="20px" gap='10px'>
    {allBooks.length>0 && allBooks.map((e) => {
        return(
  
<Box h="auto" >
 <Image src={e.image} h="80%" w="100%" />
 <Text>{e.title}</Text>
 <Text>{e.category}</Text>
 <HStack justifyContent={"space-between"}>
 <Button bgColor={"blue.400"} color="white" onClick={()=> handleUpdate(e.title,e.image,e.category,e._id)}>Update</Button>
 <Button bgColor={"red.400"} color="white" onClick={()=> deleteUsersBooks(e._id)}>Delete</Button>
 <Link to={`/${e._id}`}><Button bgColor={"tomato"} color="white">Details</Button></Link>

 </HStack>
 <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
         
          
           <Text>Title</Text>
           <Input type='text' placeholder='Enter Title' onChange={(e)=> setTitleUpdate(e.target.value)} value={titleUpdate}></Input>
           <Text>Image</Text>
           <Input type='text' placeholder='Enter URL' onChange={(e)=> setImageUpdate(e.target.value)} value={imageUpdate}></Input>
           <Text>Category</Text>
           <Input type='text' placeholder='Enter Category' onChange={(e)=> setCategoryUpdate(e.target.value)} value={categoryUpdate}></Input>
           
       
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button bgColor={"tomato"} color="white" onClick={updateUserBooks}>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Box>
 
        )
 
    })}
    </Grid>
    </HStack>
    
    </>
  )
}

export default AdminPage