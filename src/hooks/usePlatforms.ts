import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import platforms from '../data/platforms';
import ms from 'ms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    // Data will be fresh for 24hs, i.e., no request will be made to the backend to fetch the genres
    staleTime: ms('24h'),
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
