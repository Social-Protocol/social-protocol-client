import HeaderBar from './Components/HeaderBar/HeaderBar.js'
import Grid from './Components/Grid/Grid.js'
import UserBar from './Components/UserBar/UserBar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <UserBar/>
      <Grid/>
    </div>
  );
}

export default App;
