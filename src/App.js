import { useState } from 'react';
import './App.css';
import { Sidebar } from './Sidebar/Sidebar';

import { Topbar } from './Topbar/topbar';
import { BrowserRouter } from 'react-router-dom';




function App() {





  return (
   


<div className="main">

     <BrowserRouter>
     <Topbar />

     <Sidebar />
     
      
      </BrowserRouter>
      </div>



     
    
      

  )
}

export default App;
