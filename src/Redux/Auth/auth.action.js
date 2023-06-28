import { useToast } from "@chakra-ui/react"
import { handleSignup } from "./auth.api"
import * as types from "./auth.types"



export const authSuccess = (payload)=> async(dispatch)=>{
    dispatch({type:types.AUTH_LOADING})
  try {
    let userDetails = await handleSignup(payload)
    if(userDetails.user){
      dispatch({type:types.AUTH_SUCCESS,payload:userDetails.user})
      localStorage.setItem("userId",JSON.stringify(userDetails.user))
      localStorage.setItem("token",userDetails.token)
    }
  } catch (error) {
     dispatch({type:types.AUTH_ERROR})
  }   
 }