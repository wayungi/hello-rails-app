import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
    <div>
        <h2 className='h2'>Refresh page to display random message</h2>
        <Routes>
            <Route path="/" element={<Greeting />} />
        </Routes>
    </div>
)

export default App;