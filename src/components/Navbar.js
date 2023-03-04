import { Box, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

function Navbar() {
  const { auth } = useContext(AuthContext);
  if (!auth) return null;
  return (
    <Box position="fixed" bottom="0" w="full" bg="messenger.500" p="2">
      <Flex
        maxW="sm"
        mx="auto"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Button
          as={Link}
          href="/"
          color="white"
          variant="ghost"
          w="full"
          colorScheme="messenger"
        >
          Home
        </Button>
        <Button
          as={Link}
          href="/add"
          color="white"
          variant="ghost"
          w="full"
          colorScheme="messenger"
        >
          Add
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
