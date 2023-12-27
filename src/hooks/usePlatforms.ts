import useData from "./useData";
import { Platform } from "./useGames";



const usePlatforms = () => {
  return useData<Platform>('/platforms/lists/parents');
};

export default usePlatforms;
