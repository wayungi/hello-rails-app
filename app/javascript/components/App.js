import React from 'react';
import Greeting from './Greeting';
import { Route, Routes, Link } from "react-router-dom"

const App = () => (
    <>
      <Routes>
        <Route path="/greetings/show" element={<Greeting />} />
      </Routes>
    </>
);

export default App;