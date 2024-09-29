import { Email, GitHub, Phone } from '@mui/icons-material'
import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const index = () => {
  return (
    <Box component="footer" sx={{
      backgroundColor:"#414141"
    }}>
      <Container sx={{padding:".5rem",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",color:"white"}}>
          <Stack direction="row" alignItems="center" gap=".5rem">
            <Typography variant="body1" >@{new Date().getFullYear()} all right reserve <GitHub/> github finder community</Typography>
          </Stack>
          <Stack gap=".3rem">
            <Stack direction="row" justifyContent="start">
              <Phone/>
              <Typography variant="body1">+92 999 99999</Typography>
            </Stack>
            <Stack direction="row" justifyContent="start">
              <Email/>
              <Typography variant="body1">ـــGitHub@gmail.com</Typography>
            </Stack>
          </Stack>
      </Container>
    </Box>
  )
}

export default index
