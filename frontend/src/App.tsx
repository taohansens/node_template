import React from 'react';
import {Container} from '@mui/material';
import {ToastContainer} from 'react-toastify';

import RoutesIndex from "./routes/";

function App() {
    return (
        <>
            <RoutesIndex/>
            <ToastContainer/>
        </>
    );
}

export default App;
