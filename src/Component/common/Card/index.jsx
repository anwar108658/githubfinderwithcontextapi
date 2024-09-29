import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'

const index = ({data}) => {
    console.log(data)
  return (
    <Card sx={{boxShadow:"2px 2px 10px 3px #ccc"}}>
        <Stack sx={{maxWidth:"250px"}}>
            <Box src={data.avatar_url} component="img"></Box>
            <Stack padding=".5rem">
                <Typography color='green'>Name: {data.login}</Typography>
                <Typography>UserId: {data.id}</Typography>
                <Typography><Box href={data.html_url} target='_blank' component="a">{data.html_url}</Box></Typography>
            </Stack>
        </Stack>
    </Card>
  )
}

export default index
