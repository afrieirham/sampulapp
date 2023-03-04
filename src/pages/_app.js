import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/auth";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
        </Head>
        <Component {...pageProps} />
        <Navbar />
      </AuthProvider>
    </ChakraProvider>
  );
}
