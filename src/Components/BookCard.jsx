import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({data}) => {
    const {image,title,_id,category} = data;
  return (
    <>
     <Box h="auto" w="300px">
      <Image src={image} h="80%" w="100%" />
      <Text>{title}</Text>
      <Text>{category}</Text>
      <Link to='/:id'><Button>Details</Button></Link>
     </Box>
    </>
  )
}

export default BookCard