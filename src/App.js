
import React from "react";
import NavBar from "./component/NavBar/NavBar";
import { orginals,action,comedy,horror} from './urls'
import "./App.css"
import Banner from "./component/Banner/Banner";
import RowPost from "./component/RowPost/RowPost";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <div className="container">
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' />
      <RowPost url={comedy} title='Comedy' />
      <RowPost url={horror} title='Horror' />
      </div>
    </div>
  );
}

export default App;
