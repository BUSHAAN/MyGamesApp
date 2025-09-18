import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { containerVariants } from "../animations/variants";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { useState } from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="initial"
        style={{ position: "relative" }}
      >
        <Card
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "350px",
            height: "fit-content",
          }}
        >
          <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody>
            <HStack justifyContent="space-between" marginBottom={3}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <HStack>
                <Emoji rating={game.rating_top}></Emoji>
                <CriticScore score={game.metacritic} />
              </HStack>
            </HStack>
            <Heading fontSize="2xl">{game.name}</Heading>
          </CardBody>
        </Card>
      </motion.div>
      {isHovered && (
        <Card
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: "absolute", top: 0, left: 0,width: "100%" }}
        >
          <div style={{ position: "relative" }}>
            {isImageLoading && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                }}
              >
                <Spinner />
              </div>
            )}
            <Image
              onLoad={() => setIsImageLoading(false)}
              src={getCroppedImageUrl(
                game.short_screenshots.slice(1)[hoveredImageIndex].image
              )}
              style={{
                opacity: isImageLoading ? 0 : 1,
                transition: "opacity 0.3s ease-in-out",
                width: "100%",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "5px",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              {game.short_screenshots.slice(1).map((screenshot, index) => (
                <div
                  key={screenshot.id}
                  onMouseEnter={() => {
                    setIsImageLoading(true);
                    setHoveredImageIndex(index);
                  }}
                  style={{
                    width: "20px",
                    borderRadius: "2px",
                    height: "5px",
                    backgroundColor:
                      index === hoveredImageIndex ? "#fefefe" : "gray",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>
          <CardBody>
            <HStack justifyContent="space-between" marginBottom={3}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <HStack>
                <Emoji rating={game.rating_top}></Emoji>
                <CriticScore score={game.metacritic} />
              </HStack>
            </HStack>
            <Heading fontSize="2xl">{game.name}</Heading>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              marginTop={3}
            >
              <Text fontSize="sm" color={"gray.500"}>
                Release Date:{" "}
              </Text>
              <Text fontSize="sm">{game.released}</Text>
            </HStack>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#424840",
                margin: "10px 0",
              }}
            />
            <HStack justifyContent="space-between">
              <Text fontSize="sm" color={"gray.500"}>
                Genres:{" "}
              </Text>
              <Text fontSize="sm">
                {game.genres.map((genre) => genre.name).join(", ")}
              </Text>
            </HStack>
          </CardBody>
        </Card>
      )}
    </AnimatePresence>
  );
};

export default GameCard;
