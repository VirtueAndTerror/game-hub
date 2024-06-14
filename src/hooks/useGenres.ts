import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    // Data will be fresh for 24hs, i.e., no request will be made to the backend to fetch the genres
    staleTime: 24 * 60 * 60 * 1000, // 24hs
    initialData: { count: genres.length, results: genres },
  });
export default useGenres;
