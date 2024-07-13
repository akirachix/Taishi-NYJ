import Landingpage  from "./Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




const App =()=>{
  return(
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={
          <>          
            <Landingpage/>
          </>
        } />
        

        </Routes>
      </Router>
      
      
    </div>
  )
}
export default App;
