import React, { useContext } from "react";
import Link from "next/link";
import { Box, Button, HStack } from "@chakra-ui/react";

import { AuthContext } from "../context/auth";

function Navbar() {
  const { auth } = useContext(AuthContext);
  if (!auth) return null;
  return (
    <Box position="fixed" bottom="0" w="full" p="2" pb="6" bg="black">
      <HStack
        maxW="sm"
        mx="auto"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Button
          as={Link}
          href="/"
          variant="ghost"
          w="full"
          color="white"
          _hover={{ color: "black", bg: "gray.50" }}
          _active={{ color: "black", bg: "gray.50" }}
          size="lg"
        >
          Home
        </Button>
        <Button
          as={Link}
          href="/add"
          variant="ghost"
          w="full"
          color="white"
          _hover={{ color: "black", bg: "gray.50" }}
          _active={{ color: "black", bg: "gray.50" }}
          size="lg"
        >
          Add
        </Button>
      </HStack>
    </Box>
  );
}

export default Navbar;
