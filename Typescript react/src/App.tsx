import './App.css';
import { Persona } from "./Hooks";


function App() {

  return (
    <>
      <Persona nombre={"Pedro"} edad={22} isMarried={false} />{" "}
      <Persona nombre={"Maurico"} edad={23} isMarried={true} />{" "}
    </>
  );
}

export default App;
