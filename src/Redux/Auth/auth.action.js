import { handleSignup } from "./auth.api"
import * as types from "./auth.types"

export const authSuccess = (payload)=> async(dispatch)=>{
    dispatch({type:types.AUTH_LOADING})
  try {
    let userDetails = await handleSignup(payload)
    dispatch({type:types.AUTH_SUCCESS,payload:userDetails})
  } catch (error) {
     dispatch({type:types.AUTH_ERROR})
  }   
 }