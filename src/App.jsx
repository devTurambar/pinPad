import './App.css';
import Pad from './components/Pad'
import Screen from './components/Screen'

function App() {
  const rows = [[1,2,3],[4,5,6],[7,8,9],[0]];
  return (
    <div className="App">
      <Screen value="2">
      </Screen>
      {
        rows.map((row) => {
          return(
            <Pad key={row} row={row}>
            </Pad>
          )
        })
      }
    </div>
  );
}

export default App;
