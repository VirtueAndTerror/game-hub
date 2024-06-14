import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { FetchResponse } from '../services/api-client';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');

// static data
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    // Data will be fresh for 24hs, i.e., no request will be made to the backend to fetch the genres
    staleTime: 24 * 60 * 60 * 1000, // 24hs
    initialData: { count: genres.length, results: genres },
  });
export default useGenres;
