
const getMovies = async () => {
    const url = 'https://imdb146.p.rapidapi.com/v1/find/?query=game';
    const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';
    console.log(process.env)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
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