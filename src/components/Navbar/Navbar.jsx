import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import logo from "../../assets/creditcard.png";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles.js";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography  component={ Link} to="/"variant= "h6" className={classes.title} color="inherit">
                        <img src={ logo} alt="Shopfare" height="25px" className={classes.image} />
                        Shopfare
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === "/" && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" area-label="Show Cart Items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary" >
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>)}
                </Toolbar>
            </AppBar>
            
        </>
    )
}
export default Navbar;