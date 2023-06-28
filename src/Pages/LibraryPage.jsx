import { Grid, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BookCard from '../Components/BookCard'

const LibraryPage = () => {
    const userId = useSelector((state) => state.authReducer.userData.id)
    const [allBooks,setAllBooks] = useState([])
  const [load,setLoad] = useState(false)

    const getBooks= async()=>{
        setLoad(true)
      try {
          let res =await axios.get(`https://gifted-fox-sneakers.cyclic.app/library/${userId}`)  
          console.log(userId)
          setAllBooks(res.data)    
          setLoad(false)  
      } catch (error) {
        console.log(error)
        setLoad(false)  
      }
    }
    useEffect(()=>{
        getBooks()
    },[])
  return (
    <>
    {load? <Spinner mt="30px" size={"xl"}/>:""}
    <Grid templateColumns={"repeat(4,1fr)"} w="90vw" m="auto" mt="20px">
       {allBooks.length>0 && allBooks.map((e)=> <BookCard key={e._id} data={e} toggle={true} getFunc={getBooks}/>)}
    </Grid>
    </>
  )
}

export default LibraryPage