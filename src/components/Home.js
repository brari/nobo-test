import React, {Component} from 'react';
import HeaderSearchAppBar from "./HeaderSearchAppBar";
import Footer from "./Footer";
import SearchPage from "./SearchPage";

class Home extends Component {
    render() {
        return (
            <div>
                <HeaderSearchAppBar/>
                <SearchPage/>
                <Footer/>
            </div>
        );
    }
}

export default Home;