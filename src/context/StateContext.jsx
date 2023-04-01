import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [popular, setPopular] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [upcoming, setUpcoming] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=34bde0b4ded66317061f84431cb45591&language=en-US&page=1`
    );
    const { results } = await api.json();
    setMovie(results);
    setPopular(results);
    console.log(results);
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  const fetchUpcoming = async () => {
    const api =
      await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=34bde0b4ded66317061f84431cb45591
    `);
    const { results } = await api.json();
    setUpcoming(results);
    // console.log(results);
  };

  useEffect(() => {
    const filterMovie = movie.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setMovie(filterMovie);
  }, [search]);

  const data = {
    movie,
    setMovie,
    popular,
    setPopular,
    activeGenre,
    setActiveGenre,
    upcoming,
    setUpcoming,
    search,
    setSearch,
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
export const StateContextCustom = () => useContext(StateContext);
