import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCard from "./GameCard";

const GameGrid = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        "2xl": 4,
      }}
      spacing={5}
      marginY={25}
    >
      {skeletons.map((skeleton) => (
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
        </GameCardContainer>
      ))}

      {/* <GameCardContainer key={game.id}>
        <GameCard game={}} />
      </GameCardContainer> */}
    </SimpleGrid>
  );
};

export default GameGrid;
