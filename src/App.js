import "./App.css";
import Today from "./components/Today";
import { WheatherProvider } from "./components/WeatherContext";

function App() {
  return (
    <WheatherProvider>
      <Today />
    </WheatherProvider>
  );
}

export default App;
