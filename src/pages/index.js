import { Button, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";

function Home() {
  const [auth, setAuth] = useState(false);
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

  useEffect(() => {
    const verify = async () => {
      const savedKey = localStorage.getItem("sampul-key");
      const raw = await fetch("/api/auth?key=" + savedKey);
      const { status } = await raw.json();

      if (status) {
        setAuth(true);
      } else {
        localStorage.removeItem("sampul-key");
      }
    };
    verify();
  }, []);

  if (auth) return <Dashboard />;

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

export default Home;
