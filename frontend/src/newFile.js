import React from "react";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { root } from ".";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
