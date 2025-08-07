import {AiOutlineInfoCircle} from "react-icons/ai";
import {FaSortDown, FaSortUp} from "react-icons/fa6";
import {Link} from "react-router-dom";

const StatisticCardContent = ({title, value, status, changedValue, icon}) => {
    return (
        <div className="col-3 mb-3">
            <div className="box-content bg-white rounded-3 bg-white border px-3 py-2">
                <div className="box-header d-flex align-items-center justify-content-between mb-2 py-1">
                    <div
                        className="main-background-color p-2 rounded-3 d-flex justify-content-center align-items-center border"
                        style={{width: '40px', height: '40px'}}>
                        {icon}
                    </div>
                    <div>
                        <AiOutlineInfoCircle size="23" className="dark-gray-text-color"/>
                    </div>
                </div>
                <div className="box-content">
                    <div className="dark-gray-text-color text-real-small">
                        {title}
                    </div>
                    <div className="d-flex align-items-center my-1">
                        <div className="black-text-color fw-bold-600 fs-2 me-2">
                            {value}
                        </div>
                        {status === "up" ? (
                            <div className="d-flex green-light-bg rounded-3 align-items-center px-1">
                                <div className="text-real-small dark-green-text-color fw-bold-500 me-1">
                                    {changedValue}
                                </div>
                                <div className="dark-green-text-color d-flex">
                                    <FaSortUp size="15" className="mt-2"/>
                                </div>
                            </div>
                        ) : status === "down" ? (
                            <div className="d-flex red-light-bg rounded-3 align-items-center px-1">
                                <div className="text-real-small dark-red-text-color fw-bold-500 me-1">
                                    {changedValue}
                                </div>
                                <div className="dark-red-text-color d-flex">
                                    <FaSortDown size="15" className="mb-2"/>
                                </div>
                            </div>
                        ) : status === "new" ? (
                            <Link to="#" className="text-real-small blue-text-color">
                                {changedValue} <span className="d-inline-block text-decoration-none">(new)</span>
                            </Link>
                        ) : null}
                    </div>
                    <div className="dark-gray-text-color text-real-small">
                        vs prior 7 days
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticCardContent;