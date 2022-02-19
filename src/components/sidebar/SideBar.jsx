import React from "react";
import "./SideBar.css";

export default function SideBar(){
    return(
        <div className="container">
            <div className="account">
                <div className="profil_picture">
                    <img className="user_picture" src={require('./SideBarAssets/Kopf.png')} />
                </div>
            </div>
            <div className="button_position">
                <div className="side_button"></div>

                <div className="side_button"></div>

                <div className="side_button"></div>

            </div>
            

        </div>
    );
}