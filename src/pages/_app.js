import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/auth";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
        <Navbar />
      </AuthProvider>
    </ChakraProvider>
  );
}
