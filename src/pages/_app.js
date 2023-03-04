import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../context/auth";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}
