import { Box, Grid, Divider, useMediaQuery, ClickAwayListener } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../../Images/logo.png'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import Merchandies from './Merchandies'
import { Categories } from '../../../data/Header'




const Header = () => {

    const [active, setActive] = useState(false)
    const [subCat, setSubCat] = useState()
    const Mobile = useMediaQuery('(max-width:600px)');
    const showDropdown = (cat) => {
        const subcat = Categories.filter((subcat) => subcat.name == cat)
        setActive(true);
        console.log(subcat)
    }
    

    const hideDropdown = () => { setActive(false) }

    return (
        <>
            <Box className='Header'>
                <Box className='upper-header'>
                    <Grid container className='gridcenter'>
                        <Grid item xs={10}>
                            <Grid container >
                                <Grid className='logo' item xs={6} sm={2.5} md={4}>
                                    <Link className='links'>
                                        <img src={logo} alt="theclecostore-logo" />
                                    </Link>
                                </Grid>
                                {
                                    Mobile ? "" : (
                                        <Grid className='searchbar' item sm={6} md={4}>
                                            <Searchbar />
                                        </Grid>
                                    )
                                }
                                <Grid className='icons-links' item xs={6} sm={3.5} md={4}>
                                    <Link className='links icons-link' to="#">
                                        <FavoriteBorderIcon />
                                    </Link>
                                    <Link className='links icons-link' to="#">
                                        <ShoppingBasketIcon />
                                    </Link>
                                    <Link className='links icons-link' to="#">
                                        <PersonIcon />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Divider variant="middle" className='divider' />


                <Box className='lower-header'>
                    <Grid container className='gridcenter'>
                        <Grid item xs={12}>
                            {
                                Mobile ? (<>
                                    <Grid className='searchbar' item xs={12}>
                                        <Searchbar />
                                    </Grid></>
                                ) : (
                                    <>
                                        <Grid container >
                                            <Grid className='nav-links' item xs={12}>
                                                {
                                                    Categories.map((cat, index) => (
                                                        <Link className='links navbar-links' to={cat.link} onMouseEnter={() => showDropdown(cat.name)} >
                                                            {cat.name}
                                                        </Link>
                                                    ))
                                                }
                                            </Grid>
                                        </Grid></>)
                            }
                        </Grid>
                    </Grid>
                </Box>
                {
                    Mobile ? "" : (
                        <ClickAwayListener onClickAway={hideDropdown}>
                            <Box className='Header-Department' sx={{ display: active ? "block" : "none" }}>
                                <Grid container className='gridcenter'>
                                    <Divider variant="middle" className='divider' />
                                    <Grid item sm={12} md={10}>
                                        <Grid container >
                                            <Grid item xs={6}>
                                                <ul>
                                                   <li>abcd</li>
                                                </ul>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Merchandies />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ClickAwayListener>
                    )
                }
            </Box>
        </>
    )
}

export default Header