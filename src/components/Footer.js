import React, {Component} from 'react';

class Footer extends Component {

    render() {
        const style = {
            position: 'absolute',
            width: '100%',
            paddingTop: '15vh',
            background: '#424f95' 
        
        };
        return (
            <footer style={style} ><h1>Copyright © 2019 All rights reserved.</h1><br/> <br/> <h3>Hand-crafted By OUSSAMA IBRARI & made for NOBO-TEST
            </h3>                
            </footer>
        );
    }
}

export default Footer;