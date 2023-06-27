import { Grid, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BookCard from '../Components/BookCard'
import axios from 'axios'

const Homepage = () => {
  const [allBooks,setAllBooks] = useState([])
  const [load,setLoad] = useState(false)
  const getAllBooks= async()=>{
  setLoad(true)
      try {
        let res = await axios.get(`https://gifted-fox-sneakers.cyclic.app/book/`)
         setAllBooks(res.data)
         setLoad(false)
      } catch (error) {
        console.log(error)
        setLoad(false)
      }
  }

  useEffect(()=>{
    getAllBooks()
  },[])
  return (
    <>
    {load? <Spinner mt="30px" size={"xl"}/>:""}
    <Grid templateColumns={"repeat(4,200px)"} w="60vw">
       {allBooks.length>0 && allBooks.map((e)=> <BookCard key={e._id} data={e}/>)}
    </Grid>
    </>
  )
}

export default Homepage