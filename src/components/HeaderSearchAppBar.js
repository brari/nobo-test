import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <AppBar position="fixed" > 
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        <Link to={{pathname: '/'}}>
                            <img src="https://nobo.life/img/nobo/logo/logo-popup-250x150.png"
                                 style={{width: 100, height: 70, paddingLeft: 50}} alt="logo nobo"/>
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;