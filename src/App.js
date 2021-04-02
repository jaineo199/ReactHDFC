import React from 'react';
import Navbar from './Components/Navbar';
import Second from './Components/Second';
import Third from './Components/Third';
// import Demo from './Demo'

import Cards from './Components/Cards';

function App() {
    return (
        <div>
          <Navbar/>
          <Second />
          <hr style={{height:'20px', backgroundColor:'#161717'}}/>
          <Third />
          <Cards />
        
          {/* <Demo/> */}
        </div>
    )
}

export default App
