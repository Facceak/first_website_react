import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./home.css"


export default function Home({picture, button_value}){
    return(
        <div className="feed_site">
            <div className="top_game">
                <img className="top_game_picture" src={picture}/>
                <button className="get_button">{button_value[0]}</button>
                <button className="favorite_button">{button_value[1]}</button>
            </div>
        </div>
    );
}
