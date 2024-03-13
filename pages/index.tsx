import React, {useState,useEffect} from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import getMovies from '@/hooks/getMovies';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);


  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Home = () => {
  const [myMovies, setMyMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await getMovies();
      setMyMovies(fetchedMovies);
    };

    fetchMovies();
  }, []); // Empty dependency array means this effect runs once on mount

  console.log("Movies:", myMovies);

  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const {isOpen, closeModal} = useInfoModalStore();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  )
}

export default Home;
