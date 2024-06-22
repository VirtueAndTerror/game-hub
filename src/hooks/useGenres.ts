import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/api-client';
import genres from '../data/genres';
import { Genre } from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    // Data will be fresh for 24hs, i.e., no request will be made to the backend to fetch the genres
    staleTime: ms('24h'),
    initialData: { count: genres.length, results: genres },
  });
export default useGenres;
