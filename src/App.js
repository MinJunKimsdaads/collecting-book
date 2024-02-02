import { Routes, Route } from "react-router-dom";
import NewJeans from './pages/NewJeans';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/newjeans'} element={<NewJeans></NewJeans>}></Route>
      </Routes>
    </div>
  );
}

export default App;
