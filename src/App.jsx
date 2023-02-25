import './App.css';
import Pad from './components/Pad'
import Screen from './components/Screen'

function App() {
  const rows = [[1,2,3],[4,5,6],[7,8,9],[0]];
  return (
    <div className="app-container">
      <div className="app-container-pad">
        <Screen value="2">
        </Screen>
        <Pad rows={rows}>
        </Pad>
      </div>
    </div>
  );
}

export default App;
