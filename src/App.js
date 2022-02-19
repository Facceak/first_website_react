import './App.css';
import SideBar from './components/sidebar/SideBar';
import Home from './components/home_page/home';

export default function App() {
  return (
    <div className="App">
      
      <SideBar user_first_name={"Facce"} user_last_name={"Ak"}></SideBar>
      <div className="Feeds">
        <Home picture={require('./components/home_page/HomePageAssets/It Takes Two.png')} button_value={["INSTALL NOW","ADD FAVORITE"]}></Home>
      </div>
    </div>
  );
}
