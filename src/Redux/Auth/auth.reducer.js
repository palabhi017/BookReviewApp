import * as types from "./auth.types"

let initialState={
    isLaoding:false,
    isError:false,
    isAuth: false,
    userData: {},
    
}


export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
       case types.AUTH_LOADING:
           return {...state,isLoading:true}
       case types.AUTH_SUCCESS:
           return {...state,isLoading:false,isAuth:true,userData:payload}
       case types.AUTH_ERROR:
           return {...state,isError:true,isLoading:false}
       case types.AUTH_LOGOUT:
               return {...state,isAuth:false,userData:{}}
       default:
           return state;
    }
   
   }