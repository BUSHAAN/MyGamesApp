import {
    Box,
    Button,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
    Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <Button  variant="link" onClick={() => onSelectGenre(genre)}>
          <Box
            bg={genre.id === selectedGenre?.id ? "#2D3748" : "transparent"}
            w="180px"
            borderRadius={3}
          >
            <ListItem key={genre.id}>
              <HStack padding="5px">
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />

                <Text
                  fontSize="lg"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                >
                  {genre.slug === "massively-multiplayer"
                    ? "Multiplayer"
                    : genre.name}
                </Text>
              </HStack>
            </ListItem>
          </Box>
        </Button>
      ))}
    </List>
  );
};

export default GenreList;
