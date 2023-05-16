import Homepage from "./components/Homepage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  return (
    <ChakraProvider>
      <div>
        <Homepage />
      </div>
    </ChakraProvider>
  );
}

export default App
