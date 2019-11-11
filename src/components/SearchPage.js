import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import filmAction from '../actions/FilmsAction';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import {Link} from "react-router-dom"


class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            film: null,
            searchText: ""
        };

        this.getsearchedFilms = this.getsearchedFilms.bind(this);
        this.setFilmInSession = this.setFilmInSession.bind(this);

    }

    setFilmInSession(film) {
        localStorage.setItem('film', JSON.stringify(film));
    }


    getsearchedFilms() {
        filmAction.getFilms(this.state.searchText).then(
            response => {
                this.setState({films: response.data});
            }
        )
    }

    SearchHandler(e) {
        this.setState({searchText: e.target.value});
    }

    render() {
        return (
            <div style={{paddingBottom: 50}}>
                <form noValidate autoComplete="off">
                    <br></br>
                    <h2 style={{paddingTop: 50}}>Find your film ! </h2>
                    <div>
                        <TextField
                            id="outlined-search"
                            label="Search field"
                            type="search"
                            margin="normal"
                            variant="outlined"
                            value={this.state.searchText}
                            onChange={(e) => this.SearchHandler(e)}
                            required={true}
                        />
                    </div>
                    <br/>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => this.getsearchedFilms()}
                            disabled={!this.state.searchText}
                            startIcon={<SearchIcon/>}
                        >
                            Search 
                        </Button>
                    </div>
                    <br/>

                    <div style={{width: 370, display: "inline-block"}} onClick={this.redirectToDetails}>
                        <GridList cellHeight={180}>
                            <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                                <ListSubheader component="div"></ListSubheader>
                            </GridListTile>
                            {this.state.films.map((film, index) => (
                                    <GridListTile key={index}>
                                        {
                                            film.show.image != null ?
                                                <img src={film.show.image.medium} alt={film.show.name}/> :
                                                <img
                                                    src="https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1350441335.jpg"
                                                    alt={film.show.name}/>
                                        }
                                        <Link onClick={() => this.setFilmInSession(film)} to={{pathname: '/detail'}}>
                                            <GridListTileBar title={film.show.name}/>
                                        </Link>
                                    </GridListTile>
                                )
                            )
                            }

                        </GridList>
                    </div>
                </form>

            </div>

        );
    }

}

export default SearchPage;