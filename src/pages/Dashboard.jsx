import {Link} from "react-router-dom";
import {PiPlusCircleBold} from "react-icons/pi";
import {TbInfoTriangle} from "react-icons/tb";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {BsCurrencyDollar, BsStars} from "react-icons/bs";
import {LuCalendarDays, LuImageOff, LuUserPlus} from "react-icons/lu";
import {FiPhone, FiSearch} from "react-icons/fi";
import {DateRangePicker} from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {useState} from "react";
import {AdsSpendAndResult, StatisticCardContent} from "../components/index.jsx";
import {IoPersonOutline} from "react-icons/io5";
import {RiCarLine} from "react-icons/ri";
import {TfiWorld} from "react-icons/tfi";
import {LiaHandsHelpingSolid} from "react-icons/lia";

const Dashboard = () => {
    const [showPicker, setShowPicker] = useState(false);
    const [dateRange, setDateRange] = useState({
        startDate: new Date('2024-09-01'),
        endDate: new Date('2024-10-01'),
        key: 'selection',
    });
    const handleSelect = (ranges) => {
        setDateRange({
            startDate: ranges.selection.startDate,
            endDate: ranges.selection.endDate,
            key: 'selection',
        });
        setShowPicker(false);
    };
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {day: '2-digit', month: 'short', year: 'numeric'});
    };

    return (
        <div className="the-main-content d-flex flex-column position-relative p-3 overflow-x-hidden">
            <div className="main-dashboard-page">
                <div className="dashboard-header mb-3">
                    <div className="d-flex align-items-center">
                        <div className="search-content col-4 me-3">
                            <div className="form-group position-relative">
                                <div className="icon-holder position-absolute top-50 translate-middle-y ms-2">
                                    <FiSearch size="20" className="gray-text-color mb-1"/>
                                </div>
                                <input
                                    type="text"
                                    className="form-control rounded-3 py-2"
                                    placeholder="Search inventory, contacts and more..."
                                    name="search"
                                    id="search"
                                />
                            </div>
                        </div>
                        <div className="ask-ai-holder">
                            <button className="ask-ai-btn bg-transparent dark-gray-text-color fw-bold-500 rounded-3">
                                <BsStars size="20" className="me-1"/>
                                Ask AI
                            </button>
                        </div>
                        <div
                            className="ms-auto bg-white py-1 px-2 rounded-3 change-period-select d-flex align-items-center">
                            <div className="border-end">
                                <select
                                    className="form-select form-select-sm border-0 dark-gray-text-color fw-bold-500">
                                    <option value="7-days">Last 7 days</option>
                                    <option value="month">Last month</option>
                                    <option value="year">Last Year</option>
                                </select>
                            </div>
                            <div
                                className="calendar-changer dark-gray-text-color small fw-bold-500 ps-3 pe-2 position-relative">
                                <span>{formatDate(dateRange.startDate)}</span>
                                <span className="px-2">-</span>
                                <span>{formatDate(dateRange.endDate)}</span>
                                <LuCalendarDays
                                    size="23"
                                    className="ms-2 c-pointer"
                                    onClick={() => setShowPicker(!showPicker)}
                                />
                                {showPicker && (
                                    <div className="position-absolute end-0 mt-2">
                                        <DateRangePicker
                                            className="border shadow-sm"
                                            ranges={[dateRange]}
                                            onChange={handleSelect}
                                            showSelectionPreview={true}
                                            moveRangeOnFirstSelection={false}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="summary-cards bg-white rounded-3 bg-white border py-3 row mx-0 mb-3">
                    <div className="col-3 box-holder px-3">
                        <div className="box-header d-flex align-items-center justify-content-between mb-3">
                            <div className="fw-bold-600 black-text-color">
                                Inventory
                            </div>
                            <div>
                                <PiPlusCircleBold size="20" className="blue-text-color c-pointer"/>
                            </div>
                        </div>
                        <div className="box-content">
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    Active Inventory
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    82
                                </div>
                            </div>
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    Sold Inventory
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    20
                                </div>
                            </div>
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    Drafts
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    20
                                </div>
                            </div>
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    Vehicles In Recon
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    1
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 box-holder px-3">
                        <div className="box-header d-flex align-items-center justify-content-between mb-3">
                            <div className="fw-bold-600 black-text-color">
                                Contacts
                            </div>
                            <div>
                                <PiPlusCircleBold size="20" className="blue-text-color c-pointer"/>
                            </div>
                        </div>
                        <div className="box-content">
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    New Leads
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    8
                                </div>
                            </div>
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    Live Charts
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    8
                                </div>
                            </div>
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    Phone Calls
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    16
                                </div>
                            </div>
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    Total Contacts
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    144
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 box-holder px-3">
                        <div className="box-header d-flex align-items-center justify-content-between mb-3">
                            <div className="fw-bold-600 black-text-color">
                                Leads Sources
                            </div>
                            <div>
                                <PiPlusCircleBold size="20" className="blue-text-color c-pointer"/>
                            </div>
                        </div>
                        <div className="box-content">
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    Facebook Ad Leads
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    8
                                </div>
                            </div>
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    Website From Fills
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    8
                                </div>
                            </div>
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    Phone Calls
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    16
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 box-holder px-3">
                        <div className="box-header d-flex align-items-center justify-content-between mb-3">
                            <div className="fw-bold-600 black-text-color">
                                Deals By Source
                            </div>
                        </div>
                        <div className="box-content">
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    Auto Trader
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    5
                                </div>
                            </div>
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    Facebook
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    9
                                </div>
                            </div>
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    CarFax
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    1
                                </div>
                            </div>
                            <div className="content-line d-flex align-items-center justify-content-between mt-2 pb-1">
                                <Link to="#" className="blue-text-color small">
                                    CarZing
                                </Link>
                                <div className="black-text-color fw-bold-600">
                                    17
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="statics-cards row gx-3">
                    <StatisticCardContent
                        title="Deals"
                        value="8"
                        status="up"
                        changedValue="+5%"
                        icon={<LiaHandsHelpingSolid size="20" className="dark-green-text-color"/>}
                    />
                    <StatisticCardContent
                        title="Appointments"
                        value="6"
                        status="up"
                        changedValue="+12.8%"
                        icon={<TfiWorld size="20" className="dark-green-text-color"/>}
                    />
                    <StatisticCardContent
                        title="Rescheduled"
                        value="2"
                        status="down"
                        changedValue="-2%"
                        icon={<IoPersonOutline size="20" className="dark-green-text-color"/>}
                    />
                    <StatisticCardContent
                        title="Phone Calls"
                        value="2"
                        status="new"
                        changedValue="1"
                        icon={<FiPhone size="20" className="dark-green-text-color"/>}
                    />
                    <StatisticCardContent
                        title="Messenger Chats"
                        value="12"
                        status="down"
                        changedValue="-2%"
                        icon={<IoPersonOutline size="20" className="dark-green-text-color"/>}
                    />
                    <StatisticCardContent
                        title="Vehicle Views"
                        value="79"
                        status="new"
                        changedValue="9"
                        icon={<RiCarLine size="20" className="dark-green-text-color"/>}
                    />
                    <StatisticCardContent
                        title="Impressions"
                        value="2,400"
                        status="down"
                        changedValue="-2%"
                        icon={<IoPersonOutline size="20" className="dark-green-text-color"/>}
                    />
                    <StatisticCardContent
                        title="Total Leads"
                        value="34"
                        status="down"
                        changedValue="-0.4%"
                        icon={<LuUserPlus size="20" className="dark-green-text-color"/>}
                    />
                </div>
                <div className="row gx-3">
                    <div className="col-7">
                        <AdsSpendAndResult/>
                    </div>
                    <div className="col-5">
                        <div className="health-holder bg-white rounded-3 bg-white border py-3 row mx-0 mb-3">
                            <div className="box-header d-flex align-items-center justify-content-between mb-4">
                                <div className="fw-bold-600 black-text-color">
                                    Inventory Health
                                </div>
                                <div className="ms-auto d-flex">
                                    <TbInfoTriangle size="20" className="yellow-text-color me-1"/>
                                    <span className="d-inline-block text-real-small me-2">
                                        3 issues
                                    </span>
                                    <AiOutlineInfoCircle size="20" className="dark-red-text-color me-1"/>
                                    <span className="d-inline-block text-real-small black-text-color">
                                        2 high priority
                                    </span>
                                </div>
                            </div>
                            <div className="box-content">
                                <div className="content-line d-flex align-items-center border-bottom pb-2 mb-3">
                                    <div className="dark-red-text-color me-3">
                                        <AiOutlineInfoCircle size="25"/>
                                    </div>
                                    <div className="me-2">
                                        <div className="fw-bold-500 black-text-color">
                                            2022 Toyota Camry
                                        </div>
                                        <div className="dark-gray-text-color small">
                                            Missing description
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <button
                                            className="bg-transparent dark-gray-text-color border rounded-3 py-1 px-2">
                                            Add Details
                                        </button>
                                    </div>
                                </div>
                                <div className="content-line d-flex align-items-center border-bottom pb-2 mb-3">
                                    <div className="yellow-text-color me-3">
                                        <BsCurrencyDollar size="25"/>
                                    </div>
                                    <div className="me-2">
                                        <div className="fw-bold-500 black-text-color">
                                            2023 Honda CR-V
                                        </div>
                                        <div className="dark-gray-text-color small">
                                            Price above market average
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <button
                                            className="bg-transparent dark-gray-text-color border rounded-3 py-1 px-2">
                                            Review Price
                                        </button>
                                    </div>
                                </div>
                                <div className="content-line d-flex align-items-center border-bottom pb-2 mb-3">
                                    <div className="dark-red-text-color me-3">
                                        <LuImageOff size="25"/>
                                    </div>
                                    <div className="me-2">
                                        <div className="fw-bold-500 black-text-color">
                                            2021 Ford F-150
                                        </div>
                                        <div className="dark-gray-text-color small">
                                            Missing Images
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <button
                                            className="bg-transparent dark-gray-text-color border rounded-3 py-1 px-2">
                                            Add Photos
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;