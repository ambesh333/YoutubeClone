import React from 'react'
import {AppContext} from "./context/contextApi";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from "./components/Header";
import Feed from "./components/Feed";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
          <div className="flex flex-col h-full">
            <Header/>
              <Routes>
              <Route path="/" exact element={<Feed />} />
                
              </Routes>
            
          </div>
      </BrowserRouter>
    </AppContext>
    
  )
}

export default App;