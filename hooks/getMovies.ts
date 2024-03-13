
const getMovies = async () => {
    const url = 'https://imdb146.p.rapidapi.com/v1/find/?query=game';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7efa13f128msh7465af97cb3ff16p1aaf50jsna66fb787fbf7',
            'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
        }
    };


    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export default getMovies;