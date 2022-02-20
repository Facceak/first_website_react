import React from "react";
import "./GameBox.css"

export default function GameBox({game_picture, game_name}){
    return(
            <div className="game_box">
                <img className="game_picture" title={game_name} src={game_picture}/>  
                <div className="game_buttons_position">
                    <button className="game_get_button">{"INSTALL GAME"}</button>
                    <button className="game_favorite_button">{"ADD FAVORITE"}</button>  
                </div>
            </div>
    );

}