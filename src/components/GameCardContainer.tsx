import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box display="flex" borderRadius={10} width="100%" overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;
