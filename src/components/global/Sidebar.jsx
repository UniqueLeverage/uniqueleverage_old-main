import {NavLink} from "react-router-dom";
import mainLogo from "../../assets/logoLandscape.png"
import companyLogo from "../../assets/autoDealerEx1.png"
import userProfile from "../../assets/profileUserEx1.jpg"
import {LuLayoutDashboard} from "react-icons/lu";
import {RiChatSmile2Line, RiDashboard3Line, RiShoppingBag2Line} from "react-icons/ri";
import {TbUsers} from "react-icons/tb";
import {HiOutlineSpeakerphone} from "react-icons/hi";
import {FaChevronRight, FaRegUser} from "react-icons/fa";
import {BsThreeDots} from "react-icons/bs";

const Sidebar = () => {
    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <LuLayoutDashboard size="23"/>
        },
        {
            path: "/inventory",
            name: "Inventory",
            icon: <RiDashboard3Line size="23"/>
        },
        {
            path: "/ads-manager",
            name: "Ads Manager",
            icon: <HiOutlineSpeakerphone size="23"/>
        },
        {
            path: "/contacts",
            name: "Contacts",
            icon: <FaRegUser size="23"/>
        },
        {
            path: "/live-chat",
            name: "Live Chat",
            icon: <RiChatSmile2Line size="23"/>
        },
        {
            path: "/fb-marketplace",
            name: "FB Marketplace",
            icon: <RiShoppingBag2Line size="23"/>
        },
        {
            path: "/team",
            name: "Team",
            icon: <TbUsers size="23"/>
        }
    ]

    return (
        <div className="the-main-sidebar position-fixed top-0 start-0 d-none d-lg-block">
            <div className="h-100 d-flex flex-column pb-3 overflow-y-auto sidebar-content">
                <div className="sidebar-logo-holder pt-3 pb-2">
                    <div className="logo-holder d-flex align-items-center justify-content-center h-100">
                        <img src={mainLogo} alt="Unique Leverage" className="logo-img"/>
                    </div>
                </div>
                <div className="sidebar-company-holder py-4 px-3">
                    <div className="d-flex align-items-center">
                        <div className="img-holder">
                            <img width="30" height="30" src={companyLogo} alt="company logo"
                                 className="object-fit-cover rounded-circle"/>
                        </div>
                        <div className="company-name small fw-bold-600 ps-2 black-text-color">
                            Tac Auto Trades
                        </div>
                        <div className="ms-auto">
                            <BsThreeDots size="20" className="c-pointer"/>
                        </div>
                    </div>
                </div>
                <div className="sidebar-links p-3">
                    {
                        menuItem.map((item, index) => (
                            <div className="nav-link mt-2 list-unstyled align-items-center" key={index}>
                                <div className="menu-item">
                                    <NavLink to={item.path} key={index}
                                             className="nav-link-item rounded-3 d-flex align-items-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            {item.icon}
                                        </div>
                                        <div className="nav-text" style={{marginBottom: "0.5px"}}>{item.name}</div>
                                    </NavLink>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-auto">
                    <div className="spend-content px-3 pb-4">
                        <div className="fw-bold-600 black-text-color mb-1">
                            Spend
                        </div>
                        <div className="text-real-small gray-text-color mb-2">
                            Resets 9 Sept, 2024
                        </div>
                        <div className="progress rounded-3" role="progressbar" aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar rounded-3" style={{width: "25%"}}></div>
                        </div>
                        <div className="small gray-text-color fw-bold-600 mt-1">
                            $321,900/$3M
                        </div>
                    </div>
                    <div className="user-content py-4 px-2">
                        <div className="d-flex align-items-center">
                            <div className="img-holder">
                                <img width="30" height="30" src={userProfile} alt="user name"
                                     className="object-fit-cover rounded-circle"/>
                            </div>
                            <div className="user-info ps-1">
                                <div className="user-name small fw-bold-600 black-text-color">
                                    Chris Hilgeman
                                </div>
                                <div className="user-email text-real-small gray-text-color">
                                    chrishilgeman1@gmail.com
                                </div>
                            </div>
                            <div className="ms-auto">
                                <FaChevronRight size="13" className="c-pointer gray-text-color"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;