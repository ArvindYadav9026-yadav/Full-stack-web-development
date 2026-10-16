import ControlledComponent from "./components/ControlledComponent";
import UnControlledComponent from "./components/UnControlledComponent";
import UnControlledComponentUseRef from "./components/UnControlledComponentUseRef";

function App() {

  return (
    <div>
       <ControlledComponent/>
       <UnControlledComponent/>
       <UnControlledComponentUseRef/>
    </div>
  );
}

export default App;