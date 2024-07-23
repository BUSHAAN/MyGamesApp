import { GameQuery } from "../App";
import useData from "./useData";
import { Game } from "./useGames";




const useDetails = (gameQuery: GameQuery) => {
    return useData<Game>(
      "/games/{id}",
      {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      },
      [gameQuery]
    );
  };


export default useDetails