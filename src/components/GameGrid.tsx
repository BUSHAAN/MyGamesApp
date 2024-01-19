import { SimpleGrid, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { GameQuery } from "../App";
import { containerVariants } from "../animations/variants";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";


interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  
  

  if (error) return <Text>{error}</Text>;

  return (
    <AnimatePresence>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {(isLoading) &&
          skeletons.map((skeleton) => (
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="initial"
            >
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            </motion.div>
          ))}
        {data.map((game) => (
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          </motion.div>
        ))}
      </SimpleGrid>
    </AnimatePresence>
  );
};

export default GameGrid;
