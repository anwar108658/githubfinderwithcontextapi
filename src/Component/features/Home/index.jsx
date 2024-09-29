import { Button, Container, Stack } from '@mui/material'
import SearchBar from "../../common/SearchBar"
import Card from "../../common/Card"
import React from 'react'
import {useGlobalContext} from "../../../Context-Api/DataProvider"

const index = () => {

  const state = useGlobalContext()


  // console.log(state)

  return (
    <Container sx={{padding:"1rem"}}>
      <SearchBar/>
        <Stack direction="row" justifyContent="space-evenly" gap="1rem" flexWrap="wrap" sx={{padding:"1rem 0"}}>
        {
          state.users && state.users.length > 0?
          state.users.map((items) => (
            <Card key={items.id} data={items}/>
          )):<h1>loading</h1>
        }
        </Stack>
    </Container>
  )
}

export default index
