import React from "react";
import userImg from "../../resources/images/user-icon.png";

const Header = () => {
    return (
        <header>
            <div className="header_logo"><h1>React Project Management System</h1></div>
            <div className="user_info">
                <div className="user_avatar">
                    <img src={userImg} alt="user Info" />
                </div>
            </div>
        </header>
    );
}

export default Header;