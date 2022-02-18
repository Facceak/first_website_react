import './App.css';
import CustomButton from './components/Buttons/CustomButton';
import Pic from './components/assets/picture';
function App() {
  return (
    <div className="App">
      <div className='button_position'>
        <CustomButton value={"Ist Ein Arschloch"}></CustomButton>
      </div>
      <div className='picture'>
        <Pic></Pic>
      </div>
    </div>
  );
}

export default App;
