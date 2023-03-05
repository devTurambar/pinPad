import { useEffect, useState } from 'react';
import './App.css';
import Pad from './components/Pad'
import Screen from './components/Screen'

function App() {
  const rows = [[1,2,3],[4,5,6],[7,8,9],[0]];
  const code = "2222"

  const [input, setInput] = useState("");
  const [disabledPad, setDisabledPad] = useState(false);
  const [counter, setCounter] = useState(0);

  //Em "checkCode" estou a alterar o valor do estado "input", entao este useEffect corre outra vez se entrar nessa funcao
  useEffect(() => {
    console.log("checkCode")
    if(input.length == 4){
      checkCode();
    }
  }, [input])

  const clickButton = (buttonClicked) => {
    setInput(input+buttonClicked);
  }

  const asterize = () => {
    return input.length > 0 ? ( (["OK","NOK", "LOCKED"].includes(input)) ? input : (("*").repeat(input.length-1)+input.charAt(input.length-1))) : "";
  }

  const showMessage = () => {
    
  }

  const checkCode = () => {
    if(code == input){
      //OK
      setDisabledPad(true);
      setInput("OK");
      disablePad(1000);
    }else{
      //NOK
      setDisabledPad(true);
      if(counter == 2){
        setInput("LOCKED");
        disablePad(5000);
        setCounter(0);
      }else{
        setInput("NOK");
        disablePad(1000);
        setCounter(counter+1);
      }
    }
  }

  const disablePad = (time) => {
    setTimeout(() => {
      setInput("");
      setDisabledPad(false);
    },time);
  }

  return (
    <div className="app-container">
      <div className="app-container-pad">
        <Screen value={asterize()}>
        </Screen>
        <Pad rows={rows} disabled={true} clickButton={(buttonClicked) => clickButton(buttonClicked)} block={disabledPad}>
        </Pad>
      </div>
    </div>
  );
}

export default App;
