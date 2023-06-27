import React from "react";
import {
  MenuButton,
  MenuList,
  MenuGroup,
  VStack,
  Text,
  
  Flex,
  Button,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa"
const Authbuttons = () => {
  return (
    <>
      
      <MenuButton >
       
      
      <Stack direction="column" w={{base:"30px",md:"40px",lg:'80px'}} alignItems="center">
      <Icon as={FaUserAlt} color={"white"} boxSize={6}></Icon>
  
             <Text display={{base:"none",md:"none",lg:"block"}} color="white">Profile</Text>
      </Stack>
      </MenuButton>
      <MenuList pb="10px" >
        <MenuGroup title="Hello User" fontSize="19px" textAlign="left">
          <VStack>
            <Text fontSize="13px" textAlign="left">
              To access your Meesho account
            </Text>

            <Link to="/login" style={{width:"100%"}}> <Button w="80%" h="45px">
               Login
            </Button></Link>
            <Link to="/adminlogin" style={{width:"100%"}}><Button w="80%" h="45px">
              Admin login
            </Button></Link>
            <Link to="/signup" style={{width:"100%"}}>  <Button w="80%" h="45px" bg="#F43397" color="#fff">
              Signup{" "}
            </Button></Link>
          </VStack>
        </MenuGroup>
      </MenuList>
    </>
  );
};

export default Authbuttons;
