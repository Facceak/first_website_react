import './App.css';
import SideBar from './components/sidebar/SideBar';
import Home from './components/home_page/home';
import Header from './components/header/header';


export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home picture={require('./components/home_page/HomePageAssets/It Takes Two.png')} button_value={["INSTALL GAME","ADD FAVORITE"]} info={["It Takes Two", information]}></Home>
      <SideBar user_first_name={"Facce"} user_last_name={"Ak"}></SideBar>
    </div>
  );
}

var information = "Begib dich in It Takes Two – einem genreübergreifenden Plattformer-Adventure mit purer Koop-Ausrichtung – auf die verrückteste Reise deines Lebens. Spielt zusammen als Cody und May, ein Paar mit Konfliktpotenzial, das durch einen Zauberspruch in Puppen verwandelt wurde."