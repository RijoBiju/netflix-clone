const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
  fetchTVShows: `https://api.themoviedb.org/3tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,

  fetchComedy: `https://api.themoviedb.org/3discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`,
  fetchAction: `https://api.themoviedb.org/3discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=28`,
  fetchDocumentaries: `https://api.themoviedb.org/3discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=99`,
  fetchHorror: `https://api.themoviedb.org/3discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=27`,
};

export default requests;
