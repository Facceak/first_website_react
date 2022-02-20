import React from "react";
import "./home.css";
import "./css/games.css"


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
                <div className="game_box">
                    <img className="game_picture" title="GTAV" src="https://www.gameswirtschaft.de/wp-content/uploads/2020/06/Grand-Theft-Auto-V-GTA5-PS5.jpg"/>  
                    <div className="game_buttons_position">
                        <button className="game_get_button">{button_value[0]}</button>
                        <button className="game_favorite_button">{button_value[1]}</button>  
                    </div>
                </div>
                
                <div className="game_box">
                    <img className="game_picture" title="RED DEAD REDEMTION II" src="https://images.cgames.de/images/gsgp/290/red-dead-redemption-2_6080458.jpg"/>  
                    <div className="game_buttons_position">
                        <button className="game_get_button">{button_value[0]}</button>
                        <button className="game_favorite_button">{button_value[1]}</button>  
                    </div>
                </div>

                <div className="game_box">
                    <img className="game_picture" title="FORZA HORIZON 5" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1824140/ss_b5cff647600e90de8878500c01f43af4106e07f8.1920x1080.jpg?t=1641481030"/>  
                    <div className="game_buttons_position">
                        <button className="game_get_button">{button_value[0]}</button>
                        <button className="game_favorite_button">{button_value[1]}</button>  
                    </div>
                </div>
                

                <div className="game_box">
                    <img className="game_picture" title="FIFA 22" src="https://i0.wp.com/www.fettspielen.de/wp-content/uploads/2021/12/Hier-sind-die-besten-Formationen-in-FIFA-22.jpg?w=1920&ssl=1"/>  
                    <div className="game_buttons_position">
                        <button className="game_get_button">{button_value[0]}</button>
                        <button className="game_favorite_button">{button_value[1]}</button>  
                    </div>
                </div>

                <div className="game_box">
                    <img className="game_picture" title="MINECRAFT" src="https://i.stack.imgur.com/dqVlX.png"/>  
                    <div className="game_buttons_position">
                        <button className="game_get_button">{button_value[0]}</button>
                        <button className="game_favorite_button">{button_value[1]}</button>  
                    </div>
                </div>
                
                <div className="game_box">
                    <img className="game_picture" title="MINECRAFT" src="https://cerealkillerz.org/wp-content/uploads/2021/06/Rift-Apart.png"/>  
                    <div className="game_buttons_position">
                        <button className="game_get_button">{button_value[0]}</button>
                        <button className="game_favorite_button">{button_value[1]}</button>  
                    </div>
                </div>

                
            </div>

        </div>
    );
}
