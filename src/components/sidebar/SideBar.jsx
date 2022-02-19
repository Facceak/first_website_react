import React from "react";
import "./SideBar.css";


export default function SideBar({user_first_name, user_last_name}){
    return(
        <div className="container">
            <div className="account">
                <div className="profil_picture">
                    <img className="user_picture" src={require('./SideBarAssets/Kopf.png')} />
                </div>
                <div className="user_name">
                    <p className="user_name_value">{user_first_name + "_" + user_last_name}</p>
                </div>
                <div className="options_position">
                    <div className="options"></div>
                    <div className="options"></div>
                    <div className="options"></div>
                </div>
            </div>
            <div className="menu">
                <p className="title">MENU</p>
                <div className="side_button">
                    <p className="button_value">Home</p>
                </div>
                <div className="side_button">
                    <p className="button_value">Favorites</p>
                </div>
                <div className="side_button">
                    <p className="button_value">My Card</p>
                </div>
            </div>
            

        </div>
    );
}