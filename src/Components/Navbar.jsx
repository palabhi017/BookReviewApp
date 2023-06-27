import { CiSearch } from "react-icons/ci";

import {BiLibrary} from "react-icons/bi"
// import SearchCard from "../SearchCard";

import { AiOutlineShoppingCart, AiOutlineMobile } from "react-icons/ai";


import {
  Box,
 Flex,
 HStack,
 Icon,
 Menu,
 Text,
 VStack,
} from "@chakra-ui/react";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Avatars from "./Avatars";
import Authbuttons from "./Authbuttons";

const Navbar = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const name = useSelector((state) => state.authReducer.userData.name);
 console.log(name)
  const login = useSelector((state) => state.authReducer.isAuth);
  const [searchData, setSearchData] = useState([]);

  const handleSearch = async () => {
    try {
      let res = await fetch(
        `https://onestoredata.onrender.com/products?q=${searchInput}`
      );
      let data = await res.json();
      setSearchData(data);
      if (searchInput === "") {
        setSearchData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const doSomeMagic = (fn, d) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
      }, d);
    };
  };
  const debFunction = doSomeMagic(handleSearch, 500);

  const handleInput = () => {
    setSearchInput("");
  };
  return (
    <>
    <HStack w="100vw" h="10vh" bgColor={"#10b3ff"} justifyContent={"space-between"} p="0px 20px">
      <Link to='/' style={{width:"30%"}}><Box w={{base:"80%",md:"80%",lg:"10%"}} >
        <Text fontSize={"2em"} fontWeight={"bold"} color="white">BS</Text>
      </Box></Link>
      <HStack w={{base:"30%",md:"20%",lg:"15%"}} gap="30px">
       <Menu>
              <Flex direction="column" alignItems="center">
                
                {login? <Avatars name={name} /> : <Authbuttons />}
              </Flex>
            </Menu>
        <Link to='/library'><VStack>
          <Icon as={BiLibrary} color={"white"} boxSize={7}></Icon>
          <Text display={{base:"none",md:"none",lg:"block"}} color="white">Library</Text>
        </VStack></Link>
      </HStack>
    </HStack>
    </>
  );
};

export default Navbar;
