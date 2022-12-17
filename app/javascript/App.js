import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
    <div>
        <Routes>
            <Route path="/" element={<Greeting />} />
        </Routes>
    </div>
)

export default App;