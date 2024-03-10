import { Grid, GridItem, Show, Flex } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import GameGrid from "../components/GameGrid";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `'main'`,
        lg: `'aside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={3}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={3}>
        <GameHeading />
        <Flex gap={3} flexWrap="wrap">
          Grid Item Flex
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
//       <GridItem area="main" paddingX={3}>
//         <GameHeading />
//         <Flex gap={3} flexWrap="wrap">
//           <PlatformSelector />
//           <SortSelector />
//         </Flex>
//         <GameGrid />
//       </GridItem>
//     </Grid>
//   );
// };
