import axios from 'axios'

const FILMS_API_URL = 'https://api.tvmaze.com/search/shows?q='

class FilmAction {
    getFilms(search) {
        var headers = {
            'Content-Type': 'application/json'
        };
        console.log("get films action ")
        return axios.get(FILMS_API_URL + search,
            {
                headers: headers
            }
        );
    }
}
export default new FilmAction();