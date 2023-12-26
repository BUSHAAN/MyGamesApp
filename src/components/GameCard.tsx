import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PLatformIconList from "./PLatformIconList";


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        
        <PLatformIconList platforms={game.parent_platforms.map(p=> p.platform)}/>
        
      </CardBody>
    </Card>
  );
};

export default GameCard;
