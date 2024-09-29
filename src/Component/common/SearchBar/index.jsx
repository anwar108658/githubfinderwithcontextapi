import { Search } from '@mui/icons-material'
import {useGlobalContext} from "../../../Context-Api/DataProvider"
import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const index = () => {
    const {dispatch,onSearchTextHandler} = useGlobalContext();
    const [value,setValue] = useState("")

    const textChangeHandler = (e) => {
        setValue(e.target.value)
        setValue("")
    }
    const searchHandle = () => {
        onSearchTextHandler(value)
    }
  return (
    <>
        <Box>
            <Stack direction="row">
                <TextField type='text' value={value} onChange={textChangeHandler} label="Search" sx={{width:"700px"}}/>
                <Button variant='contained' onClick={searchHandle}><Search/></Button>
            </Stack>
        </Box>
    </>
  )
}

export default index
