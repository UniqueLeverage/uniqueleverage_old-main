import "./private.css"
import {Outlet} from "react-router-dom";
import {Sidebar} from "../components";

const PLayout = () => {
    return (
        <div className="d-flex">
            <Sidebar/>
            <div className="the-main-content-holder d-flex flex-column vh-100 w-100">
                <Outlet/>
            </div>
        </div>
    );
}
export default PLayout;