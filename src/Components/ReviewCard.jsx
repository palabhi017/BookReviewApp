import {  Divider, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ReviewCard = ({userName,review}) => {
  return (
   <VStack>
      <Text textAlign={"left"}>User Name :- {userName}</Text>
      <Text textAlign={"left"}>review:- {review}</Text>
      <Divider/>
   </VStack>
  )
}

export default ReviewCard