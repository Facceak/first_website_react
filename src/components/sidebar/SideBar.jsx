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
                <div className="side_button">

                </div>

                <div className="side_button">
                    <img className="search" src="data:image/png;base64,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" />
                </div>

                <div className="side_button">

                </div>

            </div>
            

        </div>
    );
}