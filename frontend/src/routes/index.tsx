import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";

import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import ReportControl from "../pages/ReportControl";

const RoutesIndex = () => {
    return (
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/dash" element={<Dashboard/>}/>
                    <Route path="/report/:id" element={<ReportControl />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default RoutesIndex;