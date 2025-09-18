import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { containerVariants, navbarVariants } from "./animations/variants";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
          }}
        >
          <GridItem area="nav">
            <motion.div variants={navbarVariants}>
              <NavBar
                onSearch={(searchText) =>
                  setGameQuery({ ...gameQuery, searchText })
                }
              />
            </motion.div>
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              />
            </GridItem>
          </Show>
          <GridItem area="main">
            <Box paddingLeft={2} style={{ position: "relative", zIndex: 9999 }}>
              <motion.div variants={containerVariants}>
                <GameHeading gameQuery={gameQuery} />

                <HStack spacing={5} marginBottom={5}>
                  <PlatformSelector
                    selectedPlatform={gameQuery.platform}
                    onSelectedPlatform={(platform) =>
                      setGameQuery({ ...gameQuery, platform })
                    }
                  />
                  <SortSelector
                    sortOrder={gameQuery.sortOrder}
                    onSelectSortOrder={(sortOrder) =>
                      setGameQuery({ ...gameQuery, sortOrder })
                    }
                  />
                </HStack>
              </motion.div>
            </Box>
            <div style={{ position: "relative", zIndex: 1 }}>
              <GameGrid gameQuery={gameQuery} />
            </div>
          </GridItem>
        </Grid>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
