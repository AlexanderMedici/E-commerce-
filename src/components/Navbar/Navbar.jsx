import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import logo from "../../assets/creditcard.png";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles.js";


 const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant= "h6" className={classes.title} color="inherit">
                        <img src={ logo} alt="Shopfare" height="25px" className={classes.image} />
                        Shopfare
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton area-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={2} color="secondary" >
                            <ShoppingCart />
                            </Badge>
                        </IconButton>
                        </div>
                </Toolbar>
            </AppBar>
            
        </>
    )
}
export default Navbar;