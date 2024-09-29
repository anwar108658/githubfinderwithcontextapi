import React from 'react'

const reducer = (state,action) => {
  switch (action.type) {
    case "LOADING":
        return{
            ...state,
            isLoading:true,
            Error:false,
            users:[]
        }
        break;
        case "GET_DATA":
            return{
                ...state,
                users:action.payload,
                isLoading:false,
                Error:false,
            }
            break;
        case "ONE_USER":
            return{
                ...state,
                users:action.payload,
                isLoading:false,
                Error:false,
            }
            break;
        case "ERROR":
            return{
                ...state,
                singleUsers:action.payload,
                isLoading:false,
                Error:true,
            }
            break;
    default:
        return state
        break;
  }
}
export default reducer