import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';


const Searchbar = () => {
  return (
    <Paper
      component="form"
      sx={{  }}
      className="searchbar-wrapper"
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Products"
        inputProps={{ 'aria-label': 'Search Products' }}
        className="Searchinput"
      />
      <Box className='searchbtn'>
        <SearchIcon />
      </Box>

    </Paper>
  )
}

export default Searchbar