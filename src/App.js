import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TableData from './TableData';
import TenderDetails from './TenderDetails';
import WelcomeScreen from './WelcomeScreen';

const App = () => {
  return (
    <BrowserRouter basename="/GopalSuryavanshi.github.io">
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/tender" element={<TableData />} />
        <Route path="/tender/:id" element={<TenderDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
