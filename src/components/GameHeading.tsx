import { Heading } from "@chakra-ui/react";

function GameHeading() {
  return (
    <Heading
      as="h1"
      fontSize={{
        base: "3xl",
        md: "5xl",
      }}
      wordBreak="break-all"
      marginBottom={5}
    >
      Game Heading 1
    </Heading>
  );
}

export default GameHeading;
