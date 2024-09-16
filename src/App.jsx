import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Forecast from "./screens/forecast/page"

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/forecast" element={<Forecast />}/>
      </Routes>
    </Router>
  )
}