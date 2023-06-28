import React, { useEffect, useState } from 'react'
import { Box, Button, HStack, Heading, Image, Input, Select, Spinner, Text, Textarea, VStack, useToast } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import ReviewCard from '../Components/ReviewCard'

const SingleBookPage = () => {
const [book , setBook] = useState({})
const [allReview , setAllReview] = useState([])
const [review,setReview] = useState("")
const [rating,setRating] = useState("")
const [ratingInput,setRatingInput] = useState("")
const toast = useToast()
    let {id} = useParams()
    const userName = useSelector((state) => state.authReducer.userData.name)

    const [load,setLoad] = useState(false)
    const getAllBooks= async()=>{
    setLoad(true)
        try {
          let res = await axios.get(`https://gifted-fox-sneakers.cyclic.app/book/${id}`)
          setBook(res.data)
           setLoad(false)
        } catch (error) {
          console.log(error)
          setLoad(false)
        }
    }
  
    const getAllReviews= async()=>{
      setLoad(true)
          try {
            let res = await axios.get(`https://gifted-fox-sneakers.cyclic.app/review/${id}`)
            setAllReview(res.data)
             setLoad(false)
          } catch (error) {
            console.log(error)
            setLoad(false)
          }
      }
      const getRating= async()=>{
        setLoad(true)
            try {
              let res = await axios.get(`https://gifted-fox-sneakers.cyclic.app/rating/${id}`)
              setRating(res.data.rating)
               setLoad(false)
            } catch (error) {
              console.log(error)
              setLoad(false)
            }
        }
      const postReviews= async()=>{
        setLoad(true)
            try {
               await axios.post(`https://gifted-fox-sneakers.cyclic.app/review/add`,{bookId:id,userName,review},{
                headers:{ Authorization: `Bearer ${localStorage.getItem("token")}`}
              })
              toast({
                title: 'Review Posted.',
                position:"top",
                description: "Review posted successfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
              getAllReviews()
               setLoad(false)
            } catch (error) {
              console.log(error)
              setLoad(false)
            }
        }
        const postRating= async(e)=>{
          setLoad(true)
              try {
                 await axios.post(`https://gifted-fox-sneakers.cyclic.app/rating/add`,{bookId:id,userName,rating:e.target.value},{
                  headers:{ Authorization: `Bearer ${localStorage.getItem("token")}`}
                })
                toast({
                  title: 'Rating Posted.',
                  position:"top",
                  description: "Rating posted successfully",
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                })
                getRating()
                 setLoad(false)
              } catch (error) {
                console.log(error)
                setLoad(false)
              }
          }
    useEffect(()=>{
      getAllBooks()
      getAllReviews()
      getRating()
    },[])
  return (
    <>
    {load? <Spinner mt="30px" size={"xl"}/>:""}

     <HStack w="80vw" m="auto">
        <Box w="30%"> 
          <Image w="100%" src={book && book.image}></Image>
        </Box>
        <VStack alignItems={"top"} >
           <Text textAlign={"top"} fontSize={"2em"} fontWeight={"bold"}>Title:- {book && book.title}</Text>
          <Text fontSize={"1.2em"} fontWeight={"bold"}>Category:- {book && book.category}</Text>
          <Text fontSize={"1.2em"} fontWeight={"bold"}>Rating:- {rating && rating}</Text>
          <Text>Rate this Book</Text>
          <Select onChange={(e)=> postRating(e)} w="20%" alignSelf={"center"}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
        </VStack>
     </HStack>
     <VStack w="80vw" m="auto">
        <Heading>Reviews</Heading>
        <Textarea w="50%" onChange={(e)=> setReview(e.target.value)}> 

        </Textarea>
        <Button onClick={postReviews} bgColor={"tomato"}>Post Review</Button>
        <VStack mt="30px">
            {allReview.length>0 && allReview.map((e)=> <ReviewCard key={e.bookId} {...e}/>)}
        </VStack>
     </VStack>
    </>
  )
}

export default SingleBookPage