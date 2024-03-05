import React from 'react';
import './App.css';
import {Card} from "./components/Card/Card";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
        <Box>
            <Card/>
            <Card/>
            <Card/>
        </Box>
    </div>
  );
}

export default App;

export const Box = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`
