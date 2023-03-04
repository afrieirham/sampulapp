import React, { useContext, useState } from "react";
import { Button, Input, VStack } from "@chakra-ui/react";
import { AuthContext } from "../context/auth";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const [input, setInput] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const raw = await fetch("/api/auth?key=" + input);
    const { status } = await raw.json();

    if (status) {
      localStorage.setItem("sampul-key", input);
      setAuth(true);
    }

    setInput("");
  };

  return (
    <VStack
      as="form"
      h="100vh"
      w="100vw"
      justifyContent="center"
      px="4"
      onSubmit={onSubmit}
    >
      <Input
        name="key"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit" w="full">
        Submit
      </Button>
    </VStack>
  );
}

export default Login;
