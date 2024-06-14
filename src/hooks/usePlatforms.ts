import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { FetchResponse } from '../services/api-client';
import platforms from '../data/platforms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    // Data will be fresh for 24hs, i.e., no request will be made to the backend to fetch the genres
    staleTime: 24 * 60 * 60 * 1000, // 24hs
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
