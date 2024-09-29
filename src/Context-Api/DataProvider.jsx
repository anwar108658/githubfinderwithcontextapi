import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from './reducer';

const CreateDataContext = createContext()

const initialState={
  inputValue:'',
  isLoading:false,
  Error:false,
  users:[],
  singleUsers:[]
}

const DataProvider = ({children}) => {
 
  const [state,dispatch] = useReducer(reducer,initialState)

   const onSearchTextHandler = async (text) => {
     dispatch({type:"LOADING"})
    if(!text == ""){
      try {
        const url = (`https://api.github.com/search/users?q=${text}&client_id=${import.meta.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        const res = await axios.get(url);
        dispatch({type:"ONE_USER",payload:res.data.items})
        // setUser(res.data.items);
        // console.log("hello",res)
      } catch (error) {
        dispatch({type:"ERROR"})
      }
    }else{
      fetchData()
    }
  }

  const fetchData = async () => {
    dispatch({type:"LOADING"})
    try {
      const url = await axios.get("https://api.github.com/users");
      dispatch({type:"GET_DATA",payload:url.data})
      // console.log(state)
    } catch (error) {
      dispatch({type:"ERROR"})
    }
  }
  useEffect(() => {
    fetchData()
  },[])

  return (
    <CreateDataContext.Provider value={{...state,dispatch,onSearchTextHandler}}>
        {children}
    </CreateDataContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(CreateDataContext)
}

export {DataProvider,useGlobalContext}
