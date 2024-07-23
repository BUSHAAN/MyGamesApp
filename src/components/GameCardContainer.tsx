import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <AnimatePresence>
    
      <Box borderRadius="10px" overflow="hidden">
        {children}
      </Box>
    
    </AnimatePresence>
  );
};

export default GameCardContainer;
