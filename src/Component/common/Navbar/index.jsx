import { GitHub } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <Box component="header" sx={{
      backgroundColor:"royalblue"
    }}>
      <Container sx={{padding:".5rem",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",color:"white"}}>
          <Stack direction="row" alignItems="center" gap=".5rem">
            <GitHub sx={{fontSize:"3rem"}}/>
            <Typography variant="h5" sx={{fontWeight:"600"}}>Github Finder</Typography>
          </Stack>
          <Typography variant="h5" sx={{cursor:"pointer"}}>About</Typography>
      </Container>
    </Box>
  );
};

export default index;
