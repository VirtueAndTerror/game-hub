import useGenres from './useGenres';
const useGenre = (id?: number) => {
  const {
    data: { results: genres },
  } = useGenres();
  return genres.find((g) => g.id === id);
};

export default useGenre;
