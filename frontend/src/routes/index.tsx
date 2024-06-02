import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";

import Home from "../pages/Home";

const RoutesIndex = () => {
    return (
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default RoutesIndex;