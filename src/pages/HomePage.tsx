import { Grid, GridItem, Show, Flex } from "@chakra-ui/react";
import GenreList from "../components/GenreList";

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
        <Flex gap={3} flexWrap="wrap">
          Grid Item Flex
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
/* <Show above="lg">
  <GridItem area="aside" paddingX={3}>
    <GenreList />
  </GridItem>
</Show>; */
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
