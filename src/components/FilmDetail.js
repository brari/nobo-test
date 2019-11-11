import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import HeaderSearchAppBar from "./HeaderSearchAppBar";
import Rating from '@material-ui/lab/Rating';
import Footer from "./Footer";
import Paper from "@material-ui/core/Paper";

class BlogPage extends Component {
    constructor(props) {
        super(props)
        console.log(JSON.parse(localStorage.getItem('film')));
    }

    render() {
        const selectedfilm = JSON.parse(localStorage.getItem('film'));
        return (
            <div>
                <HeaderSearchAppBar/>
                <Paper style={{width: "50%", display: "inline-block", padding: 60}}>
                    {selectedfilm.show.image != null ?
                        <img src={selectedfilm.show.image.original} alt={selectedfilm.show.name}
                             className="img-fluid" style={{padding: 20, height: "500px", width: "85%"}}/> :
                        <img
                            className="img-fluid"
                            src="https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1350441335.jpg"
                            alt={selectedfilm.show.name}/>
                    }
                    <br/>
                    <h2>{selectedfilm.show.name}</h2>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row"><b>Description</b></TableCell>
                                <TableCell align="left">
                                    <div dangerouslySetInnerHTML={{__html: selectedfilm.show.summary}}></div>
                                </TableCell>
                            </TableRow>
                            {selectedfilm.score != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Score</b></TableCell>
                                    <TableCell align="right">{selectedfilm.score}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.rating != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Rating</b></TableCell>
                                    <TableCell align="right">
                                        <Rating readOnly max={10} name="half-rating"
                                                value={selectedfilm.show.rating.average} precision={0.1}/>
                                    </TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.image != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>ID</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.id}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.url != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>URL</b></TableCell>
                                    <TableCell align="right"><a
                                        href={selectedfilm.show.url}>{selectedfilm.show.name}</a></TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.webChannel != null && selectedfilm.show.webChannel.name != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Web Channel</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.webChannel.name}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.type != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Type</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.type}</TableCell>
                                </TableRow> :
                                ""}

                            {selectedfilm.show.genres.length !== 0 ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Genre(s)</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.genres.map(genre => (
                                        genre + " "
                                    ))}</TableCell>
                                </TableRow> :
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Genre(s)</b></TableCell>
                                    <TableCell align="right">NaN</TableCell>
                                </TableRow>}
                            {selectedfilm.show.language != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Language</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.language}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.status != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Status</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.status}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.schedule != null && selectedfilm.show.schedule.time != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Time</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.schedule.time}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.schedule != null && selectedfilm.show.schedule.days.length !== 0 ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Day(s)</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.schedule.days.map(day => (
                                        day + " "
                                    ))}</TableCell>
                                </TableRow> :
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Day(s)</b></TableCell>
                                    <TableCell align="right">NaN</TableCell>
                                </TableRow>
                                }
                            {selectedfilm.show.network != null && selectedfilm.show.network.id != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Network ID</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.network.id}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.network != null && selectedfilm.show.network.name != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Network Name</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.network.name}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.network != null && selectedfilm.show.network.country != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Country</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.network.country.name}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.network != null && selectedfilm.show.network.country != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Country Code</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.network.country.code}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.runtime != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Runtime</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.runtime}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.premiered != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Premiered</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.premiered}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.officialSite != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Official Site</b></TableCell>
                                    <TableCell align="right"><a
                                        href={selectedfilm.show.officialSite}>{selectedfilm.show.officialSite}</a></TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.weight != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Weight</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.weight}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.externals != null && selectedfilm.show.externals.imdb != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Imdb</b></TableCell>
                                    <TableCell align="right"><a
                                        href={"https://www.imdb.com/title/" + selectedfilm.show.externals.imdb + "/"}>{selectedfilm.show.externals.imdb}</a></TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.externals != null && selectedfilm.show.externals.tvrage != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Tvrage</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.externals.tvrage}</TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.externals != null && selectedfilm.show.externals.thetvdb != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Thetvdb</b></TableCell>
                                    <TableCell align="right"><a
                                        href={"https://www.thetvdb.com/search?q=" + selectedfilm.show.externals.thetvdb + "&l=en"}>{selectedfilm.show.externals.thetvdb}</a></TableCell>
                                </TableRow> :
                                ""}
                            {selectedfilm.show.updated != null ?
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Updated</b></TableCell>
                                    <TableCell align="right">{selectedfilm.show.updated}</TableCell>
                                </TableRow> :
                                ""}
                        </TableBody>
                    </Table>
                </Paper>
                <Footer/>
            </div>
        );
    }
}

export default BlogPage;