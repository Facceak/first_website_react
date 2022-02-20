import React from "react";
import "./home.css";
import "./css/games.css";
import GameBox from "../game/GameBox";


export default function Home({picture, button_value, info}){
    return(
        <div className="feed_site">
            <div className="top_game">
                <img className="top_game_picture" src={picture} />
                <div className="buttons_position">
                    <button className="get_button">{button_value[0]}</button>
                    <button className="favorite_button">{button_value[1]}</button>
                </div>
                <div className="top_game_information">
                    <h1 className="top_game_title">{info[0]}</h1>
                    <p>{info[1]}</p>
                </div>
            </div>
            <div className="game_list">
                <GameBox game_picture={"https://www.gameswirtschaft.de/wp-content/uploads/2020/06/Grand-Theft-Auto-V-GTA5-PS5.jpg"} game_name={"GTA V"}></GameBox>
                <GameBox game_picture={"https://images.cgames.de/images/gsgp/290/red-dead-redemption-2_6080458.jpg"} game_name={"RED DEAD II"}></GameBox>
                <GameBox game_picture={"https://cdn.cloudflare.steamstatic.com/steam/apps/1824140/ss_b5cff647600e90de8878500c01f43af4106e07f8.1920x1080.jpg?t=1641481030"} game_name={"FORZA HORIZON 5"}></GameBox>
                <GameBox game_picture={"https://i0.wp.com/www.fettspielen.de/wp-content/uploads/2021/12/Hier-sind-die-besten-Formationen-in-FIFA-22.jpg?w=1920&ssl=1"} game_name={"FIFA 22"}></GameBox>
                <GameBox game_picture={"https://i.stack.imgur.com/dqVlX.png"} game_name={"MINECRAFT"}></GameBox>
                <GameBox game_picture={"https://cerealkillerz.org/wp-content/uploads/2021/06/Rift-Apart.png"} game_name={"RATCHET AND CLANK"}></GameBox>
            </div>
        </div>
    );
}
