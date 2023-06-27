import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import axios from 'axios'
const Logs = () => {
const [allLogs,setLogs] = useState([])
    const getAllLogs= async()=>{
        try {
            let res = await axios.get(`https://gifted-fox-sneakers.cyclic.app/log`)
            setLogs(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getAllLogs()
    },[])
  return (
    <>
    <Heading>Logs</Heading>
    <TableContainer>
  <Table variant='simple'>
  
    <Thead>
      <Tr>
        <Th>BookID</Th>
        <Th>Previous Title</Th>
        <Th >New Title</Th>
        <Th>Previous Image</Th>
        <Th >New Image</Th>
        <Th>Previous category</Th>
        <Th >New category</Th>
      </Tr>
    </Thead>
    <Tbody>
      {allLogs.length>0 && allLogs.map((e)=> {
        return (
            <Tr>
            <Td>{e._id}</Td>

            <Td>{e.previousData.title}</Td>
            <Td>{e.newData.title}</Td>
            <Td>{e.previousData.image}</Td>
            <Td>{e.newData.image}</Td>
            <Td>{e.previousData.category}</Td>
            <Td>{e.newData.category}</Td>
          </Tr>
        )
      })}
     
     
    </Tbody>
    
  </Table>
</TableContainer>
    </>
  )
}

export default Logs