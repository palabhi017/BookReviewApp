import { Box, Button, HStack, Image, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BookCard = ({data}) => {
    const {image,title,_id,category} = data;
    const toast = useToast()
 const userId = useSelector((state) => state.authReducer.userData.id)
 
 const isAuth = useSelector((state) => state.authReducer.isAuth)
    const addToLibrary= async()=>{
        if(isAuth){
            try {
                let res = await axios.post(`https://gifted-fox-sneakers.cyclic.app/library/add`,{image,title,category,userId},{
                  headers:{ Authorization: `Bearer ${localStorage.getItem("token")}`}
                })
                toast({
                    title: 'Book added',
                    position:"top",
                    description: res.data,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
            } catch (error) {
                console.log(error)
            }
        }else{
            toast({
                title: 'Login first',
                position:"top",
                description: "you are not loged in",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
        }
      
    }
  return (
    <>
     <Box h="auto" w="300px">
      <Image src={image} h="80%" w="100%" />
      <Text>{title}</Text>
      <Text>{category}</Text>
      <HStack justifyContent={"space-between"}>
      <Button bgColor={"blue.400"} color="white" onClick={addToLibrary} isDisabled={!isAuth}>Add to library</Button>
      <Link to={`/${_id}`}><Button bgColor={"tomato"} color="white">Details</Button></Link>
      </HStack>
      
     </Box>
    </>
  )
}

export default BookCard