import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import SingleContent from '../components/SingleContent';
import CustomPagination from '../components/CustomPagination';
import Genres from './Genres';
import useGenre from '../hooks/useGenre';
import '../style/Trending.css'

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)

    setContent(data.results)
    setNumOfPages(data.total_pages);
    // console.log(data)
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies()
    
    // eslint-disable-next-line
  }, [genreforURL, page])
  return (
    <div>
      <span className='pageTitle'>Top Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="movies">
        {content && content.map((c) =>
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type="movie"
            vote_average={c.vote_average}
          />
        )}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  )
}

export default Movies;