import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { Marchandise } from '../../../data/Header'



const Merchandies = () => {
    return (
        <>
            <Box className='marchandise'>
                <Typography className='Heading' >Official Marchandise</Typography>
                <Box className='marchandise-image-container'>
                    {
                        Marchandise.map((marchandise, index) => (
                            <Link to="#">
                            <img key={index} src={marchandise.image} className="marchandise-image" alt="official merchandise" />
                            </Link>
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default Merchandies