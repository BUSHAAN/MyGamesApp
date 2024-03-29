import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { containerVariants } from "../animations/variants";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <Card height="100%">
          <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody>
            <HStack justifyContent="space-between" marginBottom={3}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize="2xl">
              {game.name}
              <Emoji rating={game.rating_top}></Emoji>
            </Heading>
          </CardBody>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameCard;
