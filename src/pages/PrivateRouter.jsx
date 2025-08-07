import {Routes, Route} from "react-router-dom";
import PLayout from "./PLayout";
import Dashboard from "./Dashboard";

const PrivateRouter = () => {
    return (
        <Routes>
            <Route element={<PLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route index path="/" element={<Dashboard/>}/>
                <Route index path="/dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
    );
}

export default PrivateRouter;