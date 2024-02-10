import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import { ContextProductCount } from "./utils/context-product";
import { useState } from "react";


function App() {

  const [contextProductCount, setContextProductCount] = useState<number>(0);

  return (
    <ContextProductCount.Provider value={{ contextProductCount, setContextProductCount }}>
      <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
    </Routes>    
    </BrowserRouter>
    </ContextProductCount.Provider>
    
    
  );

}

export default App;
