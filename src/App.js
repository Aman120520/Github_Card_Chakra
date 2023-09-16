import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import GitHubCard from './GitHubCard';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <GitHubCard />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
