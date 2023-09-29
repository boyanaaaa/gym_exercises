import React,{ useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, textField, Typography } from '@mui/material';


function SearchExercises() {
  return (
    <Stack alignItems="center" mt="37px" justyfyContent="center" p="20px">
        <Typography fontWeight={700} sx={{fontSize: { lg: '44px', xs: '30px'}}} mb="50px" textAlign="center">
            Awesome Exercises You <br/> Should Know.
        </Typography>
        <Box position="relative" mb="72px">
            <TextField height="76px" value="" onChange={(e) => {}} placeholder="Search exercises.." type="text" 
                        sx={{input: { fontWeight: '700', border: "none", borderRadius: "40px"},
                        width: { lg: '1170px', xs: '350px'},
                        backgroundColor: "#ffff",
                        borderRadius: "40px"
                    }}/>
            <Button className="search-btn" 
            sx={{bgcolor: '#FF2625', color: '#fff', textTransform: 'none', 
            width: { lg: '175px', xs: '80px'}, 
            fontSize: { lg: '20px', sx: '14px'},
            height: '56px'}}>Search</Button>
        </Box>


    </Stack>
  )
}

export default SearchExercises