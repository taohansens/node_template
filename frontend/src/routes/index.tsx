import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";

import Home from "../pages/Home";
import About from "../pages/About";

const RoutesIndex = () => {
    return (
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default RoutesIndex;